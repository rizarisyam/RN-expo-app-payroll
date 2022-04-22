import * as React from 'react'

import { Center, Button, Modal, FormControl, Input, Heading, Box, Text } from 'native-base'
import { AntDesign, MaterialCommunityIcons } from '@expo/vector-icons'

const ModalLogout = (props) => {
    const { showModal, onShowModal } = props
    // const [showModal, setShowModal] = React.useState(true)
    return (
        <>
            <Center>
                {/* <Button onPress={() => setShowModal(true)}>Button</Button> */}
                <Modal isOpen={showModal} onClose={onShowModal}>
                    <Modal.Content maxWidth="400px">

                        <Modal.Body>
                            <Center>
                                <Heading fontSize={18} color={'#4684EB'}>Anda yakin ingin keluar</Heading>
                            </Center>
                            <Box justifyContent={'center'} alignItems={'center'} p={8}>
                                <MaterialCommunityIcons name="logout-variant" size={40} color="#277CB9" />
                            </Box>
                        </Modal.Body>
                        <Modal.Footer>
                            <Button.Group space={2} justifyContent={'center'} alignItems={'center'} flex={1}>
                                <Button colorScheme="red" flex={1} rounded={'md'}>
                                    Keluar
                                </Button>
                                <Button variant={'subtle'} rounded={'md'} colorScheme={'fuchsia'} onPress={onShowModal} flex={1}>
                                    <Text color={'#277CB9'} fontWeight={'bold'}>Cancel</Text>
                                </Button>
                            </Button.Group>
                        </Modal.Footer>
                    </Modal.Content>
                </Modal>
            </Center>
        </>
    )
}

export default ModalLogout;