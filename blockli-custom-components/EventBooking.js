// Made with Blockli AI for BuddyBoss App
// Contributors: admin, Philip Ikpeiwunna, Dayo Akins, Faith Ruth, Emmanuel Ademola, Nia Ikpeiwunna. 
//For permissions to use this code, contact the author admin via email: dev-email@wpengine.local

// Importing necessary components from React and React Native
import React from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';

// Component: EventBooking
// This component is a functional component that displays a EventBooking
const EventBooking = ({  }) => {
// Component's return statement with JSX 
  return (
    <View style={[styles.container, styles.marginRight]}>
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
  container: {
    flexShrink: 0,
  },
  marginRight: {
    marginRight: 10,
  },
  image: {
    width: 308.087,
    height: 265.801,
    borderRadius: 8.238,
    backgroundColor: 'black',
  },
  title: {
    color: '#FFF',
    fontSize: 27.459,
    fontWeight: '700',
    width: 142.786,
    letterSpacing: -0.56,
    textAlign: 'center',
    marginTop: -27.459, // To position the title over the image, adjust accordingly
  },
  button: {
    width: 309.186,
    height: 79.081,
    borderRadius: 8.238,
    backgroundColor: '#5251FA',
    justifyContent: 'center', // Center the text inside the button
    shadowColor: 'rgba(138, 149, 158, 0.5)',
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowRadius: 23,
    shadowOpacity: 0.2,
    elevation: 23,
  },
  buttonText: {
    color: '#FFF',
    fontSize: 24.164,
    fontWeight: '400',
    textAlign: 'center',
    letterSpacing: -0.549,
  },
});

// Exporting the component for use in other parts of the app
export default EventBooking;