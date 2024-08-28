import { View, Text, Image, Alert, TouchableOpacity } from "react-native";
import { useSelector } from "react-redux";
import React from "react";
import { useNavigation } from "expo-router";
import { DrawerActions } from "@react-navigation/native";

const Header = () => {
  const username = useSelector((state) => state.user.username);
  const navigator = useNavigation();

  const onToggle = () => {
    navigator.dispatch(DrawerActions.openDrawer());
  };
  return (
    <View className="flex-row items-center justify-between px-4 bg-[#853e3a]  ">
      <Image
        source={require("../../assets/icons/logo_icon.png")}
        style={{ width: 50, height: 50 }}
        className="rounded-full bg-white p-2"
      />
      <Text className="text-[22px] tracking-[1px] font-baloo text-[#ffffff] ">
        MYMESS
      </Text>

      <TouchableOpacity
        onPress={onToggle}
        style={{
          backgroundColor: "#ffffff",
          width: 40,
          height: 40,
          borderRadius: 20,
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Text className="text-[#853e3a] font-baloo text-[28px] ">
          {username.slice(0, 1)}
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default Header;
