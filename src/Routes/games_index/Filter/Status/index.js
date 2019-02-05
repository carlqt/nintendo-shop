import React, { PureComponent } from 'react';
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native';
import StatusItem from './Status';

import { STATUS } from '../Constants';

export default class Status extends PureComponent {
  toggleStatus = (status) => {
    const { addStatus, removeStatus } = this.props;

    if (this.isSelected(status)) {
      return removeStatus(status);
    }

    return addStatus(status);
  }

  isSelected = (statusItem) => {
    const { status } = this.props;

    return status.includes(statusItem);
  }

  renderItem = item => (
    <StatusItem
      value={item}
      key={item}
      selected={this.isSelected(item)}
      onPress={this.toggleStatus}
    />
  )

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.header}>Status</Text>
        <View style={styles.itemContainer}>
          { Object.keys(STATUS).map(this.renderItem) }
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    marginTop: 12,
    flex: 1,
  },
  itemContainer: {
    flex: 1,
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  header: {
    fontWeight: '600',
  },
});