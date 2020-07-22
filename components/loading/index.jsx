import React from 'react';
import { Modal, Text, ActivityIndicator, StyleSheet, Dimensions, View } from 'react-native';

let {width,height} = Dimensions.get('screen')

export default ({ loading, text }) => {
  return (
    <Modal visible={loading}>
      <View style={styles.loadingWrapper}>
        <ActivityIndicator animating={loading} size='large' />
        <Text>{text || '正在获取最新数据，请耐心等待'}</Text>
      </View>
    </Modal>
  )
}

const styles = StyleSheet.create({
  loadingWrapper: {
    flex: 1,
    alignItems: 'center',
    position: 'absolute',
    justifyContent: 'center',
    width: width,
    height: height,
  }
})
