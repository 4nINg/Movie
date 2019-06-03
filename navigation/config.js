import { createStackNavigator } from "react-navigation"
import { BG_COLOR, TINY_COLOR } from "../constants/Colors"

export const headerStyles = {
  headerStyle: {
    backgroundColor: BG_COLOR,
    borderBottomWidth: 0
  },
  headerTitleStyle: {
    color: TINY_COLOR
  },
  headerTintColor: TINY_COLOR
}

export const createStack = (screen, title) =>
  createStackNavigator({
    Screen: {
      screen,
      navigationOptions: {
        title,
        ...headerStyles
      }
    }
  })
