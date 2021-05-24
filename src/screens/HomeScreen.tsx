import React, {useContext} from 'react';
import {FlatList, View} from 'react-native';
import {FlatListMenuItem} from '../components/FlatListMenuItem';
import {Header} from '../components/Header';
import {ItemSeparator} from '../components/ItemSeparator';
import {ThemeContext} from '../context/themeContext/ThemeContext';
import {menuItems} from '../data/menuItems';
import {styles} from '../theme/appTheme';

export const HomeScreen = () => {
  const {theme} = useContext(ThemeContext);
  return (
    <View style={{flex: 1, ...styles.globalMargin}}>
      <FlatList
        data={menuItems}
        renderItem={({item}) => <FlatListMenuItem item={item} />}
        keyExtractor={item => item.icon}
        ListHeaderComponent={<Header title="Opciones de menú" />}
        ItemSeparatorComponent={() => <ItemSeparator />}
      />
    </View>
  );
};
