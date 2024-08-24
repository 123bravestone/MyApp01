import { View, Text, ScrollView } from "react-native";

import React from "react";

import { SafeAreaView } from "react-native-safe-area-context";

import ScreenImage from "../../components/Home/ScreenImage";
import User_Institutions from "../../components/Home/User_Institutions";

const homeScreen = () => {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <ScrollView className="flex-1">
        <View className="flex-[1] bg-teal-100">
          <Text className="text-black  text-[20px] font-bold">Home</Text>
        </View>
        <ScreenImage />
        <User_Institutions />
      </ScrollView>
    </SafeAreaView>
  );
};

export default homeScreen;
