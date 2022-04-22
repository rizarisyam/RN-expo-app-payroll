
import * as React from 'react'

import { SafeAreaView } from 'react-native'
import { Box, Text, Avatar, HStack, VStack, Icon } from 'native-base'
import { LinearGradient } from 'expo-linear-gradient'
import { FontAwesome5, MaterialIcons, MaterialCommunityIcons, Ionicons } from '@expo/vector-icons'

const AccountPage = () => {
    return (
        <>

            <SafeAreaView>
                <Box position={'relative'} bgColor={'red.500'} height={200}>
                    <LinearGradient colors={['#4684EB', '#00ABFE']} style={{ padding: 14, height: 220 }}>
                        <VStack space={6}>


                            <HStack space={4} alignItems={'center'}>
                                <Avatar width={20} height={20} source={{ uri: 'https://images.unsplash.com/photo-1603415526960-f7e0328c63b1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80' }} />
                                <VStack>
                                    <Text color={'white'} fontWeight={'bold'} fontSize={'md'}>Dandi Sashue</Text>
                                    <Text color={'white'} fontSize={'xs'}>Graphic Designer</Text>
                                    <Text color={'white'} fontSize={'xs'}>IT</Text>
                                </VStack>
                            </HStack>

                            <HStack justifyContent={'space-between'} space={4}>
                                <Box rounded={'md'} py={1} justifyContent={'center'} alignItems={'center'} bgColor={'white'} flex={1}>
                                    <Text color={'gray.400'} fontSize={'xs'}>Kontrak Mulai</Text>
                                    <Text>18 June 2021</Text>
                                </Box>
                                <Box rounded={'md'} py={1} bgColor={'white'} flex={1} justifyContent={'center'} alignItems={'center'}>
                                    <Text color={'gray.400'} fontSize={'xs'}>Kontrak Berakhir</Text>
                                    <Text>17 September 2021</Text>
                                </Box>
                            </HStack>
                        </VStack>
                    </LinearGradient>

                    <Box m={4}>
                        <Box bgColor={'white'} py={3} px={4} shadow={'8'} rounded={'md'} position={'absolute'} width={'full'} bottom={-80}>
                            <HStack space={8}>
                                <VStack space={2}>
                                    <Text color={'gray.400'}>Email</Text>
                                    <Text color={'gray.400'}>Telepon</Text>
                                    <Text color={'gray.400'}>Perusahaan</Text>
                                    <Text color={'gray.400'}>Bergabung</Text>
                                </VStack>
                                <VStack space={2}>
                                    <Text fontWeight={'semibold'}>danisashue@gmail.com</Text>
                                    <Text fontWeight={'semibold'}>0822179989</Text>
                                    <Text fontWeight={'semibold'}>TADS</Text>
                                    <Text fontWeight={'semibold'}>18 January 2021</Text>
                                </VStack>
                            </HStack>
                        </Box>
                    </Box>
                </Box>


            </SafeAreaView >
            <Box marginTop={140} mx={4}>
                <VStack space={2}>
                    <Box bg={'#E1F3F3'} p={3}>
                        <HStack alignItems={'center'} space={4}>
                            <Box bgColor={'#4684EB'} p={1} rounded={'md'}>
                                <Icon size={'xl'} color={'white'} as={<MaterialCommunityIcons name='pencil-box-outline' />} />
                            </Box>
                            {/* <MaterialCommunityIcons /> */}
                            <Text color={'#4684EB'} fontSize={16} fontWeight={'semibold'}>Data Pribadi</Text>
                        </HStack>
                    </Box>

                    <Box bg={'#E1F3F3'} p={3}>
                        <HStack alignItems={'center'} space={4}>
                            <Box bgColor={'#4684EB'} p={1} rounded={'md'} justifyContent={'center'} >
                                <Icon size={'xl'} color={'white'} as={<FontAwesome5 name='money-check-alt' />} />
                            </Box>
                            {/* <MaterialCommunityIcons /> */}
                            <Text color={'#4684EB'} fontSize={16} fontWeight={'semibold'}>Rekening & Pajak</Text>
                        </HStack>
                    </Box>

                    <Box bg={'#E1F3F3'} p={3}>
                        <HStack alignItems={'center'} space={4}>
                            <Box bgColor={'#4684EB'} p={1} rounded={'md'}>
                                <Icon size={'xl'} color={'white'} as={<Ionicons name='checkbox-outline' />} />
                            </Box>
                            {/* <MaterialCommunityIcons /> */}
                            <Text color={'#4684EB'} fontSize={16} fontWeight={'semibold'}>File Karyawan</Text>
                        </HStack>
                    </Box>

                    <Box bg={'#E1F3F3'} p={3}>
                        <HStack alignItems={'center'} space={4}>
                            <Box bgColor={'#D83E3E'} p={1} rounded={'md'}>
                                <Icon size={'xl'} color={'white'} as={<MaterialIcons name='logout' />} />
                            </Box>
                            {/* <MaterialCommunityIcons /> */}
                            <Text color={'#D83E3E'} fontSize={16} fontWeight={'semibold'}>Logout</Text>
                        </HStack>
                    </Box>
                </VStack>
            </Box>
        </>
    )
}

export default AccountPage