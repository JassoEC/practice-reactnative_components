import {useNavigation} from '@react-navigation/core';
import React from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import {MenuItem} from '../interfaces/app.interfaces';

interface Props {
  item: MenuItem;
}

export const FlatListMenuItem = ({item}: Props) => {
  const navigation = useNavigation();
  return (
    <TouchableOpacity
      activeOpacity={0.8}
      onPress={() => navigation.navigate(item.component)}>
      <View style={styles.container}>
        <Icon name={item.icon} color="#5856D6" size={20} />
        <Text style={styles.itemText}>{`${item.name}`}</Text>
        <View style={{flex: 1}} />
        <Icon name="chevron-forward-outline" color="#5856D6" size={20} />
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  itemText: {
    marginLeft: 10,
    fontSize: 19,
  },
});
