import React from "react"
import { StyleSheet, Text, View, WebView } from "react-native"
import { connect } from "react-redux"

class LoremIpsumText extends React.Component {
  render() {
    return (
      <View style={styles.textView}>
        <WebView
          injectedJavaScript={"window.scrollTo(0,document.body.scrollHeight);"}
          source={{
            html:
              "<style>p{text-align: justify;font-size:20px;line-height:1.4}</style>" +
              "<p style='text-align: justify;'>" +
              this.props.loremIpsum +
              "</p>"
          }}
        />
      </View>
    )
  }
}

const mapStateToProps = state => {
  return {
    loremIpsum: state.loremIpsum
  }
}

export default connect(mapStateToProps, null)(LoremIpsumText)

const styles = StyleSheet.create({
  textView: {
    flex: 1,
    marginTop: 20
  }
})
