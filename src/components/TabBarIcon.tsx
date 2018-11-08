import React from "react";
// @ts-ignore
import { Icon } from "expo";

import Colors from "../constants/Colors";

interface InterfaceProps {
  name: string;
  focused: boolean;
}

export default class TabBarIcon extends React.Component<InterfaceProps> {
  public render() {
    return (
      <Icon.Ionicons
        name={this.props.name}
        size={26}
        style={{ marginBottom: -3 }}
        color={this.props.focused ? Colors.tabIconSelected : Colors.tabIconDefault}
      />
    );
  }
}
