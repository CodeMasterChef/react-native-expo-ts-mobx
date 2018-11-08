import * as React from "react";
import { Text } from "react-native";

interface InterfaceProps {
  style?: object;
}

export class MonoText extends React.Component<InterfaceProps> {
  render() {
    return <Text {...this.props} style={[this.props.style, { fontFamily: "space-mono" }]} />;
  }
}
