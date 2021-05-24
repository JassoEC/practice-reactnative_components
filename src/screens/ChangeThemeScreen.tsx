import React, {useContext} from 'react';
import {Text, TouchableOpacity, View} from 'react-native';
import {Header} from '../components/Header';
import {ThemeContext} from '../context/themeContext/ThemeContext';
import {styles} from '../theme/appTheme';

export const ChangeThemeScreen = () => {
  const {
    setDarkTheme,
    setLightTheme,
    theme: {colors},
  } = useContext(ThemeContext);

  return (
    <View style={styles.globalMargin}>
      <Header title="Theme" />
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'space-around',
        }}>
        <TouchableOpacity
          onPress={setLightTheme}
          activeOpacity={0.8}
          style={{
            backgroundColor: colors.primary,
            height: 50,
            width: 150,
            borderRadius: 20,
            justifyContent: 'center',
          }}>
          <Text style={{color: 'white', textAlign: 'center', fontSize: 22}}>
            Light
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={setDarkTheme}
          activeOpacity={0.8}
          style={{
            backgroundColor: colors.primary,
            height: 50,
            width: 150,
            borderRadius: 20,
            justifyContent: 'center',
          }}>
          <Text style={{color: 'white', textAlign: 'center', fontSize: 22}}>
            Dark
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};
