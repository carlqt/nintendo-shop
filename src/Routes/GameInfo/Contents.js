import React, { Fragment, PureComponent } from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { Chip } from 'react-native-paper';

import Hero from './hero';

export default class Contents extends PureComponent {
  renderCategory = ({title}) => {
    return(
      <Chip style={styles.chip} key={title}>
        { title }
      </Chip>
    );
  }

  render() {
    const {
      title,
      large_icon: largeIcon,
      release_date: releaseDate,
      game_category_ref: categories,
      number_of_players: numberOfPlayers,
    } = this.props;

    return(
      <Fragment>
        <Hero
          source={largeIcon}
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
                { categories.map(this.renderCategory) }
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
  chip: {
    alignSelf: 'flex-start',
    flex: -1,
    marginHorizontal: 2,
  },
});