import React, {useState} from 'react';
import {
  Keyboard,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  StyleSheet,
  TextInput,
  TouchableWithoutFeedback,
  View,
} from 'react-native';
import {Header} from '../components/Header';
import {styles} from '../theme/appTheme';

export const TextInputScreen = () => {
  const [form, setForm] = useState({
    name: '',
    email: '',
    phone: '',
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
              onChangeText={name => {
                setForm({...form, name});
              }}
              autoCorrect={false}
              autoCapitalize="words"
            />
            <TextInput
              style={stylesLocal.textInput}
              placeholder="Email"
              onChangeText={email => {
                setForm({...form, email});
              }}
              autoCapitalize="none"
              keyboardType="email-address"
            />
            <Header title={JSON.stringify(form, null, 3)} />
            <Header title={JSON.stringify(form, null, 3)} />
            <TextInput
              style={stylesLocal.textInput}
              placeholder="Teléfono"
              onChangeText={phone => setForm({...form, phone})}
              keyboardType="phone-pad"
            />
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
