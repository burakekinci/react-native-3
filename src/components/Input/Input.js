import React from 'react';
import { Text, View, TextInput } from 'react-native';

import styles  from './Input.style';

function Input({label,placeholer, onChangeText}) {
    return(
        <View style={styles.container}>
            <Text style={styles.label}>{label}</Text>
            <View style={styles.input_container}>
                <TextInput style={styles.input} placeholder={placeholer} onChangeText={onChangeText}/>
            </View>
        </View>
    );
}

export default Input;