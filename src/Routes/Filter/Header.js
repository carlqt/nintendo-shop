import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

const Header = props => (
  <View style={styles.cotainer}>
    <View style={styles.child}>
      <Icon name="ios-close" size={30} />
    </View>
    <View>
      <Text style={styles.child}>FILTER</Text>
    </View>
    <View style={styles.child}>
      <Text>Reset</Text>
    </View>
  </View>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 12,
    flexDirection: 'row',
    borderWidth: 2,
  },
  child: {
    flexGrow: 1,
  },
});

export default Header;
