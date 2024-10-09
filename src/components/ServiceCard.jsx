import { StyleSheet, Text, View, Image } from "react-native";

const ServiceCard = ({ item }) => {
  return (
    <View style={styles.outerContainer}>
      <Text style={styles.recentSearch}>{item.title} </Text>
      <Image source={item.image} style={styles.serviceImg} />
    </View>
  );
};

export default ServiceCard;

const styles = StyleSheet.create({
  outerContainer: {
    backgroundColor: "#fff",
    marginLeft: 8,
    width: 140,
    padding: 5,
    borderRadius: 5,
  },
  recentSearch: {
    fontSize: 12,
    marginBottom: 8,
    textAlign: "center",
  },
  serviceImg: {
    width: "100%",
    height: 130,
  },
});
