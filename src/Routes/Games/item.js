import React, { PureComponent } from 'react';
import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';

import Header from 'src/Components/headers';
import ImageItem from './image_item';

export default class Item extends PureComponent {
  onPress = () => {
    const { onItemPress, title, id } = this.props;

    onItemPress({
      title,
      id,
    });
  }

  render() {
    const {
      gameArt,
      originalPrice,
      salePrice,
      releaseDate,
      title,
      id,
      salePercentage,
      currentPrice,
    } = this.props;

    return(
      <TouchableOpacity key={id} style={styles.itemContainer} onPress={this.onPress}>
        <View style={styles.imageContainer}>
          <ImageItem
            salePercent={salePercentage}
            source={gameArt}
          />
        </View>
        <View style={styles.infoContainer}>
          <Header type="h1">{title}</Header>
          <Text style={styles.releaseDate}>{releaseDate}</Text>
          <View style={styles.priceContainer}>
            { salePrice ?
              <Text style={styles.originalPrice}>
                ${originalPrice}
              </Text> :
              null
            }

            <Text style={[salePrice && styles.saleItem]}>${currentPrice}</Text>
          </View>
        </View>
      </TouchableOpacity>
    );
  }
}

const styles = StyleSheet.create({
  itemContainer: {
    backgroundColor: 'white',
    flexDirection: 'row',
    borderRadius: 8,
    margin: 4,
    flex: 1,
  },
  imageContainer: {
    padding: 8,
    justifyContent: 'center',
  },
  image: {
    width: 115,
    height: 115,
  },
  infoContainer: {
    flex: 1,
    padding: 8,
  },
  originalPrice: {
    color: '#999',
    textDecorationLine: 'line-through',
  },
  saleItem: {
    color: '#f47b2b',
    fontWeight: 'bold',
  },
  priceContainer: {
    flex: 1,
    justifyContent: 'flex-end',
  },
  releaseDate: {
    color: '#999',
  },
});