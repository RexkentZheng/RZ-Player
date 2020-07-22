import React from 'react';
import { View, Text } from 'react-native';
import styles from './style';

export default (props) => {
  const { name, type, time, site, detail } = props.itemData;

  const nameWrapper = (name) => {
    let newName = name.replace('<span>', ' ')
    return newName.replace('</span>', '');
  }

  return (
    <View style={styles.tableItem}>
      <View style={styles.tableItemTop}>
        <Text style={styles.tableItemName} onPress={() => {
          console.log(123)
          props.navigation.navigate('Details', props.itemData)
        }}>{nameWrapper(name)}</Text>
        <Text style={styles.tableItemType}>{type}</Text>
      </View>
      <Text style={styles.tableItemTime}>{time}</Text>
    </View>
  )
}