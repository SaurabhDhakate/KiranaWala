import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

const Locality = props => {
  return (
    <View
      style={[
        styles.localityWrapper,
        {backgroundColor: props.item.id == 1 ? '#ffb800' : 'white'},
      ]}>
      <View style={styles.localityName}>
        <Text style={{fontWeight: 'bold', textAlign: 'center'}}>
          {props.item.name}
        </Text>
      </View>
      <View
        style={[
          styles.localityArrow,
          {backgroundColor: props.item.id == 1 ? 'white' : '#ff5b27'},
        ]}>
        <Icon
          name="chevron-right"
          style={{marginLeft: 2}}
          color={props.item.id == 1 ? 'black' : 'white'}></Icon>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  localityWrapper: {
    backgroundColor: 'white',
    width: 100,
    height: 120,
    margin: 10,
    elevation: 5,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  localityName: {
    height: 50,
    justifyContent: 'center',
    marginTop: 15,
    marginHorizontal: 10,
  },
  localityArrow: {
    width: 25,
    height: 25,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 15,
    marginBottom: 15,
    marginTop: 15,
  },
});

export default Locality;
