import React from 'react';
import {Alert, Button, Text, View} from 'react-native';
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

  return (
    <View style={styles.globalMargin}>
      <Header title="Alerts" />
      <Button title="Mostrar alerta" onPress={showAlert} />
    </View>
  );
};
