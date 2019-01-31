import React, { Component } from 'react';
import { 
  FlatList,
} from 'react-native';

import Item from './item';

export default class GamesList extends Component {
  keyExtractor = (item) => item.id;

  renderItem = ({item}) => {
    const { onItemPress } = this.props;
    const {
      front_box_art: gameArt,
      eshop_price: originalPrice,
      sale_price: salePrice,
      release_date: releaseDate,
      title,
      id,
    } = item;

    const currentPrice = salePrice || originalPrice
    const salePercentage = parseInt(((originalPrice - currentPrice) / originalPrice) * 100)

    return(
      <Item
        {...{
          gameArt,
          originalPrice,
          salePrice,
          releaseDate,
          title,
          currentPrice,
          salePercentage,
          id,
          onItemPress,
        }}
      />
    )
  }

  render() {
    const { data, fetchNextGames } = this.props;

    return(
      <FlatList
        {...{ data }}
        keyExtractor={this.keyExtractor}
        renderItem={this.renderItem}
        style={{flex: 1}}
        onEndReached={fetchNextGames}
        onEndReachedThreshold={20}
      />
    );
  }
}