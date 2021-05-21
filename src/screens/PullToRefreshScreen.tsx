import React, {useState} from 'react';
import {ScrollView, RefreshControl, Text, View} from 'react-native';
import {Header} from '../components/Header';
import {styles} from '../theme/appTheme';

export const PullToRefreshScreen = () => {
  const [refreshing, setRefresing] = useState(false);

  const [data, setData] = useState('');

  const onRefresh = () => {
    setRefresing(true);

    setTimeout(() => {
      console.log('Refreshing');

      setRefresing(false);
      setData('Hola mundirijillo');
    }, 5000);
  };
  return (
    <ScrollView
      refreshControl={
        <RefreshControl
          refreshing={refreshing}
          onRefresh={onRefresh}
          progressViewOffset={10}
          progressBackgroundColor="white"
          colors={['red', 'orange', 'green']}
          style={{backgroundColor: '#5856D6'}}
        />
      }>
      <View style={styles.globalMargin}>
        <Header title="Pull To refresh" />
        <Header title={data || ''} />
      </View>
    </ScrollView>
  );
};
