import React, { PureComponent } from 'react';
import { Image } from 'react-native';

export default class AppImage extends PureComponent {
  imageSource = () => {
    const { source } = this.props;
    return source ? { uri: source } : require('./pacman.jpeg');
  }

  render() {
    const {
      style,
      ...rest
    } = this.props;

    return(
      <Image
        { ...rest }
        {...{ style }}
        source={this.imageSource()}
      />
    )
  }
}