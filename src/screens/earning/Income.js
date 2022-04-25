import { SafeAreaView, StatusBar } from 'react-native'

import { Text, Heading, VStack, Box, HStack, Avatar } from 'native-base'
import { MaterialIcons } from '@expo/vector-icons'

const Income = () => {
    return (
        <>
            <SafeAreaView >

                <VStack px={4} py={6}>
                    <Heading fontSize={'xl'}>Pendapatan Karyawan</Heading>

                    <Box bgColor={'#E1F3F3'} px={4} py={2}>
                        <HStack alignItems={'center'} space={3}>
                            <Avatar bgColor={'#4684EB'}>
                                <MaterialIcons name='attach-money' size={26} color={'white'} />
                            </Avatar>
                            <Text fontSize={'xl'}>Oktober 2021</Text>
                        </HStack>
                    </Box>

                    <VStack space={4} mt={4}>
                        <Text fontSize={'xl'}>Jenis Pendapatan</Text>
                        <HStack justifyContent={'space-between'}>
                            <VStack flex={1}>
                                <Text fontSize={'xl'} color={'gray.500'}>Komisi</Text>
                                <Text fontWeight={'bold'} fontSize={'lg'}>Rp.2.000.000.000</Text>
                            </VStack>
                            <VStack flex={1}>
                                <Text fontSize={'xl'} color={'gray.500'}>Tunjangan Kerajinan</Text>
                                <Text fontWeight={'bold'} fontSize={'lg'}>Rp.200.000</Text>
                            </VStack>
                        </HStack>

                        <HStack justifyContent={'space-between'}>
                            <VStack flex={1}>
                                <Text fontSize={'xl'} color={'gray.500'}>Tunjangan Lembur</Text>
                                <Text fontWeight={'bold'} fontSize={'lg'}>Rp.0,00</Text>
                            </VStack>
                            <VStack flex={1}>
                                <Text fontSize={'xl'} color={'gray.500'}>Tunjangan Makan</Text>
                                <Text fontWeight={'bold'} fontSize={'lg'}>Rp.300.000</Text>
                            </VStack>
                        </HStack>

                        <HStack justifyContent={'space-between'}>
                            <VStack flex={1}>
                                <Text fontSize={'xl'} color={'gray.500'}>Tunjangan Operasional</Text>
                                <Text fontWeight={'bold'} fontSize={'lg'}>Rp.5.000.000</Text>
                            </VStack>

                        </HStack>
                    </VStack>

                    <VStack mt={8} space={4}>
                        <Box bgColor={'#E1F3F3'} px={4} py={2}>
                            <HStack alignItems={'center'} space={3}>
                                <Avatar bgColor={'#4684EB'}>
                                    <MaterialIcons name='attach-money' size={26} color={'white'} />
                                </Avatar>
                                <Text fontSize={'xl'}>September 2021</Text>
                            </HStack>
                        </Box>

                        <Box bgColor={'#E1F3F3'} px={4} py={2}>
                            <HStack alignItems={'center'} space={3}>
                                <Avatar bgColor={'#4684EB'}>
                                    <MaterialIcons name='attach-money' size={26} color={'white'} />
                                </Avatar>
                                <Text fontSize={'xl'}>September 2021</Text>
                            </HStack>
                        </Box>
                    </VStack>
                </VStack>
            </SafeAreaView>
        </>
    )
}

export default Income;