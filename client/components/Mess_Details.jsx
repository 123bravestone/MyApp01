import { View, Text, Image, Dimensions } from "react-native";
import React from "react";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import FontAwesome from "react-native-vector-icons/FontAwesome";

const Mess_Details = ({ params }) => {
  const { width } = Dimensions.get("window");
  // const screenWidth = width / 2;
  return (
    <View className="flex-1">
      <Image
        source={params.image}
        style={{ width: width, height: hp(25) }}
        className=""
      />
      <View className="p-4 flex-col">
        <View className="flex-1 flex-row items-center justify-between gap-4">
          <Text
            style={{ width: wp(64), fontSize: hp(3) }}
            className="text-[#080808] font-bold"
          >
            {params.name}
          </Text>
          <Text
            style={{ fontSize: hp(2) }}
            className={`${
              params.mess_status
                ? "bg-[#39cd0836] text-[#299d03]"
                : "bg-[#cd08082f] text-[#d60707]"
            } font-bold rounded-[8px] px-4 py-[4px] `}
          >
            {params.mess_status ? "Open" : "Closed"}
          </Text>
        </View>
        <Text
          className="text-[#080808] font-bold "
          style={{ fontSize: hp(2.5) }}
        >
          ₹
          {parseFloat(
            parseInt(params.monthlyPrice_B) +
              parseInt(params.monthlyPrice_L) +
              parseInt(params.monthlyPrice_D) +
              2
          ).toLocaleString("en-IN")}
          <Text className="text-[#5a5a5a] " style={{ fontSize: hp(1.5) }}>
            /month
          </Text>
        </Text>

        <Text style={{ fontSize: hp(2) }} className="text-slate-800 mt-[10px]">
          {params.rating}{" "}
          {[0, 0, 0, 0, 0].map((en, i) => (
            <FontAwesome
              key={i}
              name={i < Math.floor(params.rating) ? "star" : "star-o"}
              size={16}
              color={i < Math.floor(params.rating) ? "gold" : "gray"}
            />
          ))}
          <Text
            style={{ fontSize: hp(1.6) }}
            className="text-[#5a5a5a] font-semibold "
          >
            {" "}
            ratings
          </Text>
        </Text>

        <Text
          className="text-slate-800 mt-[20px] font-bold"
          style={{ fontSize: hp(2) }}
        >
          Discription:
        </Text>
        <Text className="text-[#5a5a5a]  " style={{ fontSize: hp(2) }}>
          {params.description}
        </Text>

        <Text
          className="text-slate-800 mt-[20px] font-bold"
          style={{ fontSize: hp(2) }}
        >
          Mess Location:
        </Text>
        <Text className="text-[#5a5a5a]  " style={{ fontSize: hp(2) }}>
          {params.college}
        </Text>
        <Text
          className="text-slate-800 mt-[20px] font-bold"
          style={{ fontSize: hp(2) }}
        >
          Food Timing:
        </Text>
        <View className="flex-1 gap-1">
          <View className="flex-1 flex-row items-center justify-between gap-4">
            <Text
              className="text-[#853e3a] font-bold "
              style={{ fontSize: hp(2) }}
            >
              Breakfast
            </Text>
            <Text
              className="text-[#853e3a] font-bold "
              style={{ fontSize: hp(2) }}
            >
              {params.time_B}
            </Text>
          </View>

          <View className="flex-1 flex-row items-center justify-between gap-4">
            <Text
              className="text-[#853e3a] font-bold "
              style={{ fontSize: hp(2) }}
            >
              Breakfast
            </Text>
            <Text
              className="text-[#853e3a] font-bold "
              style={{ fontSize: hp(2) }}
            >
              {params.time_B}
            </Text>
          </View>

          <View className="flex-1 flex-row items-center justify-between gap-4">
            <Text
              className="text-[#853e3a] font-bold "
              style={{ fontSize: hp(2) }}
            >
              Breakfast
            </Text>
            <Text
              className="text-[#853e3a] font-bold "
              style={{ fontSize: hp(2) }}
            >
              {params.time_B}
            </Text>
          </View>
        </View>
      </View>
    </View>
  );
};

export default Mess_Details;
