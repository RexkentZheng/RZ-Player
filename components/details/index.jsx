import React, { Component } from 'react';
import tools from './../../lib/site/tools';
import { View, Text, TouchableOpacity, StatusBar, ScrollView, Image } from 'react-native';
import styles from './../style';
import Video from './video';
import Loading from './../loading/index';
import {observer, inject} from 'mobx-react';

@inject('store')
@observer
export default class Details extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: false,
      details: {
        m3u8_urls: [],
        imgUrl: '   ',
      },
      m3u8Url: '---'
    }
  }

  componentDidMount() {
    const { site, detail } = this.props.route.params;
    this.setState({
      loading: true
    });
    tools.detail_get(site, detail).then((res) => {
      this.setState({
        loading: false,
        details: res,
        m3u8Url: this.getUrl(res.m3u8_urls[0])
      })
    })
  }

  getName (name) {
    return name.split('$')[0].split('>')[1]
  }

  getUrl (name) {
    const inputDom = name.split(this.getName(name))[0];
    const valuePart = inputDom.split(' ')[3];
    console.log(valuePart.split('"')[1])
    return valuePart.split('"')[1];
  }

  getImgUrl (dom) {
    const valuePart = dom.split(' ')[2];
    return valuePart.split('"')[1];
  }

  updateM3U8 (m3u8Url) {
    this.setState({ m3u8Url })
  }

  render() {
    const { navigation, store } = this.props;

    return (
      <View style={styles.detail}>
        <StatusBar barStyle="dark-content" hidden={store.fullScreen} />
        <Loading loading={this.state.loading} text='正在载入详情，请稍候' />
        <View style={styles.detailVideoWrapper}>
          <Video videoUrl={this.state.m3u8Url} navigation={navigation}/>
        </View>
        <ScrollView style={{flex: 1, marginTop: -190, display: `${store.fullScreen ? 'none' : 'flex'}`}}>
            <Text style={styles.detailTitle}>{this.state.details.name}</Text>
            <View style={styles.detailImgWrapper}>
              <Image
                source={{uri: this.getImgUrl(this.state.details.imgUrl)}}
                style={styles.detailImg} />
            </View>
            <Text style={styles.detailDesc}>{this.state.details.desc}</Text>
            <View style={styles.detailWrapper}>
              {
                this.state.details.m3u8_urls.map((item, index) => {
                  return (
                    <TouchableOpacity
                      style={styles.detailWrapperItem}
                      key={`episo-${index}`}
                      onPress={() => this.updateM3U8(this.getUrl(item))}>
                      <Text style={styles.detailWrapperItemText}>{this.getName(item)}</Text>
                    </TouchableOpacity>
                  )
                })
              }
            </View>
        </ScrollView>
      </View>
    )
  }
}
