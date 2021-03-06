import React from 'react';
import { Text, TouchableOpacity } from 'react-native';


const ButtonNew = ({ onPress, children }) => {
    return (
    <TouchableOpacity onPress={onPress} style={styles.buttonStyle}>
        <Text style={styles.textStyle}>
            {children}
        </Text>
    </TouchableOpacity>
    );

};

const styles = {
    buttonStyle: {
        width: 160,
        alignSelf: 'center',
        backgroundColor: 'transparent',
        borderRadius: 10,
        height:50,
        alignItems:"center",
        marginLeft: 5,
        marginRight: 5,
        borderColor: 'white',
        borderWidth: 1
        
    },
    textStyle: {
        textAlign: 'center',
        color: 'white',
        fontSize: 18,
        fontWeight: '600',
        paddingTop: 10,
        paddingBottom: 10,
        fontFamily: 'Poppins'
        
    }


};

export default ButtonNew;