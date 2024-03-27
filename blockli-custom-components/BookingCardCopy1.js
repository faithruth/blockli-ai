// Made with Blockli AI for BuddyBoss App
// Contributors: klc, Philip Ikpeiwunna, Dayo Akins, Faith Ruth, Emmanuel Ademola, Nia Ikpeiwunna. 
//For permissions to use this code, contact the author klc via email: dev-email@flywheel.local

// Importing necessary components from React and React Native
import React from 'react';
import { View, Image, Text, StyleSheet } from 'react-native';

// Component: BookingCardCopy1
// This component is a functional component that displays a BookingCardCopy1
const BookingCardCopy1 = ({  }) => {
// Component's return statement with JSX 
  return (
    <View style={styles.container}>
      <Image style={styles.featuredImage} source={{
    uri: 'https://friendly-buck.172-234-47-158.plesk.page/wp-content/uploads/2024/03/Group-10120.png'
  }} />
      <Text style={styles.titleText}>Art and Humanities</Text>
      <Text style={styles.subtitleText}>History, Music & Art, Philosophy</Text>
    </View>
  );
};

// StyleSheet for styling the components 
const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    marginRight: 10
  },
  featuredImage: {
    width: 40,
    height: 40
  },
  titleText: {
    width: 119,
    height: 18,
    flexGrow: 0,
    margin: 3,
    marginLeft: 12,
    marginRight: 39,
    fontSize: 14,
    fontWeight: '600',
    textAlign: 'left',
    color: '#242b42'
  },
  subtitleText: {
    width: 158,
    height: 18,
    marginTop: 21,
    marginBottom: 1,
    marginLeft: 12,
    fontSize: 12,
    fontWeight: 'normal',
    textAlign: 'left',
    color: '#7e8ca0'
  }
});

// Exporting the component for use in other parts of the app
export default BookingCardCopy1;