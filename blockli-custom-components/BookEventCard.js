// Made with Blockli AI for BuddyBoss App
// Contributors: admin, Philip Ikpeiwunna, Dayo Akins, Faith Ruth, Emmanuel Ademola, Nia Ikpeiwunna. 
//For permissions to use this code, contact the author admin via email: dev-email@wpengine.local

// Importing necessary components from React and React Native
import React from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';

// Component: BookEventCard
// This component is a functional component that displays a BookEventCard
const BookEventCard = ({  }) => {
// Component's return statement with JSX 
  return (
    <View style={styles.container}>
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
    marginRight: 10,
  },
  image: {
    width: 308.087,
    height: 265.801,
    flexShrink: 0,
    borderRadius: 8.238,
    backgroundColor: 'black',
    opacity: 0.9, // Represents the linear gradient overlay effect
  },
  title: {
    color: '#FFF',
    fontSize: 27.459,
    fontWeight: '700',
    letterSpacing: -0.56,
    width: 142.786,
    marginTop: -30, // Overlap the image based on design
    backgroundColor: 'transparent',
    paddingHorizontal: 10, // To ensure the text does not touch the sides
  },
  button: {
    width: 309.186,
    height: 79.081,
    flexShrink: 0,
    borderRadius: 5.492,
    backgroundColor: '#5251FA',
    shadowColor: 'rgba(138, 149, 158, 0.5)',
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowRadius: 23,
    elevation: 23,
    shadowOpacity: 0.2,
    justifyContent: 'center', // Center the text vertically
    marginTop: 10, // Distance between the title and button
  },
  buttonText: {
    color: '#FFF',
    textAlign: 'center',
    fontSize: 24.164,
    fontWeight: '400',
    letterSpacing: -0.549,
  },
});

// Exporting the component for use in other parts of the app
export default BookEventCard;