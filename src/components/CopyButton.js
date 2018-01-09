import React from "react"
import {
  StyleSheet,
  TouchableOpacity,
  ToastAndroid,
  Clipboard
} from "react-native"
import { connect } from "react-redux"
import { MaterialIcons } from "@expo/vector-icons"

class CopyButton extends React.Component {
  copy() {
    ToastAndroid.show("Copied Lorem ipsum", ToastAndroid.SHORT)
    Clipboard.setString(this.props.loremIpsum.replace(/<p>|<\/p>/gi, ""))
  }
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
        onPress={() => this.copy()}
      >
        <MaterialIcons name="content-copy" size={32} color="#fff" />
      </TouchableOpacity>
    )
  }
}

const mapStateToProps = state => {
  return {
    loremIpsum: state.loremIpsum
  }
}

export default connect(mapStateToProps, null)(CopyButton)
