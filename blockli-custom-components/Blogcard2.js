import React from \'react\';
import { View, Text, Image, TouchableOpacity, StyleSheet } from \'react-native\';

const C19 = () => {
  return (
    <View style={styles.container}>
      <Image 
        style={styles.ovalImage}
        source={{ uri: \'https://friendly-buck.172-234-47-158.plesk.page/wp-content/uploads/2023/11/profile-image.png\' }}
      />
      <Text style={styles.nameText}>Michael Levi</Text>
      <Text style={styles.titleText}>MECHANICS PHYSICS</Text>
      <TouchableOpacity style={styles.buttonShape}>
        <Text style={styles.buttonText}>View Profile</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: 224.087,
    height: 261,
    flexShrink: 0,
    borderRadius: 6.514,
    backgroundColor: \'#F53F08\',
    alignItems: \'center\',
    paddingTop: 50, // Adjusted for layout
    shadowColor: \"rgba(138, 149, 158, 0.5)\",
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
    color: \'#FFF\',
    textAlign: \'center\',
    fontFamily: \'Inter\',
    fontSize: 19.542,
    fontWeight: \'700\',
    letterSpacing: -0.273,
    marginTop: 12, // Adjusted for layout
  },
  titleText: {
    color: \'#FFF\',
    textAlign: \'center\',
    fontFamily: \'Inter\',
    fontSize: 9.988,
    fontWeight: \'400\',
    letterSpacing: 2.16,
    textTransform: \'uppercase\',
    marginTop: 4, // Adjusted for layout
  },
  buttonShape: {
    width: 124.203,
    height: 43.319,
    flexShrink: 0,
    borderRadius: 3.8,
    backgroundColor: \'#FFF\',
    justifyContent: \'center\',
    marginTop: 12, // Adjusted for layout
  },
  buttonText: {
    color: \'#F53F08\',
    textAlign: \'center\',
    fontFamily: \'Inter\',
    fontSize: 13.3,
    fontWeight: \'600\',
    letterSpacing: -0.282,
  },
});

export default C19;