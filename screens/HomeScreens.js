import { StyleSheet, Text, View, Button } from "react-native";
import { useNavigation } from "@react-navigation/core";
import React from "react";
import { signOut } from "firebase/auth";
import { auth } from "../firebase";

const HomeScreens = () => {
  const navigation = useNavigation();

  const logout = () => {
    signOut(auth)
      .then(() => {
        navigation.replace("Login");
      })
      .catch((error) => console.log(error.message));
  };

  return (
    <View>
      <Text>Successful authorization</Text>
      <Button title="Logout" buttonStyle={styles.buttons} onPress={logout} />
    </View>
  );
};

export default HomeScreens;

const styles = StyleSheet.create({});
