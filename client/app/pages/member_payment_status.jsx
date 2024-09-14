import {
  View,
  Text,
  ScrollView,
  Alert,
  Pressable,
  StyleSheet,
  Dimensions,
  TouchableOpacity,
} from "react-native";
import React, { useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import Ionicons from "@expo/vector-icons/Ionicons";
import FontAwesome6 from "@expo/vector-icons/FontAwesome6";
import { router } from "expo-router";

const MyCheckbox = ({ onChange, checked, filter }) => {
  return (
    <Pressable onPress={onChange} className="flex-row items-center">
      <View style={[styles.checkboxBase, checked && styles.checkboxChecked]}>
        {checked && <Ionicons name="checkmark" size={16} color="white" />}
      </View>

      <Text style={styles.checkboxLabel}>{filter}</Text>
    </Pressable>
  );
};

const { height } = Dimensions.get("window");
const Member_Payment_Status = () => {
  const [checked, setChecked] = useState(false);
  const [openFilter, setOpenFilter] = useState(false);
  const [userDetails, setUserDetails] = useState(false);

  return (
    <SafeAreaView className="flex-1">
      <View className="bg-[#853e3a] flex-row items-center justify-between px-4 py-[10px] ">
        <Ionicons
          onPress={() => router.back()}
          style={{ backgroundColor: "white", borderRadius: 50, padding: 8 }}
          name="arrow-back"
          size={24}
          color="#853e3a"
        />
        <Text className="text-white text-[18px] font-bold ">
          Payment Status
        </Text>
      </View>

      {openFilter ? (
        <View className="bg-white" style={styles.appContainer}>
          <View className="flex-row items-center justify-between">
            <View>
              <Text className="text-black text-[18px] mb-2 font-bold ">
                Payment
              </Text>
              <View style={styles.checkboxContainer}>
                <MyCheckbox
                  onChange={() => setChecked(!checked)}
                  checked={checked}
                  filter={"All paid members"}
                />
              </View>
              <View style={styles.checkboxContainer}>
                <MyCheckbox
                  onChange={() => setChecked(!checked)}
                  checked={checked}
                  filter={"All not paid members"}
                />
              </View>
            </View>
            <View>
              <Text className="text-black text-[18px] mb-2 font-bold ">
                Users
              </Text>
              <View style={styles.checkboxContainer}>
                <MyCheckbox
                  onChange={() => setChecked(!checked)}
                  checked={checked}
                  filter={"All student members"}
                />
              </View>
              <View style={styles.checkboxContainer}>
                <MyCheckbox
                  onChange={() => setChecked(!checked)}
                  checked={checked}
                  filter={"All non-student members"}
                />
              </View>
            </View>
          </View>

          <View className=" flex-row items-center justify-between space-x-2 mt-4">
            <TouchableOpacity
              onPress={() => setOpenFilter(false)}
              className="flex-1 bg-[#c5c4c4] items-center rounded-[6px] px-4 py-[10px] "
            >
              <Text className="text-black text-[14px] font-bold ">Cancle</Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => setOpenFilter(false)}
              className="flex-1 bg-[#296bd5] items-center rounded-[6px] px-4 py-[10px] "
            >
              <Text className="text-white text-[14px] font-bold ">Apply</Text>
            </TouchableOpacity>
          </View>
        </View>
      ) : (
        <Pressable
          onPress={() => setOpenFilter(true)}
          className=" flex-row items-center justify-end bg-white px-4 py-[10px] space-x-2 "
        >
          <Text className="text-black text-[16px] font-bold ">Filter:</Text>
          <Ionicons name="filter" size={20} color="black" />
        </Pressable>
      )}

      <View className="flex-row items-center justify-between bg-white px-[40] py-[10px] border-t-[1px] border-b-[1px] border-b-[#cccbcb] ">
        <Text className="text-black text-[18px] font-bold ">UserName</Text>
        <Text className="text-black text-[18px] font-bold ">UserId</Text>
      </View>

      <ScrollView className="flex-[1] ">
        <View className="flex-1 my-2">
          {/* User Container Box */}

          <View className=" bg-white flex mx-4 my-2 rounded-[26px] ">
            <TouchableOpacity
              onPress={() => setUserDetails(!userDetails)}
              className=" flex flex-row items-center space-x-2 p-4"
            >
              <Text className="text-[#ffffff] w-[40px] h-[40px]  bg-[#474747] rounded-full  font-baloo text-[26px] text-center">
                S
              </Text>

              <View className="flex-1 flex-row items-center justify-between">
                <View className="flex-col items-start">
                  <Text className="text-black font-bold text-[18px] ">
                    Salman
                  </Text>
                </View>

                <Text className="text-[#24cd06] font-bold text-[20px] ">
                  #8453g4te4d
                </Text>
              </View>
            </TouchableOpacity>

            {userDetails && (
              <View className=" p-4 flex-col items-center border-t-[1px] border-b-[#cccbcb] ">
                <Text className="text-[16px] text-slate-800 font-bold ">
                  Joining Date: 12/12/2022
                </Text>
                <Text className="text-[16px] text-slate-800 font-bold ">
                  Joining Time: 11:32 AM
                </Text>
                <Text className="text-[16px] text-slate-800 font-bold ">
                  Remaining Days (30 days): 12
                </Text>

                <Text className="text-[16px] text-[#21c507] font-bold ">
                  Payment Date: 12/12/2022
                </Text>
              </View>
            )}
          </View>

          <View className=" bg-white flex mx-4 my-2 rounded-[26px] ">
            <TouchableOpacity
              onPress={() => setUserDetails(!userDetails)}
              className=" flex flex-row items-center space-x-2 p-4"
            >
              <Text className="text-[#ffffff] w-[40px] h-[40px]  bg-[#474747] rounded-full  font-baloo text-[26px] text-center">
                S
              </Text>

              <View className="flex-1 flex-row items-center justify-between">
                <View className="flex-col items-start">
                  <Text className="text-black font-bold text-[18px] ">
                    Salman
                  </Text>
                </View>

                <Text className="text-[#da0a0a] font-bold text-[20px] ">
                  #8453g4te4d
                </Text>
              </View>
            </TouchableOpacity>

            {userDetails && (
              <View className=" p-4 flex-col items-center border-t-[1px] border-b-[#cccbcb] ">
                <Text className="text-[16px] text-slate-800 font-bold ">
                  Joining Date: 12/12/2022
                </Text>
                <Text className="text-[16px] text-slate-800 font-bold ">
                  Joining Time: 11:32 AM
                </Text>
                <Text className="text-[16px] text-slate-800 font-bold ">
                  Remaining Days (30 days): 12
                </Text>

                <TouchableOpacity
                  onPress={() => {}}
                  className="flex-1 bg-[#05af0e] items-center rounded-[6px] px-4 py-[10px] mt-4 "
                >
                  <Text className="text-white text-[14px] font-bold ">
                    Accept to Paid
                  </Text>
                </TouchableOpacity>
              </View>
            )}
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Member_Payment_Status;

const styles = StyleSheet.create({
  checkboxBase: {
    width: 20,
    height: 20,
    justifyContent: "center",
    alignSelf: "center",
    borderRadius: 4,
    borderWidth: 2,
    borderColor: "#1d7ee4",
    backgroundColor: "transparent",
  },
  checkboxChecked: {
    // backgroundColor: "coral",
    backgroundColor: "#1d7ee4",
  },
  appContainer: {
    height: height / 4,
    paddingTop: 20,
    paddingHorizontal: 20,
  },

  checkboxContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 12,
  },
  checkboxLabel: {
    marginLeft: 8,
    fontWeight: "500",
    fontSize: 14,
  },
});
