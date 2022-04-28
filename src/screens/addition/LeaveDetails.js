
// Detail cuti

import * as React from 'react'
import { HStack, Text, VStack, Box, Button } from 'native-base'

const LeaveDetails = () => {
    return (
        <>
            <Box px={4} py={6} flex={1} bgColor={'white'}>
                <VStack space={6}>
                    <Text>28 Oktober 2021</Text>
                    <HStack justifyContent={'space-between'}>
                        <VStack flex={1}>
                            <Text color={'gray.500'} >Jenis Cuti</Text>
                            <Text fontWeight={'bold'}>Cuti Tahunan</Text>
                        </VStack>
                        <VStack flex={1}>
                            <Text color={'gray.500'}>Persetujuan</Text>
                            <Text fontWeight={'bold'} color={'#0ABB87'}>Approved</Text>
                        </VStack>
                    </HStack>

                    <VStack>
                        <Text>Alasan Cuti</Text>

                        <Text>Lorem ipsum dolor sit amet, adipiscing elit. Sed vestibulum, volutpat consec mattis suspendisse. Molestie eget nulla sollicitudin tempor.</Text>

                    </VStack>

                    <HStack justifyContent={'space-between'}>
                        <VStack flex={1}>
                            <Text color={'gray.500'}>Dari</Text>
                            <Text>27 Oktober 2021</Text>
                        </VStack>
                        <VStack flex={1}>
                            <Text color={'gray.500'}>Sampai</Text>
                            <Text>29 Oktober 2021</Text>
                        </VStack>
                    </HStack>

                    <VStack>
                        <Text color={'gray.500'}>Di Setujui oleh</Text>
                        <Text>Pak Akbar</Text>
                    </VStack>

                    <Button bgColor={'#4684EB'} py={3}>
                        <Text fontWeight={'bold'} color={'white'}>Kembali</Text>
                    </Button>
                </VStack>
            </Box>
        </>
    )
}

export default LeaveDetails;