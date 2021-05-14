import React, {Component} from 'react';
import {
  Text,
  View,
  StyleSheet,
  TextInput,
  FlatList,
  ScrollView,
  Dimensions,
  StatusBar,
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import Locality from './Locality';
import Shop from './Shop';

export class Home extends Component {
  render() {
    const screenHeight = Dimensions.get('window').height;
    const statusBarHeight = StatusBar.currentHeight;
    const DATA = [
      {
        id: 1,
        name: 'Nehru Nagar',
      },
      {
        id: 2,
        name: 'Smriti Nagar',
      },
      {
        id: 3,
        name: 'Indira Market',
      },
      {
        id: 4,
        name: 'Durg',
      },
      {
        id: 5,
        name: 'Bhilai',
      },
      {
        id: 6,
        name: 'Charoda',
      },
    ];

    return (
      <View style={styles.homeWrapper}>
        {/* Header start */}
        <View style={styles.headerWrapper}>
          <View>
            <Text>Hi,</Text>
            <Text style={{fontSize: 16}}>Saurabh</Text>
          </View>
          <View style={styles.headerProfile}>
            <Text style={styles.profileText}>SD</Text>
          </View>
        </View>
        {/* Header End */}

        {/* Search Bar Start */}
        <View style={styles.searchWrapper}>
          <View style={styles.searchBox}>
            <Icon name="search" style={{marginHorizontal: 10}}></Icon>
            <TextInput placeholder="Search Stores Near You"></TextInput>
          </View>
        </View>
        {/* Search Bar End */}

        {/* Locality Start */}
        <View>
          <Text style={{fontWeight: 'bold', margin: 20}}>Locality</Text>
          <FlatList
            style={{marginLeft: 10}}
            data={DATA}
            renderItem={({item}) => <Locality item={item} />}
            keyExtractor={item => item.id}
            showsHorizontalScrollIndicator={false}
            horizontal={true}></FlatList>
        </View>
        {/* Locality End */}

        {/* Store List Start */}
        <View>
          <Text
            style={{
              fontWeight: 'bold',
              margin: 20,
              marginBottom: 10,
              height: 30,
            }}>
            Shops
          </Text>
          <View style={{height: screenHeight - statusBarHeight - 400}}>
            <ScrollView>
              <Shop />
              <Shop />
              <Shop />
              <Shop />
              <Shop />
              <Shop />
            </ScrollView>
          </View>
        </View>
        {/* Store List End */}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  homeWrapper: {
    backgroundColor: '#f8f8f8',
  },
  headerWrapper: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 20,
  },
  headerProfile: {
    backgroundColor: '#ffb800',
    width: 40,
    height: 40,
    borderRadius: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },
  profileText: {
    color: 'white',
    padding: 0,
    margin: 0,
    fontWeight: 'bold',
  },
  searchWrapper: {
    paddingHorizontal: 20,
    paddingVertical: 10,
  },
  searchBox: {
    backgroundColor: '#e5e5e5',
    shadowColor: 'black',
    shadowOffset: {width: 10, height: 50},
    shadowOpacity: 1,
    shadowRadius: 10,
    elevation: 5,
    height: 40,
    borderRadius: 10,
    flexDirection: 'row',
    alignItems: 'center',
  },
});

export default Home;
