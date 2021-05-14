import React from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

const Shop = () => {
  return (
    <View style={styles.shopWrapper}>
      <View>
        <Image
          source={{uri: 'https://picsum.photos/id/1/200/300'}}
          style={styles.image}></Image>
      </View>
      <View>
        <Text style={{fontSize: 16}}>Shop Name One</Text>
        <Text style={{fontWeight: 'bold', fontSize: 12, color: 'grey'}}>
          10AM - 09PM
        </Text>
        <Text style={{fontWeight: 'bold', fontSize: 12}}>
          9865326598 | Behind ICICI
        </Text>
      </View>
      <View style={styles.rating}>
        <Text style={{color: '#FF5B27'}}>4</Text>
        <Icon name="star" color="#FF5B27"></Icon>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  shopWrapper: {
    marginHorizontal: 20,
    marginTop: 15,
    flexDirection: 'row',
    alignItems: 'center',
    borderBottomColor: '#e5e5e5',
    paddingBottom: 15,
    borderBottomWidth: 1,
  },
  image: {
    width: 60,
    height: 60,
    borderRadius: 15,
    marginRight: 25,
  },
  rating: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-evenly',
    width: 35,
    backgroundColor: 'rgba(255, 91, 39, 0.37)',
    borderRadius: 12,
    position: 'absolute',
    right: 0,
    top: 0,
  },
});

export default Shop;
