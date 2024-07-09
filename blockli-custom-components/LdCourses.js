// Made with Blockli AI for BuddyBoss App
// Contributors: Philip Ikpeiwunna, Philip Ikpeiwunna, Dayo Akins, Faith Ruth, Emmanuel Ademola, Nia Ikpeiwunna. 
//For permissions to use this code, contact the author Philip Ikpeiwunna via email: techsupport@klcconline.com

// Importing necessary components from React and React Native
import React from 'react';
import { View, Image, Text, StyleSheet } from 'react-native';
import { TouchableOpacity } from 'react-native';

// Component: LdCourses
// This component is a functional component that displays a LdCourses
const LdCourses = ({ DEEP_LINK, attemptDeepLink, TITLE, AUTHOR, CATEGORIES, FEATURED_IMAGE, APP_STYLES, BLOCK_STYLES }) => {
// Component's return statement with JSX 
  return (
   <TouchableOpacity onPress={() => attemptDeepLink(false)(null, DEEP_LINK)}>
    <View style={styles.container}>
      <Image source={{
    uri: FEATURED_IMAGE
  }} style={styles.image} />
      <View style={styles.overlayShape} />
      <Text style={[styles.popularInMusic, APP_STYLES.accentStyle]}>Popular in {CATEGORIES || 'Post Category(s)'}</Text>
      <Text style={[styles.completeGuitarLessons, BLOCK_STYLES.primaryColor]}>{TITLE || 'Post Title'}</Text>
      <Text style={[styles.alexSihotang, BLOCK_STYLES.metaColor]}>{AUTHOR || 'Post Author'}</Text>
    </View>
   </TouchableOpacity>
  );
};

// StyleSheet for styling the components 
const styles = StyleSheet.create({
  container: {
    width: 250,
    height: 362,
    marginVertical: 77,
    marginLeft: 20,
    marginRight: 10,
    borderRadius: 15,
    overflow: 'hidden',
  },
  image: {
    width: '100%',
    height: '100%',
  },
  overlayShape: {
    width: 231,
    height: 169,
    padding: 66,
    paddingTop: 66,
    paddingLeft: 20,
    paddingBottom: 13,
    paddingRight: 10,
    opacity: 0.3,
    borderRadius: 12,
    backgroundColor: '#000',
    position: 'absolute',
    bottom: 0, // Position at the bottom
    left: 0, // Position at the left corner
  },
  popularInMusic: {
    fontSize: 12,
    fontWeight: '600',
    lineHeight: 18,
    color: '#feae37',
    position: 'absolute',
    bottom: 87, // Adjusted bottom position to be above the overlay
    left: 20, // Padding from the left
    zIndex: 1,
  },
  completeGuitarLessons: {
    fontSize: 16,
    fontWeight: '600',
    lineHeight: 20,
    color: '#fff',
    position: 'absolute',
    bottom: 47, // Adjusted bottom position to be above the overlay
    left: 20, // Padding from the left
    zIndex: 1,
  },
  alexSihotang: {
    fontSize: 16,
    lineHeight: 24,
    color: '#e6e9ed',
    position: 'absolute',
    bottom: 20, // Adjusted to align with padding inside the overlay
    left: 20, // Padding from the left
    zIndex: 1,
  },
});

// Exporting the component for use in other parts of the app
export default LdCourses;
