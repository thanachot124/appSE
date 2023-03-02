import React, { Component } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  TextInput,
  StyleSheet,
  Button,
  ScrollView
} from "react-native";
import PictureProfile from "./PictureProfile";

export default function Accept({ navigation }) {
  return (
    <View style={styles.container}>
        <ScrollView>
      <TextInput
        style={styles.input}
        underlineColorAndroid="transparent"
        placeholder="ชื่อ-สกุล"
        placeholderTextColor="#000000"
        autoCapitalize="none"
        onChangeText={this.handleEmail}
      />

      <TextInput
        style={styles.input}
        underlineColorAndroid="transparent"
        placeholder="email"
        placeholderTextColor="#000000"
        autoCapitalize="none"
        onChangeText={this.handlePassword}
      />

      <View style={{ height: "50%" }}>
        <Text>ข้อมูลบัตรประชาชน</Text>
        <PictureProfile />
      </View>
      <View style={{ height: "50%" }}>
        <Text>ข้อมูลใบขับขี่</Text>
        <PictureProfile />
      </View>
      <View style={{ flex: 1, marginTop: 150 }}>
        <Button
          title="ยืนยันข้อมูล"
          onPress={() => navigation.navigate("Verify")}
        />
      </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingTop: 23,
    height: 30,
  },
  input: {
    margin: 15,
    height: 40,
    borderColor: "#000000",
    borderWidth: 1,
  },
  submitButton: {
    backgroundColor: "#7a42f4",
    padding: 10,
    margin: 15,
    height: 40,
  },
  submitButtonText: {
    color: "white",
  },
});
