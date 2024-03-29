import * as React from "react";
import { ScrollView, StyleSheet, ViewStyle } from "react-native";
import { ExpoLinksView } from "@expo/samples";

interface InterfaceStyle {
  [key: string]: ViewStyle;
}

export default class LinksScreen extends React.Component {
  public static navigationOptions = {
    title: "Links",
  };

  public render() {
    return (
      <ScrollView style={styles.container}>
        {/* Go ahead and delete ExpoLinksView and replace it with your
         * content, we just wanted to provide you with some helpful links */}
        <ExpoLinksView />
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create<InterfaceStyle>({
  container: {
    flex: 1,
    paddingTop: 15,
    backgroundColor: "#fff",
  },
});
