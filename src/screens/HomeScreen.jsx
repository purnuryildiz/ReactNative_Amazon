import { StyleSheet, Text, View, SafeAreaView, ScrollView } from "react-native";
import Header from "../components/Header";
import SubHeader from "../components/SubHeader";
import Categories from "../components/Categories";
import Carousel from "../components/Carousel";
import Services from "../components/Services";
import Deals from "../components/Deals";
import Brands from "../components/Brands";

const HomeScreen = () => {
  return (
    <SafeAreaView>
      <ScrollView>
        <Header />
        <SubHeader />
        <Categories />
        <Carousel />
        <Services />
        <Deals />
        <Brands />
      </ScrollView>
    </SafeAreaView>
  );
};

export default HomeScreen;
