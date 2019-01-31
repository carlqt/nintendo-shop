import React, { Component } from 'react';
import { 
  FlatList,
  StyleSheet,
  TouchableOpacity,
  Text,
  View,
} from 'react-native';

import Image from 'src/Components/Image';

export default class List extends Component {
  keyExtractor = (item) => item.id;

  renderItem = ({item}) => {
    const {
      front_box_art: gameArt,
      title,
    } = item;

    return(
      <TouchableOpacity
        style={styles.column}
        onPress={() => this.onPress(item)}
      >
        <Image
          style={{height: 190, width: '100%'}}
          source={gameArt}
        />
        <View style={styles.infoContainer}>
          <Text style={styles.title}>
            { title }
          </Text>
        </View>
      </TouchableOpacity>
    )
  }

  onPress = ({title, id}) => {
    const { onItemPress } = this.props;

    onItemPress({ title, id });
  }

  render() {
    const { data } = this.props;

    if (data.length < 0) {
      return null;
    }

    return(
      <FlatList
        {...{ data }}
        keyExtractor={this.keyExtractor}
        renderItem={this.renderItem}
        numColumns={3}
        contentContainerStyle={{backgroundColor: 'transparent'}}
        columnWrapperStyle={styles.columnWrapper}
      />
    );
  }
}

const styles = StyleSheet.create({
  column: {
    flex: 0.33,
    backgroundColor: 'white',
    marginVertical: 2,
    borderRadius: 4,
  },
  infoContainer: {
    padding: 8,    
  },
  columnWrapper: {
    justifyContent: 'space-between',
    paddingHorizontal: 8,
  }
});