import React, { useState } from 'react'
import DatePicker from 'react-native-datepicker'

const MyDatePicker = () => {

    const [date, setDate] = useState(new Date())

    const onChange = (date) => {
        setDate(date)
    }

    return (
        <>
            <DatePicker
                style={{ width: 200 }}
                date={date}
                mode="date"
                placeholder="select date"
                format="YYYY-MM-DD"

                confirmBtnText="Confirm"
                cancelBtnText="Cancel"
                customStyles={{
                    dateIcon: {
                        position: 'absolute',
                        left: 0,
                        top: 4,
                        marginLeft: 0
                    },
                    dateInput: {
                        marginLeft: 36
                    }
                    // ... You can check the source to find the other keys.
                }}
                onDateChange={onChange}
            />
        </>
    )
}

export default MyDatePicker;