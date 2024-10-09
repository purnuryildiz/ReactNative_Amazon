import { StyleSheet, Text, View, Image } from "react-native";
import Brand1 from "../assets/brand1.jpeg";
import Brand2 from "../assets/brand2.jpeg";
import Brand3 from "../assets/brand3.jpeg";
import Brand4 from "../assets/brand4.jpeg";

const Brands = () => {
  return (
    <View style={styles.container}>
      <View style={styles.innerContainer}>
        <Text style={styles.title}>Brands of Day</Text>

        <View style={styles.row}>
          <View style={styles.brands}>
            <Image style={styles.imgStyle} source={Brand1} />
            <Text style={styles.brandTitle}>
              {" "}
              Min. 20% off | Fossil, Titan Smart Watch & More
            </Text>
          </View>

          <View style={styles.brands}>
            <Image style={styles.imgStyle} source={Brand2} />
            <Text style={styles.brandTitle}>
              {" "}
              Min. 40% off | Fossil, Titan Smart Watch & More
            </Text>
          </View>
        </View>

        <View style={styles.row}>
          <View style={styles.brands}>
            <Image style={styles.imgStyle} source={Brand3} />
            <Text style={styles.brandTitle}>
              {" "}
              Heels - Upto 50% OFF on Heeled Sandals, High Heel
            </Text>
          </View>

          <View style={styles.brands}>
            <Image style={styles.imgStyle} source={Brand4} />
            <Text style={styles.brandTitle}>
              {" "}
              Sony 60W Blutooth SoundBar Speaker Audio Engine
            </Text>
          </View>
        </View>
      </View>
    </View>
  );
};

export default Brands;

const styles = StyleSheet.create({
  container: {
    marginTop: 10,
    borderTopWidth: 1,
    borderTopColor: "#dddddd",
  },
  title: {
    fontSize: 18,
    color: "#0000000",
    padding: 10,
    fontWeight: "bold",
  },
  row: {
    flexDirection: "row",
  },
  brands: {
    width: "50%",
    padding: 10,
  },
  imgStyle: {
    height: 150,
    width: "100%",
    borderRadius: 10,
  },
  brandTitle: {
    color: "#0000000",
    fontSize: 12,
    marginTop: 5,
  },
});
