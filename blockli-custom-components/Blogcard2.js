import React from \&#039;react\&#039;;
import { View, Text, Image, TouchableOpacity, StyleSheet } from \&#039;react-native\&#039;;

const C19 = () =&gt; {
  return (
    &lt;View style={styles.container}&gt;
      &lt;Image 
        style={styles.ovalImage}
        source={{ uri: \&#039;https://friendly-buck.172-234-47-158.plesk.page/wp-content/uploads/2023/11/profile-image.png\&#039; }}
      /&gt;
      &lt;Text style={styles.nameText}&gt;Michael Levi&lt;/Text&gt;
      &lt;Text style={styles.titleText}&gt;MECHANICS PHYSICS&lt;/Text&gt;
      &lt;TouchableOpacity style={styles.buttonShape}&gt;
        &lt;Text style={styles.buttonText}&gt;View Profile&lt;/Text&gt;
      &lt;/TouchableOpacity&gt;
    &lt;/View&gt;
  );
};

const styles = StyleSheet.create({
  container: {
    width: 224.087,
    height: 261,
    flexShrink: 0,
    borderRadius: 6.514,
    backgroundColor: \&#039;#F53F08\&#039;,
    alignItems: \&#039;center\&#039;,
    paddingTop: 50, // Adjusted for layout
    shadowColor: \&quot;rgba(138, 149, 158, 0.5)\&quot;,
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowRadius: 23,
    elevation: 23,
    shadowOpacity: 0.2,
  },
  ovalImage: {
    width: 80.341,
    height: 75.564,
    flexShrink: 0,
    borderRadius: 40.1705, // Half of width to make a perfect circle
  },
  nameText: {
    color: \&#039;#FFF\&#039;,
    textAlign: \&#039;center\&#039;,
    fontFamily: \&#039;Inter\&#039;,
    fontSize: 19.542,
    fontWeight: \&#039;700\&#039;,
    letterSpacing: -0.273,
    marginTop: 12, // Adjusted for layout
  },
  titleText: {
    color: \&#039;#FFF\&#039;,
    textAlign: \&#039;center\&#039;,
    fontFamily: \&#039;Inter\&#039;,
    fontSize: 9.988,
    fontWeight: \&#039;400\&#039;,
    letterSpacing: 2.16,
    textTransform: \&#039;uppercase\&#039;,
    marginTop: 4, // Adjusted for layout
  },
  buttonShape: {
    width: 124.203,
    height: 43.319,
    flexShrink: 0,
    borderRadius: 3.8,
    backgroundColor: \&#039;#FFF\&#039;,
    justifyContent: \&#039;center\&#039;,
    marginTop: 12, // Adjusted for layout
  },
  buttonText: {
    color: \&#039;#F53F08\&#039;,
    textAlign: \&#039;center\&#039;,
    fontFamily: \&#039;Inter\&#039;,
    fontSize: 13.3,
    fontWeight: \&#039;600\&#039;,
    letterSpacing: -0.282,
  },
});

export default C19;