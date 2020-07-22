import React from 'react';
import { View, Text } from 'react-native';
import TableItem from './mainTableItem';

export default (props) => {
  const { data, navigation } = props;
  return (
    <View>
      {
        data.map((item, index) => {
          return <TableItem key={index} itemData={item} navigation={navigation} />
        })
      }
    </View>
  )
}