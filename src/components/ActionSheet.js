import React from 'react'

import { useDisclose, Actionsheet, Box, Text, Center, HStack, VStack } from 'native-base'
import { LinearGradient } from 'expo-linear-gradient'

function ActionSheet({ isOpen, onClose }) {
    const { onToggle } = useDisclose()

    React.useEffect(() => {
        onToggle()
    }, [isOpen])

    return <Center>
        {/* <Button onPress={onOpen}>Actionsheet</Button> */}
        <Actionsheet isOpen={isOpen} onClose={onClose} >
            <Actionsheet.Content borderTopRadius="10" bgColor={'#4684EB'}>

                <VStack space={4} my={6}>
                    <HStack space={4}>
                        <Box p={8} bgColor={'white'} rounded={'md'}>
                            <Text>Delete</Text>
                        </Box>
                        <Box p={8} bgColor={'white'} rounded={'md'}>
                            <Text>Delete</Text>
                        </Box>
                    </HStack>
                    <HStack space={4}>
                        <Box p={8} bgColor={'white'} rounded={'md'}>
                            <Text>Delete</Text>
                        </Box>
                        <Box p={8} bgColor={'white'} rounded={'md'}>
                            <Text>Delete</Text>
                        </Box>
                    </HStack>
                </VStack>

                {/* <HStack>
                    <Actionsheet.Item color={'red.500'}>Delete</Actionsheet.Item>
                    <Actionsheet.Item>Share</Actionsheet.Item>
                </HStack> */}

                {/* <HStack>
                        <Actionsheet.Item>Play</Actionsheet.Item>
                        <Actionsheet.Item>Favourite</Actionsheet.Item>
                    </HStack> */}


            </Actionsheet.Content>
        </Actionsheet>
    </Center>;
}

export default ActionSheet