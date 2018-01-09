import React from "react"
import { StyleSheet, TouchableOpacity, Alert, ToastAndroid } from "react-native"
import { MaterialIcons } from "@expo/vector-icons"

export default class CopyButton extends React.Component {
  render() {
    return (
      <TouchableOpacity
        style={{
          alignItems: "center",
          justifyContent: "center",
          width: 60,
          height: 60,
          borderRadius: 30,
          backgroundColor: "#03a4b3",
          position: "absolute",
          bottom: 55,
          right: 8,
          elevation: 8
        }}
        onPress={() =>
          ToastAndroid.show("Copied Lorem ipsum", ToastAndroid.SHORT)
        }
      >
        <MaterialIcons name="content-copy" size={32} color="#fff" />
      </TouchableOpacity>
    )
  }
}
