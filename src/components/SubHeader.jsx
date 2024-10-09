import { LinearGradient } from "expo-linear-gradient";
import { StyleSheet, Text, View } from "react-native";
import Feather from "@expo/vector-icons/Feather";
import Ionicons from "@expo/vector-icons/Ionicons";
const SubHeader = () => {
  return (
    <LinearGradient
      start={{ x: 0, y: 0 }}
      end={{ x: 1, y: 0 }}
      colors={["#bbe8ef", "#bdeee9", "#c3f1e3"]}
      style={styles.container}
    >
      <Feather name="map-pin" size={24} color="#2c4341" />
      <Text style={styles.deliver}>Deliver to Türkiye-232442</Text>
      <Ionicons
        style={styles.arrow}
        name="chevron-down-outline"
        size={24}
        color="black"
      />
    </LinearGradient>
  );
};

export default SubHeader;

const styles = StyleSheet.create({
  container: {
    padding: 8,
    flexDirection: "row",
    alignItems: "center",
  },
  deliver: {
    fontSize: 12,
    color: "#2c4341",
    paddingHorizontal: 6,
  },
  arrow: {
    fontSize: 14,
  },
});
