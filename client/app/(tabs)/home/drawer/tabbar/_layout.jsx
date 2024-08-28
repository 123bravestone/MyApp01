import { View, Text, Image, Dimensions } from "react-native";
import React from "react";
import { Tabs } from "expo-router";
import { icons } from "../../../../../constants";
import { useSelector } from "react-redux";

const TabIcon = ({ icon, color, name, focused }) => {
  const { width } = Dimensions.get("window");
  const screenWidth = width / 2;
  return (
    <View
      className="flex-1 flex-row items-center justify-center "
      style={{
        // paddingHorizontal: 12,
        // paddingVertical: 6,
        // borderRadius: focused ? 20 : 0,
        width: screenWidth,
        backgroundColor: focused ? "#ffffff" : "transparent",
      }}
    >
      <Image
        source={icon}
        resizeMode="contain"
        tintColor={color}
        className="w-[18px] h-[18px]"
      />
      <Text
        className={`${focused ? "font-[800]" : "font-[400]"} text-[14px] ml-2 `}
        style={{ color: color }}
      >
        {name}
      </Text>
    </View>
  );
};

const TabLayout = () => {
  const { isAdmin } = useSelector((state) => state.user);

  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: "#853e3a",
        tabBarInactiveTintColor: "#ffffff",
        tabBarShowLabel: false,
        tabBarStyle: {
          backgroundColor: "#853e3a",
          borderTopWidth: 1,
          borderTopColor: "#ffffff",
          height: 54,
        },
      }}
      className="bg-[#b62921]"
    >
      <Tabs.Screen
        name="head"
        options={{
          title: "Head",
          headerShown: false,
          tabBarIcon: ({ color, focused }) => (
            <TabIcon
              icon={icons.home}
              color={color}
              name="Head"
              focused={focused}
            />
          ),
        }}
      />

      <Tabs.Screen
        name="verify"
        options={{
          title: isAdmin ? "Verify" : "Menu",
          headerShown: false,
          tabBarIcon: ({ color, focused }) => (
            <TabIcon
              icon={icons.dashboard}
              color={color}
              name={isAdmin ? "Verify" : "Menu"}
              focused={focused}
            />
          ),
        }}
      />
    </Tabs>
  );
};

export default TabLayout;
