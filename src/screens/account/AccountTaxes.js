import * as React from 'react'

import { SafeAreaView, StatusBar, ScrollView } from 'react-native'
import { Box, Heading, HStack, Text, VStack } from 'native-base'
import { LinearGradient } from 'expo-linear-gradient'

const AccountTaxes = () => {
    return (
        <>

            <SafeAreaView>
                <Box >
                    <LinearGradient colors={['#4684EB', '#00ABFE']} style={{ minHeight: '40%' }}>
                        <Heading mx={4} mt={6} color={'white'}>Rekening</Heading>
                    </LinearGradient>

                    <Box bgColor={'white'} mx={4} top={-90} px={4} py={5} rounded={'md'} shadow={'3'}>

                        <VStack space={4}>
                            <VStack>
                                <Text color={'gray.400'}>Nama Rekening</Text>
                                <Text>Muhammad Zikri</Text>
                            </VStack>

                            <VStack>
                                <Text color={'gray.400'}>No Rekening</Text>
                                <Text>5343434324</Text>
                            </VStack>

                            <VStack>
                                <Text color={'gray.400'}>Nama Bank</Text>
                                <Text>BCA</Text>
                            </VStack>
                        </VStack>
                    </Box>

                    <Box top={-60} >
                        <Text mx={4} my={2} fontSize={'md'} color={'gray.700'}>Data Pajak</Text>
                        <VStack space={2} bgColor={'white'} shadow={'1'} rounded={'md'} mx={4} px={4} py={4} >
                            <Text color={'gray.400'}>Nomor Pajak</Text>
                            <Text>0</Text>
                        </VStack>
                    </Box>
                </Box>




            </SafeAreaView>

        </>
    )
}

export default AccountTaxes