import { View, Text, ScrollView, TouchableOpacity } from "react-native";
import React, { useEffect } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import Ionicons from "@expo/vector-icons/Ionicons";

import DashBoard_Page from "../../../../components/DashBoard/DashBoard_Page";
import { router } from "expo-router";
import User_Details from "../../../../components/DashBoard/User_Details";
import { useSelector } from "react-redux";

const Dashboard = () => {
  const { isAdmin } = useSelector((state) => state.user);

  return (
    <SafeAreaView className="flex-1 bg-[#d4edee81]">
      <ScrollView showsVerticalScrollIndicator={false}>
        <View className="bg-[#853e3a] flex-row items-center justify-between px-4 py-[10px] ">
          <Ionicons
            onPress={() => router.back()}
            style={{ backgroundColor: "white", borderRadius: 50, padding: 8 }}
            name="arrow-back"
            size={24}
            color="#853e3a"
          />
          <Text className="text-white text-[18px] font-bold ">Dashboard</Text>
        </View>

        {isAdmin ? <DashBoard_Page /> : <User_Details />}
        {/* <User_Details />
        <DashBoard_Page /> */}
      </ScrollView>
    </SafeAreaView>
  );
};

export default Dashboard;
