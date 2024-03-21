// Made with Blockli AI for BuddyBoss App
// Contributors: klc, Philip Ikpeiwunna, Dayo Akins, Faith Ruth, Emmanuel Ademola, Nia Ikpeiwunna. 
//For permissions to use this code, contact the author klc via email: dev-email@flywheel.local

// Importing necessary components from React and React Native
import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

// Component: TestCard
// This component is a functional component that displays a TestCard
const TestCard = ({ CUSTOM_FIELD_1 }) => {
// Component's return statement with JSX 
  return (
    <View style={styles.cardContainer}>
      <View style={styles.card}>
        <Image source={CUSTOM_FIELD_1 || 'No Custom Field 1'} style={styles.cardImage} />
        {/* Additional content would go here. 
            Assuming the screenshot had details like title, genre, duration, and rating, 
            but since we're only focusing on the main image element as per your instruction, 
            I haven't included that here. */}
      </View>
    </View>
  );
};

// StyleSheet for styling the components 
const styles = StyleSheet.create({
  cardContainer: {
    marginRight: 10,
  },
  card: {
    backgroundColor: '#FF0000', // Assuming the value FF000 was a typo, and you meant a red color in hex
    padding: 10,
    borderRadius: 8,
    // Shadow and other styles to resemble the card in screenshot would go here,
    // like elevation for Android and shadow properties for iOS
  },
  cardImage: {
    width: '100%', // You would set a fixed width based on your design requirements
    height: 200, // You would set a fixed height based on your design requirements
    borderRadius: 8, // Assuming there should be a borderRadius like the card itself
  },
});

// Exporting the component for use in other parts of the app
export default TestCard;