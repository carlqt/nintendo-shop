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
})

// Object {
//   "_highlightResult": Object {
//     "content_type": Object {
//       "matchLevel": "none",
//       "matchedWords": Array [],
//       "value": "game",
//     },
//     "system_title": Object {
//       "matchLevel": "none",
//       "matchedWords": Array [],
//       "value": "Nintendo Switch",
//     },
//     "title": Object {
//       "fullyHighlighted": false,
//       "matchLevel": "full",
//       "matchedWords": Array [
//         "m",
//       ],
//       "value": "<em>M</em>ortal Kombat 11",
//     },
//   },
//   "content_type": "game",
//   "description": "The all new Custom Character Variations give you unprecedented control to customize the fighters and make them your own. The new graphics engine showcasing every skull-shattering, eye-popping moment, brings you so close to the fight you can feel it. And featuring a roster of new and returning Klassic Fighters, Mortal Kombat’s best in class cinematic story mode continues the epic saga over 25 years in the making.",
//   "eshop_price": "59.99",
//   "esrb": "RP",
//   "front_box_art": "https://media.nintendo.com/nintendo/bin/j4OBnoY2JWcX0mOVv7SQx6NdZS0xyPTM/bTVZE-9eXvPWo-ZCnbsenV2dD1-oFi-m.png",
//   "id": "t4LftAQ8UizwYukTyiAW5g2qU8xwrYCI",
//   "last_modified": 1548872473160,
//   "microsite_url": "http://www.mortalkombat.com/",
//   "objectID": "t4LftAQ8UizwYukTyiAW5g2qU8xwrYCI",
//   "product_code": "HAC",
//   "release_date": 1555977600000,
//   "system_title": "Nintendo Switch",
//   "title": "Mortal Kombat 11",
//   "url": "/games/detail/mortal-kombat-11-switch",
// }