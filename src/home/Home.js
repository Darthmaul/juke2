import React, { Component } from 'react'
import { ScrollView, TouchableHighlight, View, StyleSheet, Platform, Image } from 'react-native'
import colors from 'HSColors'
import socialColors from 'HSSocialColors'
import fonts from 'HSFonts'
import Icon from 'react-native-vector-icons/MaterialIcons'

import {
  Text,
  Button,
  Grid,
  Col,
  Row,
  Avatar
} from 'react-native-elements'
import { List, ListItem } from 'react-native-elements'
const Sound = require('react-native-sound');

//Require my audio, perhaps seek refining this to a list. 
const requireAudio = require('../advertising.mp3');

//list of avatars and random names for the listview
const list = [
  {
    title: 'Song 1',
    icon: 'play-arrow'
  },
  {
    title: 'Song 3',
    icon: 'play-arrow'
  },
  {
    title: 'Song 4',
    icon: 'play-arrow'
  },
  {
    title: 'Song 5',
    icon: 'play-arrow'
  },
  {
    title: 'Song 6',
    icon: 'play-arrow'
  },
  {
    title: 'Song 7',
    icon: 'play-arrow'
  },
  {
    title: 'Song 8',
    icon: 'play-arrow'
  },
]

//Main home class
class Home extends Component {
  
  constructor(props) {
    super(props);

    Sound.setCategory('Ambient', true); // true = mixWithOthers

    this.playSoundBundle = () => {
      const s = new Sound('advertising.mp3', Sound.MAIN_BUNDLE, (e) => {
        if (e) {
          console.log('error', e);
        } else {
          s.setSpeed(1);
          console.log('duration', s.getDuration());
          s.play(() => s.release()); // Release when it's done so we're not using up resources
        }
      });
    };
}   
  render () {
    return (
      <ScrollView style={{backgroundColor: 'white'}}>
        <Text h3 style={styles.albums}>Albums</Text>
        <Avatar
          large
          icon={{type: 'rocket', color: 'orange'}}
          overlayContainerStyle={{backgroundColor: 'white'}}
          onPress={() => console.log("Works!")}
          activeOpacity={0.7}
          containerStyle={{flex: 4}}
        />
        <Text h3 style={styles.singles}>Singles</Text>
      {/*Dynamically load our list based on the list constant above*/}
        <List containerStyle={{marginBottom: 20}}>
          {
            list.map((item, i) => (
              <ListItem
                key={i}
                title={item.title}
                leftIcon={{name: item.icon}}
              />
            ))
          }
        </List>
      {/*Let's play that audio! Need to somehow render this inside the list :)*/}
        <Button title="Main bundle audio" onPress={this.playSoundBundle}/>
      </ScrollView>
    )
  }
}

//stylesheet, very similar syntax to CSS if you're familiar
styles = StyleSheet.create({
  container: {
    flex: 1,
    margin: 15
  },
  heading: {
    color: 'white',
    marginTop: 10,
    fontSize: 22
  },
  singles: {
    textAlign: 'center',
    marginTop: 75,
    marginBottom: -15,
  },
  albums: {
    textAlign: 'center',
    marginTop: 75,
    marginBottom: 0,
  },
  hero: {
    marginTop: 60,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 40,
    backgroundColor: colors.primary2
  },
  titleContainer: {
  },
  button: {
    marginTop: 15
  },
  title: {
    textAlign: 'center',
    color: colors.grey2,
    ...Platform.select({
      ios: {
        fontFamily: fonts.ios.black
      }
    })
  }
})

export default Home
