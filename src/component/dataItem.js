import React, {Component} from 'react';
import { ListItem, Left, Right, Thumbnail, Body, View, Text, Button } from 'native-base';
import TimeAgo from './time';

class DataItem extends Component {

    constructor(props) {
        super(props);
        this.data = props.data;
    }

    handlePress = () => {
      const {url, title} = this.data;
      this.props.onPress({url, title});
    }

    render() {
        return(
            <ListItem thumbnail>
              <Left>
                <Thumbnail square source={{ uri: this.data.urlToImage != null ? this.data.urlToImage
                  : '/Users/bjoernhansen/Documents/GitHub/mytinerary-app/client/src/files/images/circled-right-2.png'
                }}
                />
           </Left>
              <Body>
                <Text numberOfLines={2}>{this.data.title}</Text>
                <Text note numberOfLines={2}>{this.data.description}</Text>
                <View style={{ flex: 1, flexDirection: 'row', marginTop: 8, marginLeft: 0 }}>
                    <Text note>{this.data.source.name}</Text>
                    <TimeAgo time={this.data.publishedAt}/>
                </View>
              </Body>
              <Right>
                <Button transparent onPress={this.handlePress}>
                  <Text>View</Text>
                </Button>
              </Right>
            </ListItem>
        );
    }
}

export default DataItem;