import {
  View,
  Text,
  FlatList,
  Image,
  TouchableOpacity,
  Alert,
} from "react-native";
import React from "react";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";

const User_Institutions = () => {
  const items = [
    {
      id: 1,
      icon: require("../../assets/icons/school.png"),
      name: "Educational Institutions",
    },
    {
      id: 2,
      icon: require("../../assets/icons/goverment.png"),
      name: "Goverment Departments",
    },
    {
      id: 3,
      icon: require("../../assets/icons/hospital.png"),
      name: "Healthcare Institutions",
    },
    {
      id: 4,
      icon: require("../../assets/icons/factory.png"),
      name: "Industrial Organizations",
    },
    {
      id: 5,
      icon: require("../../assets/icons/skyline.png"),
      name: "Other Institutions",
    },
  ];

  const renderItem = ({ item, index }) => {
    return (
      <TouchableOpacity
        onPress={() => Alert.alert(item.name)}
        key={index}
        className="m-2 flex-1 flex-col items-center justify-center  border-[1px] border-black px-[25px] py-[14px] rounded-[25px] "
      >
        <Image
          source={item.icon}
          style={{ width: wp(20), height: hp(10) }}
          className=""
        />
        <Text
          style={{
            fontSize: hp(1.8),
            width: wp(22),
          }}
          className="text-black text-center mt-2 font-semibold "
        >
          {item.name}
        </Text>
      </TouchableOpacity>
    );
  };
  return (
    <View className=" flex-[1] ">
      <View className=" ml-4 ">
        <Text style={{ fontSize: hp(2.5) }} className="text-black font-bold">
          Your Location Mess
        </Text>
        <Text
          style={{ fontSize: hp(1.8) }}
          className="text-[#808080] font-semibold"
        >
          Choose location of mess for your daily food
        </Text>
      </View>

      <View className="flex-1 ml-2">
        <FlatList
          data={items}
          renderItem={renderItem}
          horizontal={true}
          // pagingEnabled={true}
          showsHorizontalScrollIndicator={false}
        />
      </View>
    </View>
  );
};

export default User_Institutions;
