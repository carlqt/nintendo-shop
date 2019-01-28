import React, { PureComponent } from 'react';
import { StyleSheet, Text, Image, View } from 'react-native';

export default class AppImage extends PureComponent {
  imageSource = () => {
    const { source } = this.props;
    return source ? { uri: source } : require('./pacman.jpeg');
  }

  render() {
    const {
      children,
      type,
      salePercent,
    } = this.props;

    return(
      <View style={styles.container}>
        { salePercent > 0 ?
          <Text style={styles.badge}>{salePercent}% OFF</Text> :
          null
        }
        <Image
          style={styles.image}
          source={this.imageSource()}
        />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    position:'relative',
    padding:5
  },
  image: {
    width: 115,
    height: 115,
  },
  badge:{
    color:'#fff',
    position:'absolute',
    zIndex:10,
    top:1,
    right:1,
    padding:1,
    backgroundColor:'#f47b2b',
    borderRadius:5,
    fontWeight: '600',
  },
})