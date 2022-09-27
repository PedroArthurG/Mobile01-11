import { StyleSheet, Dimensions } from "react-native";
import colors from "../../styles/colors";

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        padding: 20,
    },
    paragraph: {
        fontSize: 18,
        textAlign: "center",
    },
    map: {
        width: Dimensions.get("window").width,
        height: Dimensions.get("window").height,
    },
    posicao: {
        position: "absolute",
        top: 0,
        left: 0,
        right: 0,
        zIndex: 1,
        width: "120%"
    },
    google: {
        width: Dimensions.get("window").width,
    },
    rowSearch: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        backgroundColor: colors.secondary,
        borderRadius: 10,
        margin: 10,
        alignItems: 'center',
        width: 0,
        height: 65,
    },
    input: {
        width: "76%"
    },
    icon: {
        fontSize: 24,
        padding: 5
    }
})

export default styles
