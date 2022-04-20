
import * as React from 'react'
import { HStack, Spinner, Heading } from 'native-base'

const SpinnerComponent = () => {
    return (
        <HStack flex={1} justifyContent={'center'} alignItems={'center'}>
            <Spinner />
            <Heading color={'blueGray.800'} fontSize={'md'}>
                Loading
            </Heading>
        </HStack>
    )
}

export default SpinnerComponent;