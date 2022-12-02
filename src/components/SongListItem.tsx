import {GestureResponderEvent, Pressable, Text, View} from 'react-native';
import React, {FC} from 'react';

import Song from '../model/song';

const SongListItem: FC<SongListItemProps> = ({song, onPress}) => {
  return (
    <Pressable onPress={onPress}>
      <View
        style={{
          width: 280,
          borderBottomColor: '#CCCCCC',
          borderBottomWidth: 1,
          paddingVertical: 5
        }}>
        <Text style={{fontFamily: 'Inter', color: 'black', fontSize:16}}>{song.name}</Text>
        <Text style={{fontFamily: 'Inter', color: '#6B6B6B', fontSize:13}}>{song.artist.name}</Text>
      </View>
    </Pressable>
  );
};

type SongListItemProps = {
  song: Song;
  onPress: (event: GestureResponderEvent) => any;
  key: number;
};

export default SongListItem;
