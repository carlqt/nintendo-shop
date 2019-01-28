import React, { PureComponent } from 'react';
import { StyleSheet, Text } from 'react-native';

export default class Header extends PureComponent {
  render() {
    const {
      children,
      type,
    } = this.props;

    return(
      <Text
        style={[styles[type]]}
       >
        { children }
      </Text>
    )
  }
}

const styles = StyleSheet.create({
  h1: {
    fontSize: 20,
    fontWeight: 'bold',
  }
})