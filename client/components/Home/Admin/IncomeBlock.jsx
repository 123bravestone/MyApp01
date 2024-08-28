import { View, Text, FlatList, TouchableOpacity } from "react-native";
import React from "react";
// import { IncomeType } from "@/types";
import { Colors } from "../../../constants";
import {
  RupeesIcon,
  WalletAddMoneyIcon,
  WalletCardIcon,
} from "../../../constants/svg_Icons";
import Feather from "@expo/vector-icons/Feather";

const IncomeBlock = ({ incomeList }) => {
  const renderItem = ({ item }) => {
    let icon = <RupeesIcon width={20} height={20} />;
    if (item.name === "Freelancing") {
      icon = <WalletCardIcon width={20} height={20} color={Colors.white} />;
    } else if (item.name === "Interest") {
      icon = <WalletAddMoneyIcon width={20} height={20} color={Colors.white} />;
    }

    const amt = item.amount?.split(".");
    if (!amt) return null;
    return (
      <View
        style={{
          backgroundColor: Colors.grey,
          padding: 20,
          borderRadius: 20,
          marginRight: 15,
          width: 150,
          gap: 10,
        }}
      >
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <View
            style={{
              borderColor: "#fff",
              borderWidth: 1,
              borderRadius: 20,
              padding: 5,
              alignSelf: "flex-start",
            }}
          >
            {icon}
          </View>

          <TouchableOpacity onPress={() => {}}>
            <Feather name="more-horizontal" size={24} color="#cccbcb" />
          </TouchableOpacity>
        </View>
        <Text style={{ color: "white" }}>{item.name}</Text>
        <Text style={{ color: "white", fontSize: 16, fontWeight: "700" }}>
          ₹{amt[0]}.
          <Text style={{ fontSize: 12, color: "#cccbcb" }}>{amt[1]}</Text>
        </Text>
      </View>
    );
  };

  return (
    <View>
      <Text style={{ color: "white", fontSize: 16, marginBottom: 20 }}>
        My
        <Text style={{ fontWeight: "700" }}> Income</Text>
      </Text>

      <FlatList
        data={incomeList}
        renderItem={renderItem}
        horizontal
        showsHorizontalScrollIndicator={false}
      />
    </View>
  );
};

export default IncomeBlock;
