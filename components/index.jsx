import React, {useState, useEffect } from 'react';
import { View, Text, TextInput, TouchableOpacity, SafeAreaView, Modal, ScrollView, ActivityIndicator } from 'react-native';
import MainTable from './mianTable';
import Loading from './loading/index';
import { InputItem } from '@ant-design/react-native';
import RNPickerSelect from 'react-native-picker-select';
import styles from './style';
import tools from './../lib/site/tools';
export default ({ navigation }) => {

  const [sValue, setSValue] = useState('hockey');

  const [list, setList] = useState([]);

  const [keyWords, setKeyWords] = useState('');

  const [loading, setLoading] = useState(false);

  useEffect(()=>{ 
    setLoading(true)
    tools.film_get('zuidazy').then((res) => {
      setList(res.list)
      setLoading(false);
    })
  },[])

  const search = () => {
    setLoading(true)
    tools.search_get('zuidazy', keyWords).then((res) => {
      setLoading(false);
      setList(res.list)
    })
  }

  return (
    <View style={styles.mainView}>
      <Loading loading={loading} />
      <SafeAreaView>
        <ScrollView
          contentInsetAdjustmentBehavior="automatic"
          style={styles.scrollView}>
            <MainTable data={list} navigation={navigation}/>
        </ScrollView>
      </SafeAreaView>
      <View style={styles.buttomPart}>
        {/* <RNPickerSelect
          value={sValue}
          onValueChange={(value) =>setSValue(value)}
          items={[
              { label: 'Football', value: 'football' },
              { label: 'Baseball', value: 'baseball' },
              { label: 'Hockey', value: 'hockey' },
          ]}
        /> */}
        <View style={styles.buttomSearch}>
          <TextInput style={styles.buttomInput} onChangeText={(value) => setKeyWords(value)} />
          <TouchableOpacity style={styles.buttomButton}  onPress={() => search()}>
            <Text>搜索</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}
