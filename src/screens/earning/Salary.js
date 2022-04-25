import * as React from 'react'

import { SafeAreaView, StatusBar } from 'react-native'
import { Box, HStack, Text, VStack, Center, ScrollView, Pressable } from 'native-base'
import { LinearGradient } from 'expo-linear-gradient'
import { Foundation, AntDesign } from '@expo/vector-icons'

const Salary = ({ navigation }) => {

    const goToIncomeScreen = () => navigation.navigate('IncomeScreen')
    const goToPayrollDeductionsScreen = () => navigation.navigate('PayrollDeductions');

    return (
        <>
            <SafeAreaView style={{ paddingTop: StatusBar.currentHeight }}>
                <LinearGradient colors={['#4684EB', '#00ABFE']} style={{ paddingHorizontal: 14, paddingVertical: 10, height: 250 }}>

                    <Text fontSize={'xl'} fontWeight={'semibold'} color={'white'}>Gaji Karyawan</Text>
                    <HStack mt={4}>
                        <VStack flex={1} space={2} >
                            <Text color={'gray.100'} fontSize={'md'}>Jenis Penggajian</Text>
                            <Text fontWeight={'bold'} color={'white'}>Bulan</Text>
                        </VStack>
                        <VStack flex={1} space={2} >
                            <Text color={'gray.100'} fontSize={'md'}>Gaji Pokok</Text>
                            <Text fontWeight={'bold'} color={'white'}>Rp.142.000.000</Text>
                        </VStack>
                    </HStack>

                    <HStack space={3} mt={6}>
                        <Box bgColor={'white'} flex={1} rounded={'md'} px={2} py={3}>
                            <VStack>
                                <Text fontSize={'xs'} fontWeight={'bold'}>20</Text>
                                <Text color={'gray.500'}>Hadir</Text>
                            </VStack>
                        </Box>

                        <Box bgColor={'white'} flex={1} rounded={'md'} px={2} py={3}>
                            <VStack>
                                <Text fontSize={'xs'} fontWeight={'bold'}>20</Text>
                                <Text color={'gray.500'}>Hari Kerja</Text>
                            </VStack>
                        </Box>

                        <Box bgColor={'white'} flex={1} rounded={'md'} px={2} py={3}>
                            <VStack>
                                <Text fontSize={'xs'} fontWeight={'bold'}>Rp. 142.000.000</Text>
                                <Text color={'gray.500'}>Gaji Bersih</Text>
                            </VStack>
                        </Box>
                    </HStack>


                </LinearGradient>

                <HStack space={3} height={60} top={-50} mx={4}>

                    <Box bgColor={'white'} bottom={-10} shadow={5} flex={1} rounded={'sm'} px={8} py={2} justifyContent={'center'} alignItems={'center'}>

                        <Pressable onPress={goToIncomeScreen}>
                            <HStack space={2} alignItems={'center'}>
                                <Foundation name="dollar-bill" size={32} color="#4684EB" />
                                <Text color={'#4684EB'}  >Pendapatan</Text>
                            </HStack>
                        </Pressable>

                    </Box>


                    <Box bgColor={'white'} bottom={-10} shadow={5} flex={1} rounded={'sm'} px={8} py={2} justifyContent={'center'} alignItems={'center'}>
                        <Pressable onPress={goToPayrollDeductionsScreen}>
                            <HStack space={2} alignItems={'center'}>
                                <Foundation name="dollar-bill" size={32} color="#4684EB" />
                                <Text color={'#4684EB'} fontWeight={'semibold'}>Pengeluaran</Text>
                            </HStack>
                        </Pressable>
                    </Box>
                </HStack>

                <VStack px={4} space={4}>
                    <Text color={'gray.600'} fontSize={'md'}>Riwayat Gaji</Text>
                    <ScrollView>
                        <VStack space={4}>
                            <HStack justifyContent={'space-between'} alignItems={'center'}>
                                <HStack space={3}>
                                    <Box bgColor={'#4684EB'} px={3} py={1} rounded={'md'}>
                                        <VStack>
                                            <AntDesign name="eyeo" size={24} color="white" />
                                            <Text color={'white'} fontSize={'xs'}>view</Text>
                                        </VStack>
                                    </Box>
                                    <VStack justifyContent={'center'}>
                                        <Text fontWeight={'bold'}>Oktober 2021</Text>
                                        <Text color={'gray.500'}>Bulanan</Text>
                                    </VStack>
                                </HStack>
                                <Text fontWeight={'bold'} color={'#1ED69E'}>Paid</Text>
                            </HStack>

                            <HStack justifyContent={'space-between'} alignItems={'center'}>
                                <HStack space={3}>
                                    <Box bgColor={'#4684EB'} px={3} py={1} rounded={'md'}>
                                        <VStack>
                                            <AntDesign name="eyeo" size={24} color="white" />
                                            <Text color={'white'} fontSize={'xs'}>view</Text>
                                        </VStack>
                                    </Box>
                                    <VStack justifyContent={'center'}>
                                        <Text fontWeight={'bold'}>Oktober 2021</Text>
                                        <Text color={'gray.500'}>Bulanan</Text>
                                    </VStack>
                                </HStack>
                                <Text fontWeight={'bold'} color={'#1ED69E'}>Paid</Text>
                            </HStack>

                            <HStack justifyContent={'space-between'} alignItems={'center'}>
                                <HStack space={3}>
                                    <Box bgColor={'#4684EB'} px={3} py={1} rounded={'md'}>
                                        <VStack>
                                            <AntDesign name="eyeo" size={24} color="white" />
                                            <Text color={'white'} fontSize={'xs'}>view</Text>
                                        </VStack>
                                    </Box>
                                    <VStack justifyContent={'center'}>
                                        <Text fontWeight={'bold'}>Oktober 2021</Text>
                                        <Text color={'gray.500'}>Bulanan</Text>
                                    </VStack>
                                </HStack>
                                <Text fontWeight={'bold'} color={'#1ED69E'}>Paid</Text>
                            </HStack>

                            <HStack justifyContent={'space-between'} alignItems={'center'}>
                                <HStack space={3}>
                                    <Box bgColor={'#4684EB'} px={3} py={1} rounded={'md'}>
                                        <VStack>
                                            <AntDesign name="eyeo" size={24} color="white" />
                                            <Text color={'white'} fontSize={'xs'}>view</Text>
                                        </VStack>
                                    </Box>
                                    <VStack justifyContent={'center'}>
                                        <Text fontWeight={'bold'}>Oktober 2021</Text>
                                        <Text color={'gray.500'}>Bulanan</Text>
                                    </VStack>
                                </HStack>
                                <Text fontWeight={'bold'} color={'#1ED69E'}>Paid</Text>
                            </HStack>

                            <HStack justifyContent={'space-between'} alignItems={'center'}>
                                <HStack space={3}>
                                    <Box bgColor={'#4684EB'} px={3} py={1} rounded={'md'}>
                                        <VStack>
                                            <AntDesign name="eyeo" size={24} color="white" />
                                            <Text color={'white'} fontSize={'xs'}>view</Text>
                                        </VStack>
                                    </Box>
                                    <VStack justifyContent={'center'}>
                                        <Text fontWeight={'bold'}>Oktober 2021</Text>
                                        <Text color={'gray.500'}>Bulanan</Text>
                                    </VStack>
                                </HStack>
                                <Text fontWeight={'bold'} color={'#1ED69E'}>Paid</Text>
                            </HStack>
                            <HStack justifyContent={'space-between'} alignItems={'center'}>
                                <HStack space={3}>
                                    <Box bgColor={'#4684EB'} px={3} py={1} rounded={'md'}>
                                        <VStack>
                                            <AntDesign name="eyeo" size={24} color="white" />
                                            <Text color={'white'} fontSize={'xs'}>view</Text>
                                        </VStack>
                                    </Box>
                                    <VStack justifyContent={'center'}>
                                        <Text fontWeight={'bold'}>Oktober 2021</Text>
                                        <Text color={'gray.500'}>Bulanan</Text>
                                    </VStack>
                                </HStack>
                                <Text fontWeight={'bold'} color={'#1ED69E'}>Paid</Text>
                            </HStack>
                        </VStack>


                    </ScrollView>
                </VStack>

            </SafeAreaView>
        </>
    )
}

export default Salary;