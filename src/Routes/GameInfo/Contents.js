import React, { Fragment, PureComponent } from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { Badge } from 'react-native-elements'
import Colors from 'src/Lib/Colors';

import Hero from './hero';

export default class Contents extends PureComponent {
  renderCategory = ({title}) => {
    return(
      <Badge
        badgeStyle={styles.badge}
        textStyle={styles.badgeText}
        key={title}
        value={title}
        status="primary"
      />
    );
  }

  getImageURL = () => {
    const {
      large_icon: largeIcon,
      front_box_art: boxArt,
    } = this.props;

    let url;

    if (largeIcon) {
      url = largeIcon.image.url;
    } else {
      url = boxArt.image.image.url;
    }

    return url;
  }

  render() {
    const {
      title,
      release_date: releaseDate,
      game_category_ref: categories,
      number_of_players: numberOfPlayers,
      id,
      slug,
    } = this.props;

    const imageURL = this.getImageURL();

    return(
      <Fragment>
        <Hero
          source={imageURL}
        />

        <View style={styles.contents}>
          <View>
            <Text
              style={{fontWeight: 'bold', fontSize: 24}}
            >
              { title }
            </Text>
            <Text
              style={{color: '#999', fontWeight: '400'}}
            >
              { releaseDate }
            </Text>

            <View style={styles.section}>
              <Text
                style={styles.label}
              >
                Categories
              </Text>
              <View style={styles.chipContainer}>
                {
                  Array.isArray(categories) ?
                    categories.map(this.renderCategory) :
                    <Badge
                      badgeStyle={styles.badge}
                      textStyle={styles.badgeText}
                      value={categories.title}
                      status="primary"
                    />
                }
              </View>
            </View>

            <View style={styles.section}>
              <Text
                style={styles.label}
              >
                Number of Players
              </Text>
              <Text>{numberOfPlayers}</Text>
            </View>

            <View style={styles.section}>
              <Text
                style={styles.label}
              >
                Game Info
              </Text>
              <Text>
                Lorem Ipsum
              </Text>
            </View>
          </View>
        </View>
      </Fragment>
    )
  }

}

const styles = StyleSheet.create({
  contents: {
    padding: 8,
    flex: 1,
  },
  section: {
    marginTop: 24,
  },
  label: {
    fontWeight: '600',
    fontSize: 18,
  },
  chipContainer: {
    flex: 1,
    flexDirection: 'row',
    paddingVertical: 8,
  },
  badge: {
    padding: 2,
    backgroundColor: Colors.NINTENDO_ORANGE,
  },
  badgeText: {
    fontWeight: '600',
  },
});
