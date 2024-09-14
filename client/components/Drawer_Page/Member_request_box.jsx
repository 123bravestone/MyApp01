import { View, Text, TouchableOpacity, Alert } from "react-native";
import React, { useState } from "react";
import { heightPercentageToDP as hp } from "react-native-responsive-screen";

const Member_request = () => {
  const [showDetails, setShowDetails] = useState(false);
  return (
    <View className="flex-1 my-[20px] mx-[10px] ">
      <Text
        style={{ fontSize: hp(2.2) }}
        className="text-slate-800 mb-[20px] font-bold"
      >
        Accept request
      </Text>

      {/* Request Box */}
      <View className="flex-row items-center justify-between py-2 px-4 my-1 rounded-[20px] bg-white ">
        <TouchableOpacity
          onPress={() => setShowDetails(!showDetails)}
          className="flex-1 flex-col gap-1 "
        >
          <Text
            style={{ fontSize: hp(2) }}
            className="text-slate-800 font-bold"
          >
            User Name
          </Text>
          <Text
            style={{ fontSize: hp(1.8) }}
            className="text-slate-600 font-semibold"
          >
            user Id
          </Text>
        </TouchableOpacity>
        <View className="flex-1 flex-row items-center justify-between gap-2 ">
          <TouchableOpacity
            onPress={() => Alert.alert("Accept but not paid")}
            className="flex-1 items-center bg-red-600 rounded-[6px] px-[10px] py-[4px] "
          >
            <Text
              style={{ fontSize: hp(1.8) }}
              className="text-white font-bold "
            >
              Not Paid
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => Alert.alert("Accept")}
            className="flex-1 items-center bg-green-600 rounded-[6px] px-[10px] py-[4px] "
          >
            <Text
              style={{ fontSize: hp(1.8) }}
              className="text-white font-bold "
            >
              Paid
            </Text>
          </TouchableOpacity>
        </View>
      </View>

      {/* User Details */}

      {showDetails && (
        <View className="flex-col items-center gap-2 py-2 px-4 mb-4 rounded-[20px] bg-white ">
          <Text
            style={{ fontSize: hp(2) }}
            className="text-slate-800 font-bold"
          >
            User Id: #8t7549fr75k6
          </Text>
          <Text
            style={{ fontSize: hp(2) }}
            className="text-slate-800 font-bold"
          >
            Joining Date: 01/01/2023
          </Text>
          <Text
            style={{ fontSize: hp(2) }}
            className="text-slate-800 font-bold"
          >
            Joining Time: 08:00 AM
          </Text>
          <View className="flex-1 flex-row items-center justify-between gap-2 ">
            <Text
              style={{ fontSize: hp(2.4) }}
              className="text-slate-800 font-bold"
            >
              If user is Fake:
            </Text>
            <TouchableOpacity
              onPress={() => Alert.alert("Remove user")}
              className="flex-1 items-center bg-red-600 rounded-[6px] px-[10px] py-[4px] "
            >
              <Text
                style={{ fontSize: hp(1.8) }}
                className="text-white font-bold"
              >
                Remove user
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      )}
    </View>
  );
};

export default Member_request;
