import React from 'react';
import {FlatList, Text, View} from 'react-native';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {FlatListMenuItem} from '../components/FlatListMenuItem';
import {MenuItem} from '../interfaces/app.interfaces';
import {styles} from '../theme/appTheme';

const menuItems: MenuItem[] = [
  {
    name: 'Animation 101',
    icon: 'cube-outline',
    component: 'Animation101Screen',
  },
  {
    name: 'Animation 102',
    icon: 'albums-outline',
    component: 'Animation102Screen',
  },
];

export const HomeScreen = () => {
  const {top} = useSafeAreaInsets();

  const renderListHeader = () => (
    <View style={{marginTop: top + 20, marginBottom: 20}}>
      <Text style={styles.title}>Opciones de menú</Text>
    </View>
  );

  const separator = () => (
    <View style={{borderBottomWidth: 2, marginVertical: 8, opacity: 0.4}} />
  );

  return (
    <View style={{flex: 1, ...styles.globalMargin}}>
      <FlatList
        data={menuItems}
        renderItem={({item}) => <FlatListMenuItem item={item} />}
        keyExtractor={item => item.icon}
        ListHeaderComponent={renderListHeader}
        ItemSeparatorComponent={separator}
      />
    </View>
  );
};
