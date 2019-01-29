import React, { PureComponent } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Image  from 'src/Components/Image';

export default class ImageItem extends PureComponent {
  render() {
    const {
      salePercent,
      source,
    } = this.props;

    return(
      <View style={styles.container}>
        { (salePercent && salePercent > 0) ?
          <Text style={styles.badge}>{salePercent}% OFF</Text> :
          null
        }
        <Image
          {...{ source }}
          style={styles.image}
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