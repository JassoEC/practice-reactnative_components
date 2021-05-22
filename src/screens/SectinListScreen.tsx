import React from 'react';
import {SectionList, Text, View} from 'react-native';
import {Header} from '../components/Header';
import {ItemSeparator} from '../components/ItemSeparator';
import {styles} from '../theme/appTheme';

interface Casa {
  casa: string;
  data: string[];
}

const casas: Casa[] = [
  {
    casa: 'DC Comics',
    data: [
      'Batman',
      'Superman',
      'Robin',
      'Batman',
      'Superman',
      'Robin',
      'Batman',
      'Superman',
      'Robin',
      'Batman',
      'Superman',
      'Robin',
      'Batman',
      'Superman',
      'Robin',
    ],
  },
  {
    casa: 'Marvel Comics',
    data: [
      'Antman',
      'Thor',
      'Spiderman',
      'Antman',
      'Antman',
      'Thor',
      'Spiderman',
      'Antman',
      'Antman',
      'Thor',
      'Spiderman',
      'Antman',
      'Antman',
      'Thor',
      'Spiderman',
      'Antman',
      'Antman',
      'Thor',
      'Spiderman',
      'Antman',
    ],
  },
  {
    casa: 'Anime',
    data: [
      'Kenshin',
      'Goku',
      'Saitama',
      'Kenshin',
      'Goku',
      'Saitama',
      'Kenshin',
      'Goku',
      'Saitama',
      'Kenshin',
      'Goku',
      'Saitama',
      'Kenshin',
      'Goku',
      'Saitama',
      'Kenshin',
      'Goku',
      'Saitama',
      'Kenshin',
      'Goku',
      'Saitama',
    ],
  },
];

export const SectionListScreen = () => {
  return (
    <View style={{...styles.globalMargin, flex: 1}}>
      <SectionList
        ListHeaderComponent={<Header title="Section List" />}
        style={{backgroundColor: 'white'}}
        stickySectionHeadersEnabled
        sections={casas}
        renderItem={({item, index}) => <Text>{item}</Text>}
        keyExtractor={(item, index) => item + index}
        renderSectionHeader={({section}) => (
          <View style={{backgroundColor: 'white'}}>
            <Header title={section.casa} />
          </View>
        )}
        ListFooterComponent={() => (
          <Header title={`total de casas ${casas.length}`} />
        )}
        renderSectionFooter={({section}) => (
          <Text
            style={{
              fontSize: 25,
            }}>{`Items por casa ${section.data.length}`}</Text>
        )}
        /* ItemSeparatorComponent={() => <ItemSeparator />} */
        SectionSeparatorComponent={() => <ItemSeparator />}
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
};
