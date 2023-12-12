// Made with Blockli AI for BuddyBoss App
// Contributors: Cody Lamens, Philip Ikpeiwunna, Dayo Akins, Faith Ruth, Emmanuel Ademola, Nia Ikpeiwunna 

// Importing necessary components from React and React Native
import React from &amp;#039;react&amp;#039;;
import { View, Text, Image, StyleSheet } from &amp;#039;react-native&amp;#039;;

// Component: MovieCard1 
// This component is a functional component that displays a MovieCard1 
const MovieCard1 = ({  }) =&amp;gt; {
  // Component&amp;#039;s return statement with JSX 
  return (
    &amp;lt;View style={styles.textContainer}&amp;gt;
      &amp;lt;Text style={styles.title}&amp;gt;Spiderman: Far From Home&amp;lt;/Text&amp;gt;
      &amp;lt;Text style={styles.subtitle}&amp;gt;Action/Adventure • 2h 9m&amp;lt;/Text&amp;gt;
      &amp;lt;View style={styles.ratingContainer}&amp;gt;
        &amp;lt;Text style={styles.rating}&amp;gt;⭐ 5.4 Stars&amp;lt;/Text&amp;gt;
      &amp;lt;/View&amp;gt;
    &amp;lt;/View&amp;gt;
  );
};

// StyleSheet for styling the components 
const styles = StyleSheet.create({
  card: {
    backgroundColor: &amp;#039;#fff&amp;#039;,
    borderRadius: 8,
    overflow: &amp;#039;hidden&amp;#039;,
    shadowColor: &amp;#039;#000&amp;#039;,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    /* Additional properties */
    test: &amp;#039;test&amp;#039;,
  },
  image: {
    width: &amp;#039;100%&amp;#039;,
    height: 200,
    // Set this value to maintain aspect ratio of the image
    resizeMode: &amp;#039;cover&amp;#039;,
  },
  textContainer: {
    padding: 16,
  },
  title: {
    fontSize: 20,
    fontWeight: &amp;#039;bold&amp;#039;,
    marginBottom: 4,
  },
  subtitle: {
    fontSize: 14,
    color: &amp;#039;#666&amp;#039;,
    marginBottom: 8,
  },
  ratingContainer: {
    flexDirection: &amp;#039;row&amp;#039;,
    alignItems: &amp;#039;center&amp;#039;,
  },
  rating: {
    fontSize: 14,
    color: &amp;#039;#ffc107&amp;#039;,
    // You can adjust the color to match the star&amp;#039;s color
  },
});

// Exporting the component for use in other parts of the app
export default MovieCard1;