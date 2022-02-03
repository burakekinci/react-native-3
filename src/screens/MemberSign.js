import React,{useState} from 'react';
import { SafeAreaView,Text,StyleSheet, Alert} from 'react-native';

import Input from '../components/Input';
import Button from '../components/Button';


function MemberSign({navigation}) {
    
    const [userName,setUserName] = useState(null);
    const [userSurname,setUserSurname] = useState(null);
    const [userAge,setUserAge] = useState(null);
    const [userEmail,setUserEmail] = useState(null); 

    function handleSubmit() {
        if(!userName || !userSurname || !userAge ||!userEmail){
            Alert.alert('Üyelik Kaydı','Bilgileri boş bırakılamaz');
            return;
        }
        const user = {
            userName,
            userSurname,
            userAge,
            userEmail,
        };

        navigation.navigate('MemberResultScreen',{user});
    }

    return(
        <SafeAreaView style={styles.container}>
            <Input label="İsim" placeholer="İsminizi giriniz..."
                onChangeText={setUserName}
            />
            <Input label="Soyisim" placeholer="Soyisminizi giriniz..."
                onChangeText={setUserSurname}
            />
            <Input label="Yaş" placeholer="Yaşınızı giriniz..."
                onChangeText={setUserAge}
            />
            <Input label="E-Posta" placeholer="e-posta adresini giriniz..."
                onChangeText={setUserEmail}
            />
            
            <Button text="Kaydı Tamamla" onPress={handleSubmit} />

        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container:{
        flex:1,
    },
})

export default MemberSign;