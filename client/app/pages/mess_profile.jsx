import { View, Text, Image, ScrollView } from "react-native";
import React, { useEffect } from "react";
import { router, Tabs, useLocalSearchParams } from "expo-router";
import { SafeAreaView } from "react-native-safe-area-context";
import { addMenuImage } from "../../store/CreateSlices/UserSlice.js";
import Ionicons from "@expo/vector-icons/Ionicons";
import { useDispatch } from "react-redux";
import Mess_Details from "../../components/Mess_Details.jsx";
import { heightPercentageToDP as hp } from "react-native-responsive-screen";

const Mess_Proflie = () => {
  const params = useLocalSearchParams();
  const dispatchEvent = useDispatch();

  useEffect(() => {
    dispatchEvent(addMenuImage(params.menuImage));
  }, []);
  return (
    <SafeAreaView className="flex-1 bg-[#ffffff] ">
      <View className="bg-[#853e3a] flex-row items-center justify-between px-4 py-[10px] ">
        <Ionicons
          onPress={() => router.back()}
          style={{ backgroundColor: "white", borderRadius: 50, padding: 8 }}
          name="arrow-back"
          size={24}
          color="#853e3a"
        />
        <Text className="text-white text-[18px] font-bold ">Mess Detail</Text>
      </View>
      <ScrollView className="flex-1" showsVerticalScrollIndicator={false}>
        <Mess_Details params={params} />
      </ScrollView>

      <View className="flex-row items-center justify-between space-x-4 p-4 bg-[#853e3a] ">
        <View className="flex-1 flex-col gap-1 pr-4">
          <Text className=" text-[#ffffff] text-[20px] font-bold">
            Join Mess
          </Text>
          <Text className=" text-[#ecebeb] text-[14px] ">
            Click here to join mess
          </Text>
        </View>
        <Text
          style={{ fontSize: hp(2.5) }}
          className="flex-1 text-center bg-[#ffffff] text-[#853e3a] rounded-[8px] font-bold py-[2px] px-[16px] "
        >
          Continue
        </Text>
      </View>
    </SafeAreaView>
  );
};

export default Mess_Proflie;
