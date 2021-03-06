import React from 'react';
import { StyleSheet, View } from 'react-native';
import Image from 'src/Components/Image';

const Hero = (props) => {
  const { source } = props;

  if (source) {
    return (
      <Image
        style={styles.image}
        source={source.image.url}
      />
    )
  }

  return(
    <View style={styles.hero}>
    </View>
  )
}

const styles = StyleSheet.create({
  hero: {
    height: 250,
    width: '100%',
    backgroundColor: 'red',
  },
  image: {
    height: 250,
    width: '100%',
  },
})

export default Hero;