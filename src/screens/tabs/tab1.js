import React, { Component } from 'react';
import { Alert } from 'react-native';
import { Container, Header, Content, List, ListItem, Thumbnail, Text, Left, Body, Right, Button } from 'native-base';

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
          <List>
            <ListItem thumbnail>
              <Left>
                <Thumbnail square source={{ uri: 'https://i.ibb.co/rHwY7bc/Brian.jpg' }} />
              </Left>
              <Body>
                <Text>This is our title</Text>
                <Text note numberOfLines={2}>Its time to build a difference . . Its time to build a difference . . Its time to build a difference . .</Text>
              </Body>
              <Right>
                <Button transparent>
                  <Text>View</Text>
                </Button>
              </Right>
            </ListItem>

            <ListItem thumbnail>
              <Left>
                <Thumbnail square source={{ uri: 'https://i.ibb.co/rHwY7bc/Brian.jpg' }} />
              </Left>
              <Body>
                <Text>This is our title</Text>
                <Text note numberOfLines={2}>Its time to build a difference . . Its time to build a difference . . Its time to build a difference . .</Text>
              </Body>
              <Right>
                <Button transparent>
                  <Text>View</Text>
                </Button>
              </Right>
            </ListItem>

            <ListItem thumbnail>
              <Left>
                <Thumbnail square source={{ uri: 'https://i.ibb.co/rHwY7bc/Brian.jpg' }} />
              </Left>
              <Body>
                <Text>This is our title</Text>
                <Text note numberOfLines={2}>Its time to build a difference . . Its time to build a difference . . Its time to build a difference . .</Text>
              </Body>
              <Right>
                <Button transparent>
                  <Text>View</Text>
                </Button>
              </Right>
            </ListItem>

            <ListItem thumbnail>
              <Left>
                <Thumbnail square source={{ uri: 'https://i.ibb.co/rHwY7bc/Brian.jpg' }} />
              </Left>
              <Body>
                <Text>This is our title</Text>
                <Text note numberOfLines={2}>Its time to build a difference . . Its time to build a difference . . Its time to build a difference . .</Text>
              </Body>
              <Right>
                <Button transparent>
                  <Text>View</Text>
                </Button>
              </Right>
            </ListItem>
          </List>
        </Content>
      </Container>
    );
  }
}