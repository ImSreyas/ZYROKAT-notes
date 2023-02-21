import { StyleSheet } from "react-native";
import color from "../color/colorPalette";
import size from "../sizePalette";

const main = StyleSheet.create({
    icon: {
        width: '100%',
        height: '100%',
        resizeMode: 'contain'
    },
    navigationBar: {
        position: 'absolute',
        width: '100%',
        height: '11.5%',
        left: 0,
        right: 0,
        bottom: 0,
        backgroundColor: color.primaryBackground,
        borderTopRightRadius: 55, 
        borderTopLeftRadius: 55,
        elevation: 10
    }
})
export default main