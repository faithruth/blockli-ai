// Made with Blockli AI for BuddyBoss App
// Contributors: admin, Philip Ikpeiwunna, Dayo Akins, Faith Ruth, Emmanuel Ademola, Nia Ikpeiwunna. 
//For permissions to use this code, contact the author admin via email: dev-email@wpengine.local

// Importing necessary components from React and React Native
import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';

// Component: ReservationCards
// This component is a functional component that displays a ReservationCards
const ReservationCards = ({  }) => {
// Component's return statement with JSX 
  return (
    <View style={styles.cardContainer}>
      <Image source={{
    uri: 'https://friendly-buck.172-234-47-158.plesk.page/wp-content/uploads/2024/01/tenet_image.png'
  }} style={styles.image} />
      <Text style={styles.title}>Tenet/Live</Text>
      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>Book Now</Text>
      </TouchableOpacity>
    </View>
  );
};

// StyleSheet for styling the components 
const styles = StyleSheet.create({
  cardContainer: {
    marginRight: 10,
  },
  image: {
    width: 308.087,
    height: 265.801,
    flexShrink: 0,
    borderRadius: 8.238,
    // To simulate a linear gradient background on React Native images,
    // we usually use an overlay or a separate component like `LinearGradient` from 'react-native-linear-gradient'.
    // Since this code is illustrative, we'll represent this with just a backgroundColor.
    backgroundColor: 'black',
    marginBottom: 20, // Adjust to create space between image and title, if needed
  },
  title: {
    color: '#FFF',
    fontSize: 27.459,
    // fontFamily: 'Inter', // Ignored as per instructions
    letterSpacing: -0.56,
    width: 142.786,
    marginBottom: 20, // Adjust to create space between title and button, if needed
  },
  button: {
    width: 309.186,
    height: 79.081,
    flexShrink: 0,
    borderRadius: 8.238,
    backgroundColor: '#5251FA',
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: 'rgba(138, 149, 158, 0.5)',
    shadowOffset: { width: 0, height: 4 },
    shadowRadius: 23,
    shadowOpacity: 0.2,
    elevation: 23,
  },
  buttonText: {
    color: '#FFF',
    textAlign: 'center',
    fontSize: 24.164,
    // fontFamily: 'Inter', // Ignored as per instructions
    letterSpacing: -0.549,
  },
});

// Exporting the component for use in other parts of the app
export default ReservationCards;