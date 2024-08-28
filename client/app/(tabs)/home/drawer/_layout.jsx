import { View, Text, Alert, Image } from "react-native";
import React from "react";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { Drawer } from "expo-router/drawer";
import { DrawerContentScrollView, DrawerItem } from "@react-navigation/drawer";
import { useRouter } from "expo-router";
import { useDispatch } from "react-redux";
import { setToken } from "../../../../store/CreateSlices/UserSlice";

const CustomDrawerContent = () => {
  const router = useRouter();
  const dispatchEvent = useDispatch();

  return (
    <DrawerContentScrollView
      scrollEnabled={false}
      contentContainerStyle={{ backgroundColor: "#853e3a" }}
    >
      <View className="p-[20px]">
        <Image
          source={require("../../../../assets/images/icon.png")}
          style={{
            width: 100,
            height: 100,
            borderRadius: 50,
            alignSelf: "center",
          }}
        />

        <Text className="text-[24px] font-baloo text-[#ffffff] text-center pt-[10px]">
          MyMess
        </Text>
      </View>

      <View className="flex-1 bg-white pt-[10px] ">
        <DrawerItem
          labelStyle={{
            color: "#000000",
            fontWeight: "bold",
            fontSize: 20,
            marginLeft: -16,
          }}
          icon={() => (
            <MaterialCommunityIcons
              name="account"
              size={28}
              color={"#000000"}
            />
          )}
          label="Profile"
          onPress={() => router.push("/home/drawer/profile")}
          // style={{ borderBottomWidth: 1, borderBottomColor: "#000000" }}
        />

        <DrawerItem
          labelStyle={{
            color: "#000000",
            fontWeight: "bold",
            fontSize: 20,
          }}
          // icon={() => (
          //   <MaterialCommunityIcons name="logout" size={28} color={"#000000"} />
          // )}
          label="Dashboard"
          onPress={() => {
            router.push("/home/drawer/dashboard");
          }}
          // style={{ borderBottomWidth: 1, borderBottomColor: "#000000" }}
        />
        <DrawerItem
          labelStyle={{
            color: "#dc2626",
            fontWeight: "bold",
            fontSize: 20,
            marginLeft: -16,
          }}
          icon={() => (
            <MaterialCommunityIcons name="logout" size={28} color={"#dc2626"} />
          )}
          label="Logout"
          onPress={() => {
            dispatchEvent(setToken(false));
            router.replace("/auth");
          }}
          // style={{ borderBottomWidth: 1, borderBottomColor: "#000000" }}
        />
      </View>
    </DrawerContentScrollView>
  );
};

const DrawerLayout = () => {
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <Drawer
        drawerContent={CustomDrawerContent}
        screenOptions={{ drawerPosition: "right", drawerType: "slide" }}
      >
        <Drawer.Screen
          name="tabbar"
          options={{
            headerShown: false,
          }}
        />
        <Drawer.Screen
          name="homeScreen"
          options={{
            headerShown: false,
          }}
        />
        <Drawer.Screen
          name="profile"
          options={{
            headerShown: false,
          }}
        />
        <Drawer.Screen
          name="dashboard"
          options={{
            headerShown: false,
          }}
        />
      </Drawer>
    </GestureHandlerRootView>
  );
};

export default DrawerLayout;
