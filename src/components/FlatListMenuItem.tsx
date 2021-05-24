import {useNavigation} from '@react-navigation/core';
import React, {useContext} from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import {ThemeContext} from '../context/themeContext/ThemeContext';
import {MenuItem} from '../interfaces/app.interfaces';

interface Props {
  item: MenuItem;
}

export const FlatListMenuItem = ({item}: Props) => {
  const navigation = useNavigation();

  const {theme} = useContext(ThemeContext);

  return (
    <TouchableOpacity
      activeOpacity={0.8}
      onPress={() => navigation.navigate(item.component)}>
      <View style={styles.container}>
        <Icon name={item.icon} color={theme.colors.primary} size={20} />
        <Text
          style={{
            ...styles.itemText,
            //color: colors.text,
          }}>{`${item.name}`}</Text>
        <View style={{flex: 1}} />
        <Icon
          name="chevron-forward-outline"
          color={theme.colors.primary}
          size={20}
        />
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
