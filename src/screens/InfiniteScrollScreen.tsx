import React, {useState} from 'react';
import {
  ActivityIndicator,
  FlatList,
  Image,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import {FadeInImage} from '../components/FadeInImage';
import {Header} from '../components/Header';

export const InfiniteScrollScreen = () => {
  const [numbers, setNumbers] = useState([0, 1, 2, 3, 4, 5]);

  const loadMore = () => {
    let newArray: number[] = [];
    for (let i = 0; i < 5; i++) {
      newArray[i] = numbers.length + i;
    }
    setTimeout(() => {
      setNumbers([...numbers, ...newArray]);
    }, 1500);
  };

  return (
    <View style={{flex: 1}}>
      <FlatList
        data={numbers}
        keyExtractor={item => `${item}`}
        renderItem={({item}) => (
          <FadeInImage
            uri={`https://picsum.photos/id/${item}/1024/1024`}
            style={{width: '100%', height: 300, borderRadius: 10}}
          />
        )}
        ListHeaderComponent={() => (
          <View style={{marginHorizontal: 20}}>
            <Header title="Infinite Scroll" />
          </View>
        )}
        onEndReached={loadMore}
        onEndReachedThreshold={0.5}
        ListFooterComponent={() => (
          <View
            style={{
              height: 150,
              width: '100%',
              alignItems: 'center',
              justifyContent: 'center',
            }}>
            <ActivityIndicator size={25} color="blue" />
          </View>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  item: {
    backgroundColor: 'green',
    height: 150,
  },
});
