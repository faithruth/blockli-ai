// Made with Blockli AI for BuddyBoss App
// Contributors: admin, Philip Ikpeiwunna, Dayo Akins, Faith Ruth, Emmanuel Ademola, Nia Ikpeiwunna. 
//For permissions to use this code, contact the author admin via email: dev-email@wpengine.local

// Importing necessary components from React and React Native
import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

// Component: TestNameCopy
// This component is a functional component that displays a TestNameCopy
const TestNameCopy = ({  }) => {
// Component's return statement with JSX 
  return (
    <View style={styles.container}>
      <Image source={{
    uri: 'https://friendly-buck.172-234-47-158.plesk.page/wp-content/uploads/2023/11/spiderman_image.jpg'
  }} style={styles.image} />
      <Text style={styles.title}>Spiderman: Far From Home</Text>
      <Text style={styles.subtitle}>Action/Adventure • 2h 9m</Text>
      <View style={styles.ratingContainer}>
        <Image source={{
      uri: 'https://my.blockli.dev/wp-content/uploads/2023/10/star.png'
    }} style={styles.starIcon} />
        <Text style={styles.rating}>5.4 Stars</Text>
      </View>
    </View>
  );
};

// StyleSheet for styling the components 
const styles = StyleSheet.create({
  container: {
    width: 349.377,
    height: 192,
    borderRadius: 5.902,
    backgroundColor: '#FFF',
    shadowColor: 'rgba(138, 149, 158, 0.5)',
    shadowOffset: {
      width: 0,
      height: 4
    },
    shadowRadius: 23,
    elevation: 23,
    shadowOpacity: 0.2,
    marginRight: 10,
    alignItems: 'center',
    justifyContent: 'center',
    flexShrink: 0,
  },
  image: {
    width: 115.279,
    height: 160.525,
    flexShrink: 0,
    backgroundColor: 'transparent',
  },
  title: {
    width: 143.213,
    color: '#1D1D1D',
    fontSize: 19.672,
    fontWeight: '700',
    letterSpacing: -0.401,
  },
  subtitle: {
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
export default TestNameCopy;