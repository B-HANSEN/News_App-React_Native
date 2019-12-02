import React, { Component } from 'react';
import { ListItem, Left, Right, Thumbnail, Body, Text, Button, View } from 'react-native';


class DataItem extends Component {

    constructor(props) {
        super(props);
        this.data = props.data;
    }

    render() {
        return (
            <ListItem thumbnail>
            <Left>
              <Thumbnail square source={{
                  uri: this.data.urlToImage
                  != null
                  ? this.data.urlToImage
                  : '/Users/bjoernhansen/Documents/GitHub/mytinerary-app/client/src/files/images/circled-right-2.png'
                }}
                />
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
        )
    }
}

export default DataItem;