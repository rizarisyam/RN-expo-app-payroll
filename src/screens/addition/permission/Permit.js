// Izin

import * as React from 'react'
import { TouchableWithoutFeedback } from 'react-native'
import { ScrollView, Text, Box, Container, VStack, HStack, Fab } from 'native-base'
import { Ionicons } from '@expo/vector-icons'

import { useNavigation } from '@react-navigation/native'

const Permit = ({ route }) => {

    const navigation = useNavigation()
    console.log(route)

    return (
        <>
            <ScrollView >
                <Box my={6} mx={4}>
                    <Text fontSize={'md'} mb={3}>Oktober 2021</Text>
                    <VStack space={4}>
                        <TouchableWithoutFeedback onPress={() => navigation.navigate('Addition', {
                            screen: 'LeaveDetailsScreen'
                        })}>

                            <Box bgColor={'#FFFFFF'} rounded={'md'} p={5} shadow={'4'}>
                                <VStack space={3}>
                                    <HStack space={2}>
                                        <Text fontSize={'md'}>28 Oktober 2021</Text>
                                        <Text fontSize={'md'}>|</Text>
                                        <Text fontSize={'md'} fontWeight={'bold'}>Sakit</Text>
                                    </HStack>
                                    <HStack>
                                        <Box bgColor={'#FFEDC8'} px={4} py={1}>
                                            <Text>Waiting</Text>
                                        </Box>
                                    </HStack>
                                </VStack>
                            </Box>
                        </TouchableWithoutFeedback>

                        <Box bgColor={'#FFFFFF'} rounded={'md'} p={5} shadow={'4'}>
                            <VStack space={3}>
                                <HStack space={2}>
                                    <Text fontSize={'md'}>06 September 2021</Text>
                                    <Text fontSize={'md'}>|</Text>
                                    <Text fontSize={'md'} fontWeight={'bold'}>Izin Lainnya</Text>
                                </HStack>
                                <HStack>
                                    <Box bgColor={'#98FADD'} px={4} py={1}>
                                        <Text>Approved</Text>
                                    </Box>
                                </HStack>
                            </VStack>
                        </Box>

                        <Box bgColor={'#FFFFFF'} rounded={'md'} p={5} shadow={'4'}>
                            <VStack space={3}>
                                <HStack space={2}>
                                    <Text fontSize={'md'}>12 September 2021</Text>
                                    <Text fontSize={'md'}>|</Text>
                                    <Text fontSize={'md'} fontWeight={'bold'}>Izin Lainnya</Text>
                                </HStack>
                                <HStack>
                                    <Box bgColor={'#FFBDBD'} px={4} py={1}>
                                        <Text>Reject</Text>
                                    </Box>
                                </HStack>
                            </VStack>
                        </Box>
                    </VStack>
                </Box>

                <Box my={6} mx={4}>
                    <Text fontSize={'md'} mb={3}>Oktober 2021</Text>
                    <VStack space={4}>
                        <Box bgColor={'#FFFFFF'} rounded={'md'} p={5} shadow={'4'}>
                            <VStack space={3}>
                                <HStack space={2}>
                                    <Text fontSize={'md'}>28 Oktober 2021</Text>
                                    <Text fontSize={'md'}>|</Text>
                                    <Text fontSize={'md'} fontWeight={'bold'}>Sakit</Text>
                                </HStack>
                                <HStack>
                                    <Box bgColor={'#FFEDC8'} px={4} py={1}>
                                        <Text>Waiting</Text>
                                    </Box>
                                </HStack>
                            </VStack>
                        </Box>

                        <Box bgColor={'#FFFFFF'} rounded={'md'} p={5} shadow={'4'}>
                            <VStack space={3}>
                                <HStack space={2}>
                                    <Text fontSize={'md'}>06 September 2021</Text>
                                    <Text fontSize={'md'}>|</Text>
                                    <Text fontSize={'md'} fontWeight={'bold'}>Izin Lainnya</Text>
                                </HStack>
                                <HStack>
                                    <Box bgColor={'#98FADD'} px={4} py={1}>
                                        <Text>Approved</Text>
                                    </Box>
                                </HStack>
                            </VStack>
                        </Box>

                        <Box bgColor={'#FFFFFF'} rounded={'md'} p={5} shadow={'4'}>
                            <VStack space={3}>
                                <HStack space={2}>
                                    <Text fontSize={'md'}>12 September 2021</Text>
                                    <Text fontSize={'md'}>|</Text>
                                    <Text fontSize={'md'} fontWeight={'bold'}>Izin Lainnya</Text>
                                </HStack>
                                <HStack>
                                    <Box bgColor={'#FFBDBD'} px={4} py={1}>
                                        <Text>Reject</Text>
                                    </Box>
                                </HStack>
                            </VStack>
                        </Box>
                    </VStack>
                </Box>

                {route.name == 'PermitScreen' && (
                    <Fab
                        onPress={() => navigation.navigate('Addition', { screen: 'AddPermitScreen' })}
                        placement='bottom-right'
                        colorScheme={'blue'}
                        size={'lg'}
                        style={{ bottom: 70, display: 'none' }}
                        icon={<Ionicons name='add-circle' size={24} color={'white'} />}
                    >
                        <Text>Test</Text>
                    </Fab>
                )}

            </ScrollView>
        </>
    )
}

export default Permit;