// Made with Blockli AI for BuddyBoss App
// Contributors: admin, Philip Ikpeiwunna, Dayo Akins, Faith Ruth, Emmanuel Ademola, Nia Ikpeiwunna. 
//For permissions to use this code, contact the author admin via email: dev-email@wpengine.local

// Importing necessary components from React and React Native
import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

// Component: MovieCard
// This component is a functional component that displays a MovieCard
const MovieCard = ({ DEEP_LINK, attemptDeepLink,  }) => {
// Component's return statement with JSX 
  return (
   <TouchableOpacity onPress={() => attemptDeepLink(false)(null, DEEP_LINK)}>
    <View style={styles.container}>
      <Image source={{
    uri: 'https://friendly-buck.172-234-47-158.plesk.page/wp-content/uploads/2023/11/spiderman_image.jpg'
  }} style={styles.spidermanImage} />
      <Text style={styles.title}>Spiderman: Far From Home</Text>
      <Text style={styles.subtitle}>Action/Adventure • 2h 9m</Text>
      <View style={styles.rating}>
        <Image source={{
      uri: 'https://my.blockli.dev/wp-content/uploads/2023/10/star.png'
    }} style={styles.starIcon} />
        <Text style={styles.ratingText}>5.4 Stars</Text>
      </View>
    </View>
   </TouchableOpacity>
  );
};

// StyleSheet for styling the components 
const styles = StyleSheet.create({
  container: {
    width: 349.377,
    height: 192,
    flexShrink: 0,
    borderRadius: 5.902,
    backgroundColor: 'red', // Changed background color to red
    shadowColor: "rgba(138, 149, 158, 0.5)",
    shadowOffset: { width: 0, height: 4 },
    shadowRadius: 23,
    elevation: 23,
    shadowOpacity: 0.2,
    marginRight: 10,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 10,
  },
  spidermanImage: {
    width: 115.279,
    height: 160.525,
    flexShrink: 0,
    resizeMode: 'cover',
    alignSelf: 'center',
  },
  title: {
    color: '#1D1D1D',
    fontSize: 19.672,
    fontWeight: '700',
    letterSpacing: -0.401,
    marginTop: 5,
    textAlign: 'center'
  },
  subtitle: {
    color: 'rgba(138, 149, 158, 0.80)',
    fontSize: 15.738,
    fontWeight: '500',
    letterSpacing: -0.334,
    marginTop: 3,
    textAlign: 'center'
  },
  rating: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 5,
  },
  starIcon: {
    width: 14.951,
    height: 14.164,
  },
  ratingText: {
    color: '#00CF99',
    fontSize: 13.77,
    fontWeight: '400',
    lineHeight: 18.295,
    letterSpacing: -0.475,
    marginLeft: 5,
  },
});

// Exporting the component for use in other parts of the app
export default MovieCard;