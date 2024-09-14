import {
  View,
  Text,
  Image,
  Dimensions,
  TouchableOpacity,
  Alert,
} from "react-native";
import React from "react";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import FontAwesome from "react-native-vector-icons/FontAwesome";
// import Admin_Data from "../data/admin.json";

const Mess_Profile = () => {
  const { width } = Dimensions.get("window");
  // const screenWidth = width / 2;
  const data = {
    id: 1,
    image: require("../assets/images/images.jpeg"),
    menuImage: require("../assets/images/menu-card_screen.jpg"),
    name: "Chandan Mess Hotel",
    college: "JNKT Medical College And Hospital, Madhepura",
    breakfast: {
      id: 1,
      monthlyPrice: 1499,
      dailyPrice: 39,
      time: "08:00 - 11:00 AM",
    },
    lunch: {
      id: 2,
      monthlyPrice: 1999,
      dailyPrice: 69,
      time: "01:00 - 04:00 PM",
    },
    dinner: {
      id: 3,
      monthlyPrice: 1999,
      dailyPrice: 69,
      time: "08:00 - 11:00 PM",
    },
    description: "We provide quality and test food to our customers",
    rating: 4.5,
    mess_status: true,
    minPrice: 2299,
    avg_cost: "₹3299 - ₹4699",
  };

  return (
    <View className="flex-1">
      <Image
        source={data.image}
        style={{ width: width, height: hp(25) }}
        className=""
      />
      <View className="p-4 flex-col">
        <View className="flex-1 flex-row items-center justify-between gap-4">
          <Text
            style={{ width: wp(64), fontSize: hp(3) }}
            className="text-[#080808] font-bold"
          >
            {data.name}
          </Text>
          <Text
            style={{ fontSize: hp(2) }}
            className={`${
              data.mess_status
                ? "bg-[#39cd0836] text-[#299d03]"
                : "bg-[#cd08082f] text-[#d60707]"
            } font-bold rounded-[8px] px-4 py-[4px] `}
          >
            {data.mess_status ? "Open" : "Closed"}
          </Text>
        </View>
        <Text
          className="text-[#080808] font-bold "
          style={{ fontSize: hp(2.5) }}
        >
          ₹
          {parseFloat(
            parseInt(data.breakfast.monthlyPrice) +
              parseInt(data.lunch.monthlyPrice) +
              parseInt(data.dinner.monthlyPrice) -
              998
          ).toLocaleString("en-IN")}
          <Text className="text-[#5a5a5a] " style={{ fontSize: hp(1.5) }}>
            /month
          </Text>
        </Text>

        <Text style={{ fontSize: hp(2) }} className="text-slate-800 mt-[10px]">
          {data.rating}{" "}
          {[0, 0, 0, 0, 0].map((en, i) => (
            <FontAwesome
              key={i}
              name={i < Math.floor(data.rating) ? "star" : "star-o"}
              size={16}
              color={i < Math.floor(data.rating) ? "gold" : "gray"}
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
          {data.description}
        </Text>

        <Text
          className="text-slate-800 mt-[20px] font-bold"
          style={{ fontSize: hp(2) }}
        >
          Mess Location:
        </Text>
        <Text className="text-[#5a5a5a]  " style={{ fontSize: hp(2) }}>
          {data.college}
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
              {data.breakfast.time}
            </Text>
          </View>

          <View className="flex-1 flex-row items-center justify-between gap-4">
            <Text
              className="text-[#853e3a] font-bold "
              style={{ fontSize: hp(2) }}
            >
              Lunch
            </Text>
            <Text
              className="text-[#853e3a] font-bold "
              style={{ fontSize: hp(2) }}
            >
              {data.lunch.time}
            </Text>
          </View>

          <View className="flex-1 flex-row items-center justify-between gap-4">
            <Text
              className="text-[#853e3a] font-bold "
              style={{ fontSize: hp(2) }}
            >
              Dinner
            </Text>
            <Text
              className="text-[#853e3a] font-bold "
              style={{ fontSize: hp(2) }}
            >
              {data.dinner.time}
            </Text>
          </View>
        </View>

        <View className="flex-row items-center justify-between bg-[#ffffff] space-x-4 px-4 py-[25px] rounded-[16px] mt-4">
          <View className="flex-1 flex-col gap-1">
            <Text className="text-[#d40f0f] font-bold text-[18px] ">
              Close Mess
            </Text>
            <Text className="text-[#747373] text-[12px] font-semibold">
              If you want to delete your mess account, your mess listing will be
              parmanently deleted
            </Text>
          </View>

          <TouchableOpacity
            onPress={() => {
              // router.push("/dashboard/add_members");
              Alert.alert("Want to Close Mess today?");
            }}
            className=" px-4 py-[8px] bg-[#d10707] rounded-[8px] text-[16px] font-bold "
          >
            <Text className="text-[#ffffff] font-bold ">Close</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default Mess_Profile;
