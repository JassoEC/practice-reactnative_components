import React, {useState} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {CustomSwitch} from '../components/CustomSwitch';
import {Header} from '../components/Header';

export const SwitchScreen = () => {
  const [state, setState] = useState({
    isActive: true,
    isHungry: false,
    isHappy: true,
  });

  const {isActive, isHungry, isHappy} = state;
  const onChange = (value: boolean, field: keyof typeof state) => {
    setState({
      ...state,
      [field]: value,
    });
  };
  return (
    <View style={{marginHorizontal: 20}}>
      <Header title="Switches" />
      <View style={styles.switchRow}>
        <Text style={styles.switchText}>Is Active</Text>
        <CustomSwitch
          isOn={isActive}
          onChange={value => onChange(value, 'isActive')}
        />
      </View>
      <View style={styles.switchRow}>
        <Text style={styles.switchText}>Is Hungry</Text>
        <CustomSwitch
          isOn={isHungry}
          onChange={value => onChange(value, 'isHungry')}
        />
      </View>
      <View style={styles.switchRow}>
        <Text style={styles.switchText}>Is Happy</Text>
        <CustomSwitch
          isOn={isHappy}
          onChange={value => onChange(value, 'isHappy')}
        />
      </View>
      <Text style={styles.switchText}>{JSON.stringify(state, null, 5)}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  switchText: {
    fontSize: 25,
  },
  switchRow: {
    justifyContent: 'space-between',
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 5,
  },
});
