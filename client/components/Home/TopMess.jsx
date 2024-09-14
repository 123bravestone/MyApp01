import { View, Text, TouchableOpacity, Alert, Image } from "react-native";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import FontAwesome from "react-native-vector-icons/FontAwesome";
import { router } from "expo-router";
import React from "react";

const TopMess = () => {
  const data = [
    {
      id: 1,
      image: require("../../assets/images/images.jpeg"),
      menuImage: require("../../assets/images/menu-card_screen.jpg"),
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
    },
    {
      id: 2,
      image: require("../../assets/images/images.jpeg"),
      menuImage: require("../../assets/images/menu-card_screen.jpg"),
      name: "Rahul Mess Hotel",
      college: "BP Mandal College Of Engineering, Madhepura",
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
      minPrice: 2599,
      avg_cost: "₹3599 - ₹4999",
    },
  ];

  return (
    <View className="flex-[1] mt-4 mx-4 ">
      <View className="">
        <Text style={{ fontSize: hp(2.5) }} className="text-black font-bold">
          Top Mess Hotel
        </Text>
        <Text
          style={{ fontSize: hp(1.8) }}
          className="text-[#808080] font-semibold"
        >
          High mess rating for quality and test
        </Text>
      </View>

      {data &&
        data.map((item, index) => (
          <View
            key={index}
            className="bg-[#ffffff] shadow-xl rounded-b-[50px] rounded-t-[20px] my-4"
          >
            <TouchableOpacity
              activeOpacity={0.8}
              onPress={() => {
                router.push({
                  pathname: "/pages/mess_details",
                  params: {
                    id: item.id,
                    name: item.name,
                    image: item.image,
                    menuImage: item.menuImage,
                    college: item.college,
                    monthlyPrice_B: item.breakfast.monthlyPrice,
                    monthlyPrice_L: item.lunch.monthlyPrice,
                    monthlyPrice_D: item.dinner.monthlyPrice,
                    time_B: item.breakfast.time,
                    time_L: item.lunch.time,
                    time_D: item.dinner.time,
                    lunch: item.lunch,
                    dinner: item.dinner,
                    description: item.description,
                    mess_status: item.mess_status,
                    rating: item.rating,
                    minPrice: item.minPrice,
                    avg_cost: item.avg_cost,
                  },
                });
              }}
            >
              <View
                style={{
                  flex: 1,
                  borderTopLeftRadius: 20,
                  borderTopRightRadius: 20,
                }}
                className=" overflow-hidden"
              >
                <Image
                  source={item.image}
                  style={{
                    flex: 1,
                    borderTopLeftRadius: 20,
                    borderTopRightRadius: 20,
                  }}
                  className="w-screen"
                />
              </View>

              <View
                style={{
                  paddingVertical: 4,
                  paddingHorizontal: 10,
                }}
              >
                <Text className="text-slate-800 absolute top-[-28px] text-[16px]  bg-[#fefffe] px-2 pr-4 py-2 rounded-tr-[30px]  ">
                  Status:{" "}
                  <Text className="text-green-500 font-bold ">Open</Text>
                </Text>
                <View>
                  <Text
                    className="text-slate-800"
                    style={{
                      paddingVertical: 5,
                      fontWeight: "bold",
                      fontSize: 20,
                    }}
                  >
                    {item.name}
                  </Text>
                  <Text
                    className="text-slate-800 absolute top-[-10px] right-[10px] text-[18px] font-bold bg-[#fbfbfb] px-4 py-1 rounded-b-[12px]  "
                    style={{
                      shadowColor: "#000",
                      shadowOffset: {
                        width: 0,
                        height: 3,
                      },
                      shadowOpacity: 0.27,
                      shadowRadius: 4.65,

                      elevation: 6,
                    }}
                  >
                    min: ₹{item.minPrice}
                  </Text>
                </View>

                <View
                  style={{
                    flexDirection: "row",
                    alignItems: "center",
                    justifyContent: "space-between",
                    gap: 5,
                  }}
                >
                  <View className="flex-1">
                    <Text className="text-slate-800  text-[14px] ">
                      rating:{" "}
                      {[0, 0, 0, 0, 0].map((en, i) => (
                        <FontAwesome
                          key={i}
                          name={i < Math.floor(item.rating) ? "star" : "star-o"}
                          size={16}
                          color={i < Math.floor(item.rating) ? "gold" : "gray"}
                        />
                      ))}
                    </Text>
                    <Text className="text-slate-500 mt-1 text-[16px] ">
                      {item.description}
                    </Text>
                  </View>

                  <TouchableOpacity
                    onPress={() => Alert.alert("Join Mess Food")}
                  >
                    <Text className=" bg-[#089ade] text-[#fdfeff] font-bold text-[18px] text-center rounded-[5px] px-[20px] py-1">
                      Join
                    </Text>
                  </TouchableOpacity>
                </View>

                <Text
                  style={{
                    textAlign: "center",
                    borderWidth: 1,
                    borderColor: "black",
                    borderStyle: "dashed",
                    borderRadius: 5,
                    padding: 2,
                  }}
                  className=" text-center text-[#080808] font-[600] text-[18px] tracking-[1px] rounded-[5px] mt-4 px-2 py-1 "
                >
                  avg cost: ₹{item.avg_cost}
                </Text>
              </View>

              <View
                style={{
                  borderWidth: 5,
                  borderColor: "white",
                  borderRadius: 20,
                  marginHorizontal: 120,
                  marginTop: 5,
                  marginBottom: -5,
                }}
              />
            </TouchableOpacity>
            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "center",
                marginHorizontal: 10,
              }}
              className="bg-[#0b13ae] z-[-1] rounded-b-[40px] px-2 py-2 m-0"
            >
              <MaterialCommunityIcons
                name="brightness-percent"
                size={20}
                color="white"
              />

              <Text
                style={{
                  marginLeft: 5,
                  color: "white",
                  fontWeight: "bold",
                  fontSize: 16,
                }}
              >
                Offers{" "}
                <Text className="text-[14px] font-semibold ">
                  ( for our food members )
                </Text>
              </Text>
            </View>
          </View>
        ))}
    </View>
  );
};

export default TopMess;
