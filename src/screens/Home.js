
import React, { useState, useEffect } from 'react';
import { StyleSheet, SafeAreaView, StatusBar } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient'
import { Avatar, Icon, Box, Divider, HStack, ScrollView, View, VStack, Heading, Text, Center, Button, Pressable } from 'native-base'
import { FontAwesome5, MaterialIcons, MaterialCommunityIcons } from '@expo/vector-icons'

import BottomNavigation from '../components/BottomNavigation';
import SpinnerComponent from '../components/Spinner';
import Card from '../components/Card';
// import Tabs from '../components/Tabs';

import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'

export default function Home({ navigation, route }) {
    const [post, setPost] = useState([])
    const [loading, setLoading] = useState(false)
    const [number] = useState(10000.900)
    const [selected, setSelected] = React.useState(1);

    const currencyFormat = (number) => {
        return 'Rp.' + number.toFixed(2).replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1, ')
    }

    useEffect(() => {
        fetchPost()
    }, [])

    const fetchPost = async () => {
        setLoading(true)
        try {
            const response = await fetch('https://jsonplaceholder.typicode.com/posts')
            const data = await response.json()
            setLoading(false)
            setPost(data)
        } catch (error) {
            console.log(error)
        }
    }

    const goToAccountPage = () => {
        navigation.navigate('Account')
        console.log(route)
    }

    const goToHomeScreen = () => {
        navigation.navigate('Home')
    }



    return (
        <>
            <SafeAreaView>
                <Box>
                    <LinearGradient style={styles.container} colors={['#4684EB', '#00ABFE']}>
                        <HStack justifyContent={'space-between'}>
                            <HStack space={2} alignItems={'center'}>
                                <Pressable onPress={goToAccountPage}>
                                    <Avatar bg="green.500" source={{
                                        uri: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80"
                                    }}>
                                        AJ
                                    </Avatar>
                                </Pressable>
                                <VStack justifyContent={'center'}>
                                    <Text color={'white'} fontWeight={'bold'} fontSize={'sm'}>Riza Nurfat Risyam</Text>
                                    <Text color={'white'} fontSize={'xs'}>Full-Stack Developer</Text>
                                </VStack>
                            </HStack>
                            <HStack space={2} alignItems={'center'} color={'white'}>
                                <FontAwesome5 name="bell" size={24} color="white" />
                                <Text color={'white'} fontWeight={'bold'}>5</Text>
                            </HStack>
                        </HStack>

                        <Box bgColor={'white'} rounded={'sm'} p={3} my={3}>
                            <HStack justifyContent={'space-between'}>
                                <Text color={'gray.400'}>Profil Perusahaan</Text>
                                <Text fontWeight={'bold'}>TADS</Text>
                            </HStack>
                        </Box>

                        <HStack justifyContent={'space-between'} space={4}>
                            <Box flex={1} bgColor={'white'} rounded={'sm'} p={3} my={3} minH={20}>
                                <VStack justifyContent={'space-between'} mt={2}>
                                    <Text fontSize={'md'} fontWeight={'bold'} color={'#4684EB'}>{currencyFormat(number)}</Text>
                                    <Text color={'#4684EB'} fontSize={'xs'}>TADS</Text>
                                </VStack>
                            </Box>

                            <Box flex={1} bgColor={'white'} rounded={'sm'} p={3} my={3} minH={20}>
                                <VStack justifyContent={'space-between'}>
                                    <Text fontSize={'2xl'} color={'#4684EB'}>12 <Text fontSize={'sm'}>Tersisa</Text></Text>
                                    <Text color={'#4684EB'} ml={2}>Cuti</Text>
                                </VStack>
                            </Box>
                        </HStack>
                    </LinearGradient>

                </Box>
            </SafeAreaView>

            <Box flex={1} px={4} mt={4}>
                <Heading color={'#4684EB'}>Pengumuman</Heading>

                {loading ? <SpinnerComponent /> : (
                    <ScrollView>
                        {post.map((value, idx) => (
                            <Box key={idx} my={2}>
                                <HStack justifyContent={'space-between'} my={2}>
                                    <Text>{value.title.slice(0, 30)}</Text>
                                    <Text fontSize={12} color={'gray.600'}>{new Date(Date.now()).toLocaleDateString()}</Text>
                                </HStack>
                                <Divider />
                            </Box>
                        ))}
                    </ScrollView>
                )}




            </Box>
            {/* <Tabs /> */}
            {/* <BottomNavigation /> */}
            <Box bg="white" safeAreaTop={5} width="100%" alignSelf="center">
                <Center flex={1}></Center>
                <HStack bg="indigo.600" alignItems="center" safeAreaBottom shadow={6}>
                    <Pressable onPressIn={goToHomeScreen} opacity={route.name === 'Home' ? 1 : 0.5} py="3" flex={1} onPress={() => setSelected(0)}>
                        <Center>
                            <Icon mb="1" as={<MaterialCommunityIcons name={route.name === 'Home' ? "home" : "home-outline"} />} color="white" size="sm" />
                            <Text color="white" fontSize="12">
                                Home
                            </Text>
                        </Center>
                    </Pressable>
                    <Pressable opacity={selected === 1 ? 1 : 0.5} py="2" flex={1} onPress={() => setSelected(1)}>
                        <Center>
                            <Icon mb="1" as={<MaterialCommunityIcons name="newspaper-variant-multiple" />} color="white" size="sm" />
                            <Text color="white" fontSize="12">
                                Search
                            </Text>
                        </Center>
                    </Pressable>
                    <Pressable opacity={selected === 2 ? 1 : 0.6} py="2" flex={1} onPress={() => setSelected(2)}>
                        <Center>
                            <Icon mb="1" as={<MaterialCommunityIcons name={selected === 2 ? "wallet" : "wallet-outline"} />} color="white" size="sm" />
                            <Text color="white" fontSize="12">
                                Cart
                            </Text>
                        </Center>
                    </Pressable>
                    <Pressable onPressIn={goToAccountPage} opacity={route.name === 'Account' ? 1 : 0.5} py="2" flex={1}>
                        <Center>
                            <Icon mb="1" as={<MaterialCommunityIcons name={route.name === 'Account' ? "account" : "account-outline"} />} color="white" size="sm" />
                            <Text color="white" fontSize="12">
                                Account
                            </Text>
                        </Center>
                    </Pressable>
                </HStack>
            </Box>

        </>

    );
}

const styles = StyleSheet.create({
    container: {
        // height: '100%',
        padding: 8
    }
})

