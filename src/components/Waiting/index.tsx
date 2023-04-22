import React from 'react';
import { Spinner } from 'native-base';
import { View } from 'react-native';
import S from './styles';

const Waiting = () => {
  return (
    <View style={S.view}>
      <Spinner size={50} color="blue" />
    </View>
  );
};

export default Waiting;
