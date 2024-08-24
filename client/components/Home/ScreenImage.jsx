import {
  View,
  Text,
  TouchableOpacity,
  ImageBackground,
  Dimensions,
} from "react-native";
import React from "react";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import { LinearGradient } from "expo-linear-gradient";

const ScreenImage = () => {
  const { width } = Dimensions.get("window");
  const screenWidth = width - 20;
  return (
    <TouchableOpacity
      style={{ height: hp(24) }}
      className="flex-[1] items-center  rounded-3xl m-4 overflow-hidden"
    >
      <ImageBackground
        style={{ width: screenWidth }}
        className="flex-1 rounded-3xl"
        source={require("../../assets/images/homeFront.png")}
      >
        <LinearGradient
          className="flex-1 items-start justify-center px-[40px] "
          colors={["#4d4d4d8d", "#ffffff00"]}
          start={{ x: 0, y: 0 }}
          end={{ x: 1, y: 1 }}
        >
          <Text style={{ fontSize: hp(3.5) }} className="text-white font-[800]">
            Special Offer
          </Text>
          <Text style={{ fontSize: hp(2) }} className="text-white my-2">
            Best place for daily meal of our member customers
          </Text>
          <Text
            style={{ fontSize: hp(1.8) }}
            className="text-black bg-white py-2 px-[10px] rounded-[10px] font-semibold "
          >
            Add Mess
          </Text>
        </LinearGradient>
      </ImageBackground>
    </TouchableOpacity>
  );
};

export default ScreenImage;
