import { ScrollView, StyleSheet, Text, View, Image } from "react-native";
import Amazonpay from "../assets/amazon-pay.png";
import SendMoney from "../assets/send-money.jpg";
import ScanQR from "../assets/scan-qr.jpeg";
import PayBills from "../assets/pay-bills.jpeg";
import { RecentSearchData } from "../data/RecentSearchData";
import ServiceCard from "./ServiceCard";
const Services = () => {
  return (
    <ScrollView
      style={styles.container}
      horizontal
      showsHorizontalScrollIndicator={false}
      contentContainerStyle={{ paddingRight: 20 }}
    >
      <View style={styles.serviceContainer}>
        <View style={styles.row}>
          <View style={styles.innerContainer}>
            <Image source={Amazonpay} style={styles.imgStyle} />
            <Text style={styles.title}>Amazon Pay </Text>
          </View>
          <View style={styles.innerContainer}>
            <Image source={SendMoney} style={styles.imgStyle} />
            <Text style={styles.title}>Send Money </Text>
          </View>
        </View>
        <View style={styles.rowSecond}>
          <View style={styles.innerContainer}>
            <Image source={ScanQR} style={styles.imgStyle} />
            <Text style={styles.title}>Scan QR </Text>
          </View>
          <View style={styles.innerContainer}>
            <Image source={PayBills} style={styles.imgStyle} />
            <Text style={styles.title}>Pay Bills </Text>
          </View>
        </View>
      </View>
      {RecentSearchData.map((item) => (
        <ServiceCard item={item} />
      ))}
    </ScrollView>
  );
};

export default Services;

const styles = StyleSheet.create({
  container: {
    marginTop: -80,
    paddingHorizontal: 10,
  },
  serviceContainer: {
    backgroundColor: "#fff",
    borderRadius: 5,
  },
  row: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  rowSecond: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    gap: 10,
  },
  innerContainer: {
    padding: 10,
    justifyContent: "center",
    paddingTop: 10,
    alignItems: "center",
  },
  imgStyle: {
    height: 50,
    width: 50,
    borderRadius: 50,
    aspectRatio: 1,
  },
  title: {
    fontSize: 10,
    color: "#000000",
    textAlign: "center",
  },
});
