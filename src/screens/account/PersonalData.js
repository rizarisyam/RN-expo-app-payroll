import * as React from 'react'

import { SafeAreaView } from 'react-native'
import { Text, Center, Box, HStack, VStack, Input, Button } from 'native-base'
import { LinearGradient } from 'expo-linear-gradient'
const PersonalData = () => {
    return (
        <>
            <SafeAreaView>
                <Box>
                    <LinearGradient colors={['#4684EB', '#00ABFE']} style={{ paddingHorizontal: 15, paddingVertical: 50, height: '70%' }}>
                        <Box bgColor={'white'} rounded={'md'} shadow={'5'} px={4} py={5} position={'relative'}>
                            <HStack justifyContent={'space-between'}>
                                <VStack space={3}>
                                    <Text color={'gray.400'}>Status Karyawan</Text>

                                    <Box>
                                        <Text color={'gray.400'} fontSize={'xs'}>No KTP</Text>
                                        <Text color={'gray.700'} fontWeight={'semibold'}>23213213343432</Text>
                                    </Box>

                                    <Box>
                                        <Text color={'gray.400'} fontSize={'xs'}>Tempat Lahir</Text>
                                        <Text color={'gray.700'} fontWeight={'semibold'}>Jakarta</Text>
                                    </Box>

                                    <Box>
                                        <Text color={'gray.400'} fontSize={'xs'}>Jenis Kelamin</Text>
                                        <Text color={'gray.700'} fontWeight={'semibold'}>Laki-Laki</Text>
                                    </Box>

                                    <Box>
                                        <Text color={'gray.400'} fontSize={'xs'}>Jumlah Anak</Text>
                                        <Text color={'gray.700'} fontWeight={'semibold'}>0</Text>
                                    </Box>

                                    <Box>
                                        <Text color={'gray.400'} fontSize={'xs'}>Alamat KTP</Text>
                                        <Text color={'gray.700'} fontWeight={'semibold'}>Cipinang Muara, RT. 008/008, Kel. Cipinang Muara, Kec. Jatinegara, Jakarta Timur</Text>
                                    </Box>

                                    <Box>
                                        <Text color={'gray.400'} fontSize={'xs'}>Alamat Domisili</Text>
                                        <Text color={'gray.700'} fontWeight={'semibold'}>-</Text>
                                    </Box>

                                </VStack>

                                <VStack space={3} position={'absolute'} right={0}>
                                    <Box bgColor={'#98FADD'} px={4} maxW={70}>
                                        <Text >Aktif</Text>
                                    </Box>

                                    <Box>
                                        <Text color={'gray.400'} fontSize={'xs'}>No. Kartu Keluarga</Text>
                                        <Text color={'gray.700'} fontWeight={'semibold'}>6443435345435</Text>
                                    </Box>

                                    <Box>
                                        <Text color={'gray.400'} fontSize={'xs'}>Tanggal Lahir</Text>
                                        <Text color={'gray.700'} fontWeight={'semibold'}>06 April 2000</Text>
                                    </Box>

                                    <Box>
                                        <Text color={'gray.400'} fontSize={'xs'}>Status Menikah</Text>
                                        <Text color={'gray.700'} fontWeight={'semibold'}>Belum Menikah</Text>
                                    </Box>

                                    <Box>
                                        <Text color={'gray.400'} fontSize={'xs'}>Status Kontrak</Text>
                                        <Text color={'gray.700'} fontWeight={'semibold'}>Kontrak 3 Bulan</Text>
                                    </Box>
                                </VStack>
                            </HStack>
                        </Box>
                    </LinearGradient>
                </Box>
            </SafeAreaView>

            <Box px={4}>
                <VStack space={3}>
                    <Text>Change Password</Text>
                    <Input py={1} borderStyle={'dotted'} />
                    <Button maxW={150} bgColor={'#AD46EB'} rounded={'sm'}>Ubah Password</Button>
                </VStack>
            </Box>
        </>
    )
}

export default PersonalData;