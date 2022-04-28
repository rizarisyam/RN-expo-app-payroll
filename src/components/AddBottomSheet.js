import React, { useCallback, useMemo, useRef } from 'react';
import { StyleSheet, TouchableWithoutFeedback } from 'react-native';
import BottomSheet from '@gorhom/bottom-sheet';
import { MaterialIcons } from '@expo/vector-icons'
import { View, Text, HStack, Box, VStack } from 'native-base'
import { LinearGradient } from 'expo-linear-gradient'
import { useNavigation } from '@react-navigation/native'

import { Portal } from '@gorhom/portal'

const AddButtonSheet = (props) => {

    const navigation = useNavigation()
    // ref
    const bottomSheetRef = useRef(null);

    // variables
    const snapPoints = useMemo(() => ['50%'], []);

    // callbacks
    const handleSheetChanges = useCallback((index) => {
        console.log('handleSheetChanges', index);
    }, []);

    const onAddButtonPress = () => {
        bottomSheetRef?.current?.expand()
    }


    // renders
    return (
        <>
            <TouchableWithoutFeedback onPress={onAddButtonPress}>
                <MaterialIcons name="library-books" size={26} color={'grey'} style={{ alignItems: 'center', justifyContent: 'center', paddingVertical: 10 }} />
            </TouchableWithoutFeedback>
            <Portal>

                <BottomSheet
                    ref={bottomSheetRef}
                    index={-1}
                    snapPoints={snapPoints}
                    onChange={handleSheetChanges}
                    enablePanDownToClose={true}
                >
                    <LinearGradient colors={['#4684EB', '#00ABFE']} style={{ flex: 1, paddingHorizontal: 40, justifyContent: 'center' }}>
                        <VStack space={4}>
                            <HStack justifyContent={'space-between'} space={4}>
                                <TouchableWithoutFeedback onPress={() => navigation.navigate('Addition', {
                                    screen: 'LeaveScreen'
                                })}>
                                    <Box bgColor={'white'} padding={4} h={100} flex={1} rounded={'md'}>
                                        <Text>Cuti</Text>
                                    </Box>
                                </TouchableWithoutFeedback>
                                <Box bgColor={'white'} padding={4} flex={1} rounded={'md'}>
                                    <Text>Izin</Text>
                                </Box>
                            </HStack>
                            <HStack justifyContent={'space-between'} space={4}>
                                <Box bgColor={'white'} padding={4} h={100} flex={1} rounded={'md'}>
                                    <Text>Cuti</Text>
                                </Box>
                                <Box bgColor={'white'} padding={4} flex={1} rounded={'md'}>
                                    <Text>Izin</Text>
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