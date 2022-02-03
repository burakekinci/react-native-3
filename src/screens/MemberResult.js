import React from 'react';
import { SafeAreaView,StyleSheet,Text } from 'react-native';


function MemberResult({route}) {
    
    console.log(route);
    const {user} = route.params;

    return(
        <SafeAreaView>
            <Text style={styles.message}>Kayıt Tamamlandı!</Text>
            <Text style={styles.label}>Üye adı: {user.userName}</Text>
            <Text style={styles.label}>Üye Soyadı: {user.userSurname}</Text>
            <Text style={styles.label}>Üye Yaşı: {user.userAge} </Text>
            <Text style={styles.label}>Üye Eposta adresi: {user.userEmail} </Text>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    label:{
        fontWeight: 'bold',
        fontSize: 20,
        margin: 10,
    },
    message:{
        fontSize:25,
        fontWeight:'bold',
        margin:15,
    }
})

export default MemberResult;