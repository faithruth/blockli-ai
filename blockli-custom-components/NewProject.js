// Made with Blockli AI for BuddyBoss App
// Contributors: admin, Philip Ikpeiwunna, Dayo Akins, Faith Ruth, Emmanuel Ademola, Nia Ikpeiwunna. 
//For permissions to use this code, contact the author admin via email: dev-email@wpengine.local

// Importing necessary components from React and React Native
import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

// Component: NewProject
// This component is a functional component that displays a NewProject
const NewProject = ({  }) => {
// Component's return statement with JSX 
  return (
    <View style={styles.textContainer}>
        <Text style={styles.title}>Spiderman: Far From Home</Text>
        <Text>Action/Adventure • 2h 9m</Text>
        <View style={styles.ratingContainer}>
          <Text>⭐</Text>
          <Text>5.4 Stars</Text>
        </View>
      </View>
  );
};

// StyleSheet for styling the components 
const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    padding: 20,
    borderWidth: 1,
    borderColor: '#ccc',
    marginRight: 10, // Added as per the specification
    backgroundColor: '#fff',
  },
  image: {
    width: 100, // Adjust width as necessary
    height: 150, // Adjust height as necessary
    borderRadius: 8, // Optional, if you want rounded corners
  },
  textContainer: {
    marginLeft: 10, // Provide space between image and text
    justifyContent: 'center',
  },
  title: {
    fontSize: 24,
    color: 'black',
  },
  ratingContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
});

// Exporting the component for use in other parts of the app
export default NewProject;