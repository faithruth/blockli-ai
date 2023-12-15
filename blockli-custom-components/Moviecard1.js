// Made with Blockli AI for BuddyBoss App
// Contributors: admin, Philip Ikpeiwunna, Dayo Akins, Faith Ruth, Emmanuel Ademola, Nia Ikpeiwunna. For permissions to use this code, contact the author admin via email: dev-email@wpengine.local
// Importing necessary components from React and React Native

import React from &#039;react&#039;;
import { View, Text, Image, StyleSheet } from &#039;react-native&#039;;

// Component: MovieCard1
// This component is a functional component that displays a MovieCard1
const MovieCard1 = ({ TITLE }) =&gt; {
// Component&#039;s return statement with JSX 
  return (
    &lt;View style={styles.textContainer}&gt;
        &lt;Text style={styles.title}&gt;{TITLE || &#039;Post Title&#039;}&lt;/Text&gt;
        &lt;Text style={styles.subtitle}&gt;Action/Adventure • 2h 9m&lt;/Text&gt;
        &lt;View style={styles.ratingContainer}&gt;
          &lt;Text style={styles.rating}&gt;⭐ 5.4 Stars&lt;/Text&gt;
        &lt;/View&gt;
      &lt;/View&gt;
  );
};

// StyleSheet for styling the components 
const styles = StyleSheet.create({
  card: {
    backgroundColor: &#039;#fff&#039;,
    borderRadius: 8,
    overflow: &#039;hidden&#039;,
    shadowColor: &#039;#000&#039;,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    /* Additional properties */
    test: &#039;test&#039;,
  },
  image: {
    width: &#039;100%&#039;,
    height: 200, // Set this value to maintain aspect ratio of the image
    resizeMode: &#039;cover&#039;,
  },
  textContainer: {
    padding: 16,
  },
  title: {
    fontSize: 20,
    fontWeight: &#039;bold&#039;,
    marginBottom: 4,
  },
  subtitle: {
    fontSize: 14,
    color: &#039;#666&#039;,
    marginBottom: 8,
  },
  ratingContainer: {
    flexDirection: &#039;row&#039;,
    alignItems: &#039;center&#039;,
  },
  rating: {
    fontSize: 14,
    color: &#039;#ffc107&#039;, // You can adjust the color to match the star&#039;s color
  },
});

// Exporting the component for use in other parts of the app
export default MovieCard1;