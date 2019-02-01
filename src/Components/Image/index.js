import React, { PureComponent } from 'react';
import { Image, StyleSheet, View } from 'react-native';

export default class AppImage extends PureComponent {
  constructor() {
    super();

    this.state = {
      opacity: 0,
    }
  }

  imageSource = () => {
    const { source } = this.props;
    return source ? { uri: source } : require('./pacman.jpeg');
  }

  onLoad = () => {
    this.setState({ opacity: 1 })
  }

  render() {
    const { opacity } = this.state;
    const {
      style,
      ...rest
    } = this.props;

    const imageOpacity = {
      opacity,
    }

    return(
      <View style={styles.container}>
        <Image
          { ...rest }
          style={[imageOpacity, style]}
          onLoad={this.onLoad}
          source={this.imageSource()}
        /> 
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#CCC'
  },
})