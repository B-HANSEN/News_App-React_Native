import React, { Component } from 'react';
import { Alert, View, ActivityIndicator } from 'react-native';
import { Container, Content, List, Text } from 'native-base';

import DataItem from '../../component/dataItem';
import { getArticles } from '../../service/news';


export default class ListThumbnailExample extends Component {

  constructor(props) {
    super(props);

    this.state = {
      isLoading: true,
      data: null
    }
  }

  componentDidMount() {
    getArticles().then(data => {
      this.setState({
        isLoading: false,
        data: data
      });
    }, error => {
      Alert.alert('Error', 'Something went wrong!');
    })
  }

  render() {
    console.log(this.state.data);

    let view = this.state.isLoading ? (
      <View style={{ marginTop: 60, flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <ActivityIndicator animating={this.state.isLoading}  color="#00f0ff" />
        <Text style={{marginTop: 10}} children="Loading news.." />
      </View>
    ) : (
      <List
        dataArray={this.state.data}
        renderRow={(item) => {
          return (
          <DataItem data={item} />
          )
        }}
      /> 
    )
    
    return (
      <Container>
        <Content>
          { view }          
        </Content>
      </Container>
    );
  }
}