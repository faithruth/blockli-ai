// Made with Blockli AI for BuddyBoss App
// Contributors: admin, Philip Ikpeiwunna, Dayo Akins, Faith Ruth, Emmanuel Ademola, Nia Ikpeiwunna. 
//For permissions to use this code, contact the author admin via email: dev-email@wpengine.local

// Importing necessary components from React and React Native
import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

// Component: DevMode2
// This component is a functional component that displays a DevMode2
const DevMode2 = ({  }) => {
// Component's return statement with JSX 
  return (
    <View style={styles.textContainer}>
        <Text style={styles.title}>Spiderman: Far From Home</Text>
        <Text style={styles.subTitle}>Action/Adventure • 2h 9m</Text>
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
    flexShrink: 0,
    borderRadius: 5.902,
    backgroundColor: '#FFF',
    marginRight: 10,
    shadowColor: 'rgba(138, 149, 158, 0.5)',
    shadowOffset: { width: 0, height: 4 },
    shadowRadius: 23,
    elevation: 23,
    shadowOpacity: 0.2,
    flexDirection: 'row',
    alignItems: 'center',
    overflow: 'hidden',
  },
  spidermanImage: {
    width: 115.279,
    height: 160.525,
    flexShrink: 0,
    backgroundColor: 'transparent',
  },
  textContainer: {
    flex: 1,
    paddingHorizontal: 10,
  },
  title: {
    width: 143.213,
    color: '#1D1D1D',
    fontSize: 19.672,
    fontWeight: '700',
    letterSpacing: -0.401,
    marginBottom: 5,
  },
  subTitle: {
    color: 'rgba(138, 149, 158, 0.80)',
    fontSize: 15.738,
    fontWeight: '500',
    letterSpacing: -0.334,
    marginBottom: 5,
  },
  ratingContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  starIcon: {
    width: 14.951,
    height: 14.164,
    marginRight: 5,
  },
  rating: {
    color: '#00CF99',
    fontSize: 13.77,
    lineHeight: 18.295,
    letterSpacing: -0.475,
  },
});

// Exporting the component for use in other parts of the app
export default DevMode2;