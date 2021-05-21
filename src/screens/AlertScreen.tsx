import React from 'react';
import {Alert, Button, Text, View} from 'react-native';
import prompt from 'react-native-prompt-android';
import {Header} from '../components/Header';
import {styles} from '../theme/appTheme';

export const AlertScreen = () => {
  const showAlert = () => {
    Alert.alert(
      'Titulo de alerta',
      'Mensaje de la alerta',
      [
        {
          text: 'Cancel',
          onPress: () => console.log('Boton de cancel'),
          style: 'destructive',
        },
        {
          text: 'Ok',
          onPress: () => console.log('Boton de ok'),
          style: 'default',
        },
      ],
      {
        cancelable: true,
        onDismiss: () => console.log('on Dismis'),
      },
    );
  };

  const showPrompt = () => {
    prompt(
      'Enter password',
      'Enter your password to claim your $1.5B in lottery winnings',
      [
        {
          text: 'Cancel',
          onPress: () => console.log('Cancel Pressed'),
          style: 'cancel',
        },
        {
          text: 'OK',
          onPress: password => console.log('OK Pressed, password: ' + password),
        },
      ],
      {
        type: 'secure-text',
        cancelable: false,
        defaultValue: 'test',
        placeholder: 'placeholder',
      },
    );
  };

  return (
    <View style={styles.globalMargin}>
      <Header title="Alerts" />
      <Button title="Mostrar alerta" onPress={showAlert} />
      <View style={{height: 10}} />
      <Button title="Mostrar Propmt" onPress={showPrompt} />
    </View>
  );
};
