import React from 'react';
import { ActivityIndicator, StyleSheet, View } from 'react-native';

import Colors from 'src/Lib/Colors';

const Loading = () => {
  return(
    <View style={styles.container}>
      <ActivityIndicator
        size="large"
        color={Colors.NINTENDO_ORANGE}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  }
});

export default Loading;