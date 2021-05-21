import React, {useState} from 'react';
import {
  Keyboard,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableWithoutFeedback,
  View,
} from 'react-native';
import {CustomSwitch} from '../components/CustomSwitch';
import {Header} from '../components/Header';
import {useForm} from '../hooks/useForm';
import {styles} from '../theme/appTheme';

export const TextInputScreen = () => {
  const {form, onChange, isSubscribed} = useForm({
    name: '',
    email: '',
    phone: '',
    isSubscribed: false,
  });

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
      <ScrollView>
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
          <View style={styles.globalMargin}>
            <Header title="Text inputs" />
            <TextInput
              style={stylesLocal.textInput}
              placeholder="Nombre"
              onChangeText={name => onChange(name, 'name')}
              autoCorrect={false}
              autoCapitalize="words"
            />
            <TextInput
              style={stylesLocal.textInput}
              placeholder="Email"
              onChangeText={email => onChange(email, 'email')}
              autoCapitalize="none"
              keyboardType="email-address"
            />

            <TextInput
              style={stylesLocal.textInput}
              placeholder="Teléfono"
              onChangeText={phone => onChange(phone, 'phone')}
              keyboardType="phone-pad"
            />
            <View style={styles.switchRow}>
              <Text style={styles.switchText}>Suscribirse</Text>
              <CustomSwitch
                isOn={isSubscribed}
                onChange={(value: boolean) => onChange(value, 'isSubscribed')}
              />
            </View>
            <Header title={JSON.stringify(form, null, 3)} />
            <View style={{height: 100}} />
          </View>
        </TouchableWithoutFeedback>
      </ScrollView>
    </KeyboardAvoidingView>
  );
};

const stylesLocal = StyleSheet.create({
  textInput: {
    marginBottom: 10,
    borderWidth: 1,
    borderColor: 'rgba(0,0,0,0.3 )',
    height: 50,
    paddingHorizontal: 10,
    borderRadius: 10,
  },
});
