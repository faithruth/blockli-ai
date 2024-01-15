// Made with Blockli AI for BuddyBoss App
// Contributors: admin, Philip Ikpeiwunna, Dayo Akins, Faith Ruth, Emmanuel Ademola, Nia Ikpeiwunna. 
//For permissions to use this code, contact the author admin via email: dev-email@wpengine.local

// Importing necessary components from React and React Native
import React from 'react';
import { View, Image, Text, StyleSheet } from 'react-native';

// Component: TestComponent
// This component is a functional component that displays a TestComponent
const TestComponent = ({  }) => {
// Component's return statement with JSX 
  return (
    <View style={styles.card}>
        <Image source={{
    uri: imageURL
  }} style={styles.image} />
        <Text style={styles.title}>Spiderman: Far From Home</Text>
        <Text style={styles.subtitle}>Action/Adventure • 2h 9m</Text>
        <Text style={styles.rating}>⭐ 5.4 Stars</Text>
      </View>
  );
};

// StyleSheet for styling the components 
const styles = StyleSheet.create({
  container: {
    marginRight: 10,
  },
  card: {
    backgroundColor: 'white',
    borderRadius: 8,
    padding: 16,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  image: {
    width: '100%',
    height: 200, // Adjust height as needed
    borderRadius: 8,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    marginTop: 8,
  },
  subtitle: {
    fontSize: 16,
    color: 'grey',
  },
  rating: {
    fontSize: 16,
    color: 'gold',
  }
});

// Exporting the component for use in other parts of the app
export default TestComponent;