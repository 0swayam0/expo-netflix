import React from 'react';
import PropTypes from 'prop-types';
import { Text, View } from 'react-native';
import { gStyle } from '../constants';

import Cast from '../components/Cast';
import HeaderHome from '../components/HeaderHome';

const MyList = ({ navigation }) => (
  <View style={gStyle.container}>
    <HeaderHome show />

    <View style={gStyle.spacer96} />

    <View style={gStyle.pH4}>
      <Text style={gStyle.heading}>My List</Text>
    </View>

    <Cast navigation={navigation} />
  </View>
);

MyList.propTypes = {
  // required
  navigation: PropTypes.object.isRequired
};

export default MyList;
