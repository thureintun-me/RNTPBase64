import {View, Text, Pressable} from 'react-native';
import React, {useEffect, useState} from 'react';
import Slider from '@react-native-community/slider';
import TrackPlayer, {
  State,
  usePlaybackState,
  useProgress,
} from 'react-native-track-player';
import {Pause, Play, SkipBack, SkipForward} from 'phosphor-react-native';

const Player = () => {
  const progress = useProgress();
  const state = usePlaybackState();

  const [track, setTrack] = useState();

  const getCurrentTrack = async () => {
    let queue = await TrackPlayer.getQueue();
    let currentTrack = await TrackPlayer.getCurrentTrack();

    setTrack(queue[currentTrack]);
  };
  useEffect(() => {
    getCurrentTrack();
  });

  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Text>{track?.title}</Text>
      <View
        style={{
          width: '100%',
          paddingHorizontal: 50,
          flexDirection: 'row',
          justifyContent: 'space-between',
          marginVertical:20
        }}>
        <Text>{progress.position}</Text>
        <Text>{progress.duration}</Text>
      </View>

      <View
        style={{
          width: '100%',
          paddingHorizontal: 50,
          flexDirection: 'row',
          justifyContent: 'space-between',
        }}>
        <Pressable
          onPress={() => {
            TrackPlayer.skipToPrevious();
          }}>
          <SkipBack color="tomato" size={20} />
        </Pressable>
        {state !== State.Playing ? (
          <Pressable onPress={() => TrackPlayer.play()}>
            <Play color="tomato" size={20} />
          </Pressable>
        ) : (
          <Pressable onPress={() => TrackPlayer.pause()}>
            <Pause color="tomato" size={20} />
          </Pressable>
        )}

        <Pressable
          onPress={() => {
            TrackPlayer.skipToNext();
          }}>
          <SkipForward color="tomato" size={20} />
        </Pressable>
      </View>
    </View>
  );
};

export default Player;
