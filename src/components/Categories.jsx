import {
  ScrollView,
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
} from "react-native";
import { Category } from "../data/Categories";
import { useNavigation } from "@react-navigation/native";

const Categories = () => {
  const navigation = useNavigation();
  return (
    <ScrollView
      horizontal
      showsHorizontalScrollIndicator={false}
      style={styles.container}
    >
      {Category.map((item) => (
        <TouchableOpacity
          onPress={() => navigation.navigate("ProductScreen")}
          style={styles.category}
          key={item.id}
        >
          <Image style={styles.imgStyle} source={item.image} />
          <Text style={styles.title}>{item.title} </Text>
        </TouchableOpacity>
      ))}
    </ScrollView>
  );
};

export default Categories;

const styles = StyleSheet.create({
  container: {
    padding: 10,
  },
  category: {
    paddingHorizontal: 8,
    alignItems: "center",
  },
  imgStyle: {
    width: 50,
    height: 50,
  },
  title: {
    color: "#2c4341",
  },
});
