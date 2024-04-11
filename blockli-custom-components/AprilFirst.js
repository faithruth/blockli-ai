// Made with Blockli AI for BuddyBoss App
// Contributors: klc, Philip Ikpeiwunna, Dayo Akins, Faith Ruth, Emmanuel Ademola, Nia Ikpeiwunna. 
//For permissions to use this code, contact the author klc via email: dev-email@flywheel.local

// Importing necessary components from React and React Native
import React from 'react';
import { View, Image, StyleSheet } from 'react-native';

// Component: AprilFirst
// This component is a functional component that displays a AprilFirst
const AprilFirst = ({  }) => {
// Component's return statement with JSX 
  return (
    <View style={styles.container}>
      <Image style={styles.logo} source={{
    uri: 'https://your-public-url.com/logo.png'
  }} // Replace with actual URL
  />
    </View>
  );
};

// StyleSheet for styling the components 
const styles = StyleSheet.create({
  container: {
    borderColor: '#ccc',
    borderWidth: 1,
    marginRight: 10,
    padding: 10,
    // Define other styles that you may need for the container
  }
});

// Exporting the component for use in other parts of the app
export default AprilFirst;