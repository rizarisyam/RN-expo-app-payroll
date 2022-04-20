
import React, { useState, useEffect } from 'react';
import { StyleSheet, View, SafeAreaView, StatusBar } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient'
import { Avatar, Box, Divider, HStack, ScrollView, VStack, Heading, Text } from 'native-base'
import { FontAwesome5 } from '@expo/vector-icons'

import BottomNavigation from './src/components/BottomNavigation';

export default function App() {
  const [post, setPost] = useState([])

  useEffect(() => {
    fetchPost()
  }, [])

  const fetchPost = async () => {
    try {
      const response = await fetch('https://jsonplaceholder.typicode.com/posts')
      const data = await response.json()
      setPost(data)
    } catch (error) {
      console.log(error)
    }
  }
  return (
    <>
      <SafeAreaView style={{ paddingTop: StatusBar.currentHeight }}>
        <Box>
          <LinearGradient style={styles.container} colors={['#4684EB', '#00ABFE']}>
            <HStack justifyContent={'space-between'}>
              <HStack space={2} alignItems={'center'}>
                <Avatar bg="green.500" source={{
                  uri: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80"
                }}>
                  AJ
                </Avatar>
                <VStack justifyContent={'center'}>
                  <Text>Riza Nurfat Risyam</Text>
                  <Text>Full-Stack Developer</Text>
                </VStack>
              </HStack>
              <HStack space={2} alignItems={'center'} color={'white'}>
                <FontAwesome5 name="bell" size={24} color="white" />
                <Text>5</Text>
              </HStack>
            </HStack>

            <Box bgColor={'white'} rounded={'sm'} p={3} my={3}>
              <HStack justifyContent={'space-between'}>
                <Text>Profil Perusahaan</Text>
                <Text>TADS</Text>
              </HStack>
            </Box>

            <Box bgColor={'white'} rounded={'sm'} p={3} my={3}>
              <HStack justifyContent={'space-between'}>
                <Text>Profil Perusahaan</Text>
                <Text>TADS</Text>
              </HStack>
            </Box>
          </LinearGradient>

        </Box>
      </SafeAreaView>

      <Box flex={1} px={4} mt={4}>
        <Heading color={'#4684EB'}>Pengumuman</Heading>
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
      </Box>

      <BottomNavigation />
    </>

  );
}

const styles = StyleSheet.create({
  container: {
    // height: '100%',
    padding: 8
  }
})

