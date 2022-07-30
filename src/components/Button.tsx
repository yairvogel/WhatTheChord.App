import {
    Button as NativeButton,
    ButtonProps as NativeButtonProps,
    View
} from 'react-native'
import React, { ReactElement } from 'react'

const Button = (props: NativeButtonProps): ReactElement => {
    return (
        <View style={{margin: 10}}>
            <NativeButton 
                {...props}
              />
        </View>
    )
}

export default Button;