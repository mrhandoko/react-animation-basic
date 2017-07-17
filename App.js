import React from 'react';
import { StyleSheet, Animated, Easing, Text, View } from 'react-native';

export default class App extends React.Component {
  render() {
    return (
      <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
        <View style={styles.box}>
          <Text style={{ color: "#FFFFFF" }}>Adams Hawa</Text>
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  box: {
    backgroundColor:  '#000000',
    justifyContent: 'center',
    alignItems: 'center',
    height: 100,
    width: 100,
  }
});
