import { View, Text, FlatList, Image } from "react-native";
import React from "react";

const User_Institutions = () => {
  const items = [
    {
      id: 1,
      icon: require("../../assets/icons/capitol.png"),
    },
    {
      id: 2,
      icon: require("../../assets/icons/factory.png"),
    },
    {
      id: 3,
      icon: require("../../assets/icons/goverment.png"),
    },
    {
      id: 4,
      icon: require("../../assets/icons/capitol.png"),
    },
  ];

  const renderItem = ({ item, index }) => {
    return (
      <View>
        <Image source={item.icon} className="w-[50px] h-[50px]" />
      </View>
    );
  };
  return (
    <View className=" flex-[1] bg-teal-100">
      <View>
        <Text className="text-black  text-[20px] font-bold">
          Your Location Mess
        </Text>
        <Text className="text-[#808080]  text-[14px] font-semibold">
          Choose location of mess for your daily food
        </Text>
      </View>

      <View>
        <FlatList
          data={items}
          renderItem={renderItem}
          horizontal={true}
          pagingEnabled={true}
          showsHorizontalScrollIndicator={false}
        />
      </View>
    </View>
  );
};

export default User_Institutions;
