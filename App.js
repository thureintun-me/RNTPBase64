import {View, Text} from 'react-native';
import React, {useEffect} from 'react';
import Player from './src/Player';
import TrackPlayer, {RepeatMode} from 'react-native-track-player';
import {auidoBase64} from './auido/base64';

const track1 = {
  url: `data:audio/mp3;base64,${auidoBase64}`, // Load media from the app bundle
  title: 'Base 64 memory String',
  artist: 'deadmau5',
  // Load artwork from the app bundle
  duration: 166,
};

const track2 = {
  url: require('./auido/file_example_WAV_2MG.wav'), // Load media from the app bundle
  title: 'Local Song',
  artist: 'deadmau5',
  // Load artwork from the app bundle
  duration: 166,
};
const App = () => {
  const setupPlayer = async () => {
    await TrackPlayer.setupPlayer({});
    await TrackPlayer.add([track1, track2]);
    TrackPlayer.setRepeatMode(RepeatMode.Queue);
    await TrackPlayer.play()
  };

  useEffect(() => {
    setupPlayer();
  }, []);
  return <Player />;
};

export default App;
