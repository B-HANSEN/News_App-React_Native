import React, { Component } from 'react';
import { Alert } from 'react-native';
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
    
    return (
      <Container>
        <Content>
          <List
            dataArray={this.state.data}
            renderRow={(item) => {
                return <DataItem data={item} />
            }}> 
            </List>
        </Content>
      </Container>
    );
  }
}