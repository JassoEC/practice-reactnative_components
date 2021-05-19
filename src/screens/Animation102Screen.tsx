import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

export const Animation102Screen = () => {
  return (
    <View style={{flex: 1}}>
      <View style={styles.purpleBox} />
    </View>
  );
};

const styles = StyleSheet.create({
  purpleBox: {
    //backgroundColor: '#5856D6',
    backgroundColor: 'red',
    width: 150,
    height: 150,
  },
});
