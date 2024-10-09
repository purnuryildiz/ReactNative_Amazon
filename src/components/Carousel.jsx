import { StyleSheet, Text, View, Image } from "react-native";
import Swiper from "react-native-swiper";
import { CarouselData } from "../data/CarouselData";

const Carousel = () => {
  return (
    <View style={styles.carouselContainer}>
      <Swiper
        showsPagination={false}
        showsButton={false}
        autoplay={true}
        style={styles.wrapper}
      >
        {CarouselData.map((item) => (
          <View>
            <Image style={styles.image} source={item.image} />
          </View>
        ))}
      </Swiper>
    </View>
  );
};

export default Carousel;

const styles = StyleSheet.create({
  carouselContainer: {},
  wrapper: {
    height: 300,
  },
  image: {
    width: "100%",
    height: 250,
  },
});
