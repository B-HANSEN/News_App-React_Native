import React, { Component } from 'react';
import { Container, Header, Content, List, ListItem, Thumbnail, Text, Left, Body, Right, Button } from 'native-base';
export default class ListThumbnailExample extends Component {
  render() {
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