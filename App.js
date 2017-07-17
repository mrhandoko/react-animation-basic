import React from 'react';
import { StyleSheet, Animated, Easing, Text, View } from 'react-native';

export default class App extends React.Component {
  componentWillMount() {
    this.animatedValue = new Animated.Value(100);
  }
  componentDidMount() {
    Animated.timing(this.animatedValue, {
      toValue: 150,
      duration: 3000,
      easing: Easing.bounce,
    }).start();
  }
  render() {
    const animatedStyle = { height: this.animatedValue }
    return (
      <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
        <Animated.View style={{ justifyContent:'center', alignItems: 'center', backgroundColor: '#000000', height: 100, width: 100, animatedStyle }}>
          <Text style={{ color: "#FFFFFF" }}>Adams Hawa</Text>
        </Animated.View>
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
