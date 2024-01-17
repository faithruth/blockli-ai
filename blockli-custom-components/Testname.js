// Made with Blockli AI for BuddyBoss App
// Contributors: admin, Philip Ikpeiwunna, Dayo Akins, Faith Ruth, Emmanuel Ademola, Nia Ikpeiwunna. 
//For permissions to use this code, contact the author admin via email: dev-email@wpengine.local

// Importing necessary components from React and React Native
import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

// Component: TestName
// This component is a functional component that displays a TestName
const TestName = ({ TITLE, CUSTOM_FIELD_1, CUSTOM_FIELD_2 }) => {
// Component's return statement with JSX 
  return (
    <View style={styles.container}>
      <Image source={{
    uri: IMAGE_URL_3
  }} style={styles.spidermanImage} />
      <Text style={styles.movieTitle}>{TITLE || 'Post Title'}</Text>
      <Text style={styles.movieInfo}>{CUSTOM_FIELD_1 || 'No Custom Field 1'}</Text>
      <View style={styles.ratingContainer}>
        <Image source={{
      uri: IMAGE_URL_2
    }} style={styles.starIcon} />
        <Text style={styles.rating}>{CUSTOM_FIELD_2 || 'No Custom Field 2'}</Text>
      </View>
    </View>
  );
};

// StyleSheet for styling the components 
const styles = StyleSheet.create({
  container: {
    width: 349.377,
    height: 192,
    flexShrink: 0,
    borderRadius: 5.902,
    backgroundColor: '#FFF',
    shadowColor: 'rgba(138, 149, 158, 0.5)',
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowRadius: 23,
    elevation: 23,
    shadowOpacity: 0.2,
    marginRight: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
  spidermanImage: {
    width: 115.279,
    height: 160.525,
    flexShrink: 0,
    background: 'linear-gradient(180deg, rgba(0, 0, 0, 0.10) 0%, #000 129.87%)',
  },
  movieTitle: {
    width: 143.213,
    color: '#1D1D1D',
    fontSize: 19.672,
    fontWeight: '700',
    letterSpacing: -0.401,
  },
  movieInfo: {
    color: 'rgba(138, 149, 158, 0.80)',
    fontSize: 15.738,
    fontWeight: '500',
    letterSpacing: -0.334,
  },
  ratingContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  starIcon: {
    width: 14.951,
    height: 14.164,
  },
  rating: {
    color: '#00CF99',
    fontSize: 13.77,
    lineHeight: 18.295,
    letterSpacing: -0.475,
  },
});

// Exporting the component for use in other parts of the app
export default TestName;