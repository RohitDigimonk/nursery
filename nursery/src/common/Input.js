import React from 'react';
import {TextInput, View, Text} from 'react-native';

const Input =({ label, value, onChangeText, placeholder, secureTextEntry }) => {
    const {inputStyle, labelStyle, containerStyle} = styles;
    return (
        <View style={containerStyle}>
            <Text style={labelStyle}>{label}</Text>
            <TextInput
            secureTextEntry={secureTextEntry}
            placeholder={placeholder}
            autoCorrect={false}
            style={inputStyle}
            value={value}
            onChangeText={onChangeText}
            />
        </View>
    );

};

const styles = {
    inputStyle: {
        color: '#000',
        paddingRight: 5,
        paddingLeft: 5,
        fontSize: 17,
        lineHeight: 23,
        // flex: 2
    },
    labelStyle: {
        fontSize: 18,
        paddingLeft: 20,
        // flex: 1
    },
    containerStyle: {
        height: 23,
        // flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        // borderWidth: 1,
        width: "85%",
        //borderColor: '#008C99',
        marginTop: 20
    }
};


export default Input;