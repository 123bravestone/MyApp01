import { View, Text, Alert, Image } from "react-native";
import React from "react";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import FontAwesome6 from "@expo/vector-icons/FontAwesome6";
import { Drawer } from "expo-router/drawer";
import {
  DrawerContentScrollView,
  DrawerItem,
  DrawerItemList,
} from "@react-navigation/drawer";
import { useRouter } from "expo-router";
import { useDispatch } from "react-redux";
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from "react-native-responsive-screen";
import { setToken } from "../../../store/CreateSlices/UserSlice.js";

const CustomDrawerContent = (props) => {
  const router = useRouter();
  const dispatchEvent = useDispatch();

  return (
    <DrawerContentScrollView
      {...props}
      scrollEnabled={false}
      contentContainerStyle={{ backgroundColor: "#853e3a" }}
    >
      <View className="p-[20px]">
        <Image
          source={require("../../../assets/images/icon.png")}
          style={{
            width: wp(20),
            height: hp(10),
            borderRadius: 50,
            alignSelf: "center",
          }}
        />

        <Text className="text-[24px] font-baloo text-[#ffffff] text-center pt-[10px]">
          MyMess
        </Text>
      </View>
      <View className="flex-1 bg-white pt-[10px] ">
        <DrawerItemList {...props} />

        <DrawerItem
          labelStyle={{
            color: "#dc2626",
            fontWeight: "bold",
            fontSize: hp(1.8),
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
        screenOptions={{
          drawerPosition: "right",
          drawerType: "slide",
          drawerActiveTintColor: "#853e3a",
          drawerInactiveTintColor: "#000000",
          drawerActiveBackgroundColor: "#853e3a36",
          // drawerInactiveBackgroundColor: "#853e3a36",

          drawerLabelStyle: {
            fontWeight: "bold",
            fontSize: hp(1.8),
            marginLeft: -16,
          },
        }}
        className="bg-[#853e3a36]"
      >
        <Drawer.Screen
          name="tabbar"
          options={{
            headerShown: false,
            drawerLabel: "Home",
            headerTitle: "Home",
            title: "overview",

            drawerIcon: ({ color, focused, size }) => (
              <View>
                <MaterialCommunityIcons name="home" size={size} color={color} />
              </View>
            ),
          }}
        />
        <Drawer.Screen
          name="profile"
          options={{
            headerShown: false,
            drawerLabel: "Profile",
            headerTitle: "Profile",
            title: "overview",

            drawerIcon: ({ color, focused, size }) => (
              <View>
                <MaterialCommunityIcons
                  name="account"
                  size={size}
                  color={color}
                />
              </View>
            ),
          }}
        />
        <Drawer.Screen
          name="dashboard"
          options={{
            headerShown: false,
            drawerLabel: "Dashboard",
            headerTitle: "Dashboard",
            title: "overview",

            drawerIcon: ({ color, focused, size }) => (
              <View>
                <MaterialIcons name="dashboard" size={size} color={color} />
              </View>
            ),
          }}
        />

        <Drawer.Screen
          name="add_members"
          options={{
            headerShown: false,
            drawerLabel: "Food Request",
            headerTitle: "Food Request",
            title: "overview",

            drawerIcon: ({ color, focused, size }) => (
              <View>
                <MaterialIcons
                  name="person-add-alt-1"
                  size={size}
                  color={color}
                />
              </View>
            ),
          }}
        />

        <Drawer.Screen
          name="food_menu"
          options={{
            headerShown: false,
            drawerLabel: "Food Menu",
            headerTitle: "Food Menu",
            title: "overview",

            drawerIcon: ({ color, focused, size }) => (
              <View>
                <MaterialIcons name="menu-book" size={size} color={color} />
              </View>
            ),
          }}
        />

        <Drawer.Screen
          name="add_mess"
          options={{
            headerShown: false,
            drawerLabel: "Add Mess",
            headerTitle: "Add Mess",
            title: "overview",

            drawerIcon: ({ color, focused, size }) => (
              <View>
                <FontAwesome6 name="hotel" size={size} color={color} />
              </View>
            ),
          }}
        />
      </Drawer>
    </GestureHandlerRootView>
  );
};

export default DrawerLayout;
