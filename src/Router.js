import React from 'react';
import { StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Welcome from './screens/Welcome';
import MemberSign  from './screens/MemberSign';
import MemberResult from './screens/MemberResult';

const Stack = createNativeStackNavigator();

function App() {
    return(
        <NavigationContainer>
            <Stack.Navigator screenOptions={{headerShown: false,}}>
                <Stack.Screen  name='WelcomeScreen'  component={Welcome} />
                <Stack.Screen  name='MemberResultScreen'  component={MemberResult} />
                <Stack.Screen  name='MemberSignScreen' component={MemberSign}/>
            </Stack.Navigator>
        </NavigationContainer>
    )
}

const styles = StyleSheet.create({
 
});

export default App;
