import React, { useCallback, useMemo, useRef, useState } from 'react';
import { StyleSheet, TouchableWithoutFeedback } from 'react-native';
import BottomSheet from '@gorhom/bottom-sheet';
import { MaterialIcons, FontAwesome5, MaterialCommunityIcons } from '@expo/vector-icons'
import { View, Text, HStack, Box, VStack } from 'native-base'
import { LinearGradient } from 'expo-linear-gradient'
import { useNavigation } from '@react-navigation/native'

import { Portal } from '@gorhom/portal'

const AddButtonSheet = (props) => {

    const navigation = useNavigation()
    // ref
    const bottomSheetRef = useRef(null);

    const [open, setOpen] = useState(false)

    // variables
    const snapPoints = useMemo(() => ['50%'], []);

    // callbacks
    const handleSheetChanges = useCallback((index) => {
        console.log('handleSheetChanges', index);
    }, []);

    const onAddButtonPress = () => {

        bottomSheetRef?.current?.expand()

    }

    const onBottomSheetClose = () => {
        bottomSheetRef?.current.close()
    }

    const leaveScreen = () => {
        navigation.navigate('Addition', {
            screen: 'LeaveScreen'
        });
        onBottomSheetClose()
    }

    const permitScreen = () => {
        navigation.navigate('Addition', {
            screen: 'PermitScreen'
        });
        onBottomSheetClose()
    }




    // renders
    return (
        <>
            <TouchableWithoutFeedback onPress={onAddButtonPress}>
                <MaterialIcons name="library-books" size={26} color={'grey'} style={{ alignItems: 'center', justifyContent: 'center', paddingVertical: 10 }} />
            </TouchableWithoutFeedback>
            <Portal hostName='BottomSheetPortaHost'>

                <BottomSheet
                    ref={bottomSheetRef}
                    index={-1}
                    snapPoints={snapPoints}
                    onChange={handleSheetChanges}
                    enablePanDownToClose={true}
                    onClose={onBottomSheetClose}
                >
                    <LinearGradient colors={['#4684EB', '#00ABFE']} style={{ flex: 1, paddingHorizontal: 40, justifyContent: 'center' }}>
                        <VStack space={4}>
                            <HStack justifyContent={'space-between'} space={4}>
                                <TouchableWithoutFeedback onPress={leaveScreen}>
                                    <Box bgColor={'white'} h={100} flex={1} rounded={'md'} justifyContent={'center'} alignItems={'center'}>
                                        <Text>Cuti</Text>
                                        <Box rounded='3xl' bg={'#E1F3F3'} px={3} py={3} justifyContent={'center'} alignItems={'center'}>
                                            <FontAwesome5 name="newspaper" size={20} color="#4684EB" />
                                        </Box>
                                    </Box>
                                </TouchableWithoutFeedback>
                                <TouchableWithoutFeedback onPress={permitScreen}>
                                    <Box bgColor={'white'} flex={1} rounded={'md'} justifyContent={'center'} alignItems={'center'}>
                                        <Text>Izin</Text>
                                        <Box rounded='3xl' bg={'#E1F3F3'} px={3} py={3} justifyContent={'center'} alignItems={'center'}>
                                            <FontAwesome5 name="unlock-alt" size={20} color="#4684EB" />
                                        </Box>
                                    </Box>
                                </TouchableWithoutFeedback>
                            </HStack>
                            <HStack justifyContent={'space-between'} space={4}>
                                <Box bgColor={'white'} h={100} flex={1} rounded={'md'} justifyContent={'center'} alignItems={'center'}>
                                    <Text>Cuti</Text>
                                    <Box rounded='3xl' bg={'#E1F3F3'} px={3} py={3} justifyContent={'center'} alignItems={'center'}>
                                        <FontAwesome5 name="money-check-alt" size={20} color="#4684EB" />

                                    </Box>
                                </Box>
                                <Box bgColor={'white'} flex={1} rounded={'md'} justifyContent={'center'} alignItems={'center'}>
                                    <Text>Izin</Text>
                                    <Box rounded='3xl' bg={'#E1F3F3'} px={3} py={3} justifyContent={'center'} alignItems={'center'}>
                                        <FontAwesome5 name="user-check" size={20} color="#4684EB" />
                                    </Box>
                                </Box>
                            </HStack>
                        </VStack>
                    </LinearGradient>
                </BottomSheet>

            </Portal>
        </>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 24,
        backgroundColor: 'grey',
    },
    contentContainer: {
        flex: 1,
        paddingLeft: 50
    },
    bottomSheetTitle: {
        fontSize: 24,
        fontWeight: '500'
    }
});

export default AddButtonSheet;