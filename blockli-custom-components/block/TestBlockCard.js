// Made with Blockli AI for BuddyBoss App
// Contributors: Faith, Philip Ikpeiwunna, Dayo Akins, Faith Ruth, Emmanuel Ademola, Nia Ikpeiwunna. 
//For permissions to use this code, contact the author Faith via email: faithruth27@gmail.com

// Importing necessary components from React and React Native
import { useState } from "react";
import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
import {ActivityIndicator} from "react-native";
import { useHandlePress } from "@blocklienterprise/blockli";
import withDeeplinkClickHandler from "@src/components/hocs/withDeeplinkClickHandler";

// Component: TestBlockCard
// This component is a functional component that displays a TestBlockCard
const TestBlockCard = ({ attemptDeepLink, bb_access,
  showAlert, CUSTOM_FIELD_1, CUSTOM_FIELD_2, IMAGE_URL_1 }) => {
  const [loading, setLoading] = useState(false); // State to track loading
  const handlePress = useHandlePress(attemptDeepLink, showAlert, setLoading);
// Component's return statement with JSX 
  return (
    <View style={styles.container}>
      <Image source=IMAGE_URL_1 />
      <View style={styles.textContainer}>
        <Text style={styles.title}>{CUSTOM_FIELD_1 || "No Custom Field 1"}</Text>
        <Text style={styles.subtitle}>{CUSTOM_FIELD_2 || "No Custom Field 2"}</Text>
        <Text style={styles.rating}>⭐ 5.4 Stars</Text>
      </View>
    {loading && <View style={[styles.loadingOverlay, {
    borderRadius: styles.container?.borderRadius || 0
  }]}><ActivityIndicator size="small" color="#fff" /></View>}</View>
  );
};

// StyleSheet for styling the components 
const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    padding: 25,
    marginRight: 10,
    alignItems: 'center',
    backgroundColor: '#fff',
    borderRadius: 8,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 5,
  },
  image: {
    width: 100,
    height: 150,
    borderRadius: 8,
  },
  textContainer: {
    flex: 1,
    marginLeft: 20,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#000',
  },
  subtitle: {
    fontSize: 14,
    color: '#888',
    marginTop: 5,
  },
  rating: {
    fontSize: 14,
    color: '#4caf50',
    marginTop: 10,
  },

    loadingOverlay: {
        position: "absolute",
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "rgba(0, 0, 0, 0.2)",
    }
});

// Exporting the component for use in other parts of the app
export default withDeeplinkClickHandler(TestBlockCard);