import React from 'react';
import {FlatList, View} from 'react-native';
import {FlatListMenuItem} from '../components/FlatListMenuItem';
import {Header} from '../components/Header';
import {menuItems} from '../data/menuItems';
import {styles} from '../theme/appTheme';

export const HomeScreen = () => {
  const separator = () => (
    <View style={{borderBottomWidth: 2, marginVertical: 8, opacity: 0.4}} />
  );

  return (
    <View style={{flex: 1, ...styles.globalMargin}}>
      <FlatList
        data={menuItems}
        renderItem={({item}) => <FlatListMenuItem item={item} />}
        keyExtractor={item => item.icon}
        ListHeaderComponent={<Header title="Opciones de menú" />}
        ItemSeparatorComponent={separator}
      />
    </View>
  );
};
