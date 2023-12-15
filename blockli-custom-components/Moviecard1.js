// Made with Blockli AI for BuddyBoss App
// Contributors: Cody Lamens, Philip Ikpeiwunna, Dayo Akins, Faith Ruth, Emmanuel Ademola, Nia Ikpeiwunna 

// Importing necessary components from React and React Native
import React from \'react\';
import { View, Text, Image, StyleSheet } from \'react-native\';

// Component: MovieCard1 
// This component is a functional component that displays a MovieCard1 
const MovieCard1 = ({  }) => {
  // Component\'s return statement with JSX 
  return (
    
      Spiderman: Far From Home
      Action/Adventure • 2h 9m
      
        ⭐ 5.4 Stars
      
    
  );
};

// StyleSheet for styling the components 
const styles = StyleSheet.create({
  card: {
    backgroundColor: \'#fff\',
    borderRadius: 8,
    overflow: \'hidden\',
    shadowColor: \'#000\',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    /* Additional properties */
    test: \'test\',
  },
  image: {
    width: \'100%\',
    height: 200,
    // Set this value to maintain aspect ratio of the image
    resizeMode: \'cover\',
  },
  textContainer: {
    padding: 16,
  },
  title: {
    fontSize: 20,
    fontWeight: \'bold\',
    marginBottom: 4,
  },
  subtitle: {
    fontSize: 14,
    color: \'#666\',
    marginBottom: 8,
  },
  ratingContainer: {
    flexDirection: \'row\',
    alignItems: \'center\',
  },
  rating: {
    fontSize: 14,
    color: \'#ffc107\',
    // You can adjust the color to match the star\'s color
  },
});

// Exporting the component for use in other parts of the app
export default MovieCard1;