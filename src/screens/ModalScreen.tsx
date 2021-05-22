import React, {useState} from 'react';
import {Button, Modal, StyleSheet, Text, View} from 'react-native';
import {Header} from '../components/Header';
import {styles} from '../theme/appTheme';

export const ModalScreen = () => {
  const [isVisible, setVisible] = useState(false);
  return (
    <View style={styles.globalMargin}>
      <Header title="Modal Screen" />
      <Button title="Mostar modal" onPress={() => setVisible(true)} />
      <Modal animationType="fade" visible={isVisible} transparent>
        <View style={modalStyles.modalContent}>
          <View
            style={{
              backgroundColor: 'white',
              width: '90%',
              height: 200,
              justifyContent: 'center',
              alignItems: 'center',
              shadowOffset: {
                width: 0,
                height: 10,
              },
              shadowOpacity: 0.25,
              elevation: 10,
            }}>
            <Header title="Titulo de modal" />
            <Text>Cuerpo de modal</Text>
            <Button title="Cerrar" onPress={() => setVisible(false)} />
          </View>
        </View>
      </Modal>
    </View>
  );
};

const modalStyles = StyleSheet.create({
  modalContent: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.3)',
    justifyContent: 'center',
    alignItems: 'center',
  },
});
