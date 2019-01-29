import React from 'react';
import { StyleSheet, View } from 'react-native';
import Image from 'src/Components/Image';

const Hero = (props) => {
  const { source } = props;

  return(
    <View style={styles.hero}>
      {
        source ? 
        <Image
          style={styles.image}
          source={source.image.url}
        /> :
        null
      }
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
    flex: 1,
  },
})

export default Hero;