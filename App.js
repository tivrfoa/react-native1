import React from 'react';
import { StyleSheet, Text, View, ScrollView } from 'react-native';
import Bananas from './Bananas';
import LotsOfGreetings from './Greeting';
import State1 from './State1';
import LotsOfStyles from './LotsOfStyles';

export default class App extends React.Component {
  render() {
    return (
      <ScrollView contentContainerStyle={styles.scroll}>
       {/* View style={styles.container}> */}
        <Text style={styles.title}>Nice</Text>
        <Text>Open up App.js to start working on your app!</Text>
        <Text>Changes you make will automatically reload.</Text>
        <Text>Shake your phone to open the developer menu.</Text>        
        <Bananas />
        <LotsOfGreetings />
        <Bananas />
        <State1 />
        <LotsOfStyles />
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'green',
    alignItems: 'center',
    justifyContent: 'center',
  },

  title: {
    fontWeight: 'bold',
  },

  scroll: {
    alignItems: 'center',
    justifyContent: 'center',
  },
});
