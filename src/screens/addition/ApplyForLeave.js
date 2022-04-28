// Ajukan Cuti

import * as React from 'react'
import { Text, VStack, Select, Box, FormControl, CheckIcon, Center, TextArea, Button, View, Input, HStack } from 'native-base'
import DateTimePicker, { DateTimePickerAndroid } from '@react-native-community/datetimepicker';

const ApplyForLeave = () => {
    let [service, setService] = React.useState("");
    const [date, setDate] = React.useState(new Date(Date.now()))

    const onChange = (event, selectedDate) => {
        const currentDate = selectedDate;
        setDate(currentDate)
    }

    const showMode = (currentMode) => {
        DateTimePickerAndroid.open({
            value: date,
            onChange,
            mode: currentMode,
            is24Hour: true
        })
    }

    const showDatepicker = () => {
        showMode('date')
    }

    const showTimepicker = () => {
        showMode('time')
    }

    const transformDateFormat = () => {
        return `
        ${date.getDate()}/${date.getMonth()}/${date.getFullYear()}
        `
    }

    return (
        <>
            <Center>
                <Box w={'100%'} paddingX={4} py={6}>
                    <FormControl isRequired>
                        <FormControl.Label>Jenis Cuti</FormControl.Label>
                        <Select selectedValue={service} minWidth="200" accessibilityLabel="Choose Service" placeholderTextColor={'black'} placeholder="Choose Service" _selectedItem={{
                            bg: "teal.600",
                            endIcon: <CheckIcon size="5" />
                        }} mt={1} onValueChange={itemValue => setService(itemValue)}>
                            <Select.Item label="Cuti Tahunan" value="ux" />
                            <Select.Item label="Cuti Melahirkan" value="web" />
                        </Select>
                    </FormControl>
                    <FormControl isRequired>
                        <FormControl.Label>Alasan Cuti</FormControl.Label>
                        <TextArea h={20} />
                    </FormControl>
                    <FormControl isRequired>
                        <FormControl.Label>Tanggal Cuti</FormControl.Label>
                        <Button onPress={showDatepicker} maxW={100}>Pilih</Button>
                        <Text style={{ includeFontPadding: false }}>{transformDateFormat()}</Text>
                    </FormControl>

                    <FormControl isRequired>
                        <FormControl.Label>Tanggal Cuti</FormControl.Label>
                        <Button onPress={showDatepicker} maxW={100}>Pilih</Button>
                        <Text style={{ includeFontPadding: false }}>{transformDateFormat()}</Text>
                    </FormControl>

                    <VStack space={4}>
                        <Button bgColor={'#4684EB'}>
                            <Text fontWeight={'bold'} color={'#F6FBFB'}>Kirim</Text>
                        </Button>
                        <Button bgColor={'#E1F3F3'} >
                            <Text color={'#4684EB'} ontWeight={'bold'}>Cancel</Text>
                        </Button>
                    </VStack>
                </Box>
            </Center>
        </>
    )
}

export default ApplyForLeave;