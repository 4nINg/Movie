import TabNavigation from "./TabNavigation"
import DetailScreen from "../screens/Detail"
import { createStackNavigator, createAppContainer } from "react-navigation"

const MainNavigation = createStackNavigator({
  TabNavigation,
  DetailScreen
})

export default createAppContainer(MainNavigation)
