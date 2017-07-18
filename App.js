import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Animation from 'lottie-react-native';

import anim from './soda_loader.json';

export default class App extends React.Component {
  componentDidMount() {
    this.animation.play();
  }
  render() {
    return (
      <View style={styles.container}>
        <View>
          <Animation ref={ animation => {
              this.animation = animation;
            }}
            style={{
              width: 150,
              height: 150,
            }}
            loop={true}
            source={anim}
          />
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
     backgroundColor: '#A6207E',
  },
  box: {
    backgroundColor:  '#000000',
    justifyContent: 'center',
    alignItems: 'center',
    height: 100,
    width: 100,
  }
});
