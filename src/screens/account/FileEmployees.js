
import * as React from 'react'
import { Button, HStack, Text, VStack } from 'native-base'
import { FontAwesome } from '@expo/vector-icons'

const FileEmployees = () => {
    return (
        <>
            <VStack px={4} py={5} space={4}>
                <VStack space={2}>
                    <Text color={'gray.800'} fontWeight={'semibold'}>KTP</Text>
                    <HStack justifyContent={'space-between'} space={4}>
                        <Button flex={1} bgColor={'#AD46EB'}>Upload KTP</Button>

                        <Button flex={1} bgColor={'#444343'} >
                            <HStack alignItems={'center'} space={2} >
                                <FontAwesome name='eye' size={20} color={'white'} />
                                <Text color={'white'}>KTP</Text>
                            </HStack>
                        </Button>
                    </HStack>
                </VStack>

                <VStack space={2}>
                    <Text color={'gray.800'} fontWeight={'semibold'}>Kartu Keluarga</Text>
                    <HStack justifyContent={'space-between'} space={4}>
                        <Button flex={1} bgColor={'#AD46EB'}>Upload KK</Button>
                        <Button flex={1} bgColor={'#444343'}>
                            <HStack alignItems={'center'} space={2} >
                                <FontAwesome name='eye' size={20} color={'white'} />
                                <Text color={'white'}>KK</Text>
                            </HStack>
                        </Button>
                    </HStack>
                </VStack>

                <VStack space={2}>
                    <Text color={'gray.800'} fontWeight={'semibold'}>NPWP</Text>
                    <HStack justifyContent={'space-between'} space={4}>
                        <Button flex={1} bgColor={'#AD46EB'}>Upload NPWP</Button>
                        <Button flex={1} bgColor={'#444343'}>
                            <HStack alignItems={'center'} space={2} >
                                <FontAwesome name='eye' size={20} color={'white'} />
                                <Text color={'white'}>NPWP</Text>
                            </HStack>
                        </Button>
                    </HStack>
                </VStack>

                <VStack space={2}>
                    <Text color={'gray.800'} fontWeight={'semibold'}>Foto</Text>
                    <HStack justifyContent={'space-between'} space={4}>
                        <Button flex={1} bgColor={'#AD46EB'}>Upload Foto</Button>
                        <Button flex={1} bgColor={'#4684EB'}>
                            <HStack alignItems={'center'} space={2} >
                                <FontAwesome name='eye' size={20} color={'white'} />
                                <Text color={'white'}>Foto</Text>
                            </HStack>
                        </Button>
                    </HStack>
                </VStack>

                <VStack space={2}>
                    <Text color={'gray.800'} fontWeight={'semibold'}>Ijazah</Text>
                    <HStack justifyContent={'space-between'} space={4}>
                        <Button flex={1} bgColor={'#AD46EB'}>Upload Ijazah</Button>
                        <Button flex={1} bgColor={'#444343'}>
                            <HStack alignItems={'center'} space={2} >
                                <FontAwesome name='eye' size={20} color={'white'} />
                                <Text color={'white'}>Ijazah</Text>
                            </HStack>
                        </Button>
                    </HStack>
                </VStack>

                <VStack space={2}>
                    <Text color={'gray.800'} fontWeight={'semibold'}>Kontrak</Text>
                    <HStack justifyContent={'space-between'} space={4}>
                        <Button flex={1} bgColor={'#AD46EB'}>Upload Kontrak</Button>
                        <Button flex={1} bgColor={'#444343'}>
                            <HStack alignItems={'center'} space={2} >
                                <FontAwesome name='eye' size={20} color={'white'} />
                                <Text color={'white'}>Kontrak</Text>
                            </HStack>
                        </Button>
                    </HStack>
                </VStack>
            </VStack>
        </>
    )
}

export default FileEmployees;