import React, { Component } from 'react';
import { 
  StyleSheet,
  FlatList,
  TouchableOpacity,
  Text,
  Image,
  View,
} from 'react-native';

import Header from 'src/Components/headers';

export default class GamesList extends Component {
  keyExtractor = (item, index) => item.id;

  imageSource = (source) => {
    return source ? { uri: source } : require('../../../pacman.jpeg');
  }

  renderItem = ({item}) => {
    const {
      front_box_art: gameArt,
      eshop_price: originalPrice,
      sale_price: salePrice,
      title,
    } = item;

    const currentPrice = salePrice || originalPrice
    const salePercentage = ((originalPrice - currentPrice) / originalPrice) * 100

    return(
      <TouchableOpacity key={item.id} style={styles.itemContainer}>
        <View style={styles.imageContainer}>
          <Image
            style={styles.image}
            source={this.imageSource(gameArt)}
          />
        </View>
        <View style={styles.infoContainer}>
          <Header type="h1">{title}</Header>
          <View style={styles.priceContainer}>
            { salePrice ?
              <Text>%{parseInt(salePercentage)}</Text> :
              null
            }

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
    )
  }

  render() {
    const { data } = this.props;

    return(
      <FlatList
        {...{ data }}
        keyExtractor={this.keyExtractor}
        renderItem={this.renderItem}
        style={{flex: 1}}
      />
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
  }
});