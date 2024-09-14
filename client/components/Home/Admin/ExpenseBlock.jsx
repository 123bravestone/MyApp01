import {
  View,
  Text,
  ListRenderItem,
  FlatList,
  StyleSheet,
  TouchableOpacity,
  Alert,
} from "react-native";
import React from "react";
// import { ExpenseType } from "@/types";
import { router } from "expo-router";
import Feather from "@expo/vector-icons/Feather";
import { Colors } from "../../../constants";

const ExpenseBlock = ({ expensList }) => {
  const renderItem = ({ item, index }) => {
    if (index === 0) {
      return (
        <TouchableOpacity
          onPress={() =>
            router.push({
              pathname: "home/add_expense",
              params: {
                name: "Food",
              },
            })
          }
        >
          <View style={styles.addBtn}>
            <Feather name="plus" size={24} color="black" />
            <Text style={{ color: "black", marginTop: 10, fontSize: 12 }}>
              Add Item
            </Text>
          </View>
        </TouchableOpacity>
      );
    }

    const amt = item.amount?.split(".");
    if (!amt) return null;

    return (
      <View
        style={[
          styles.expensesBlock,
          {
            backgroundColor:
              item.name === "Food"
                ? "#2a79a7"
                : item.name === "Saving"
                ? "#87428a"
                : "#723feb",
          },
        ]}
      >
        <Text
          style={{
            fontSize: 14,
            color:
              item.name === "Food"
                ? "#1a1a1a"
                : item.name === "Saving"
                ? "#fcfcfc"
                : "#fcfcfc",
          }}
        >
          {item.name}
        </Text>
        <Text
          style={{
            color:
              item.name === "Food"
                ? "#1a1a1a"
                : item.name === "Saving"
                ? "#fcfcfc"
                : "#fcfcfc",
            fontSize: 16,
            fontWeight: "600",
          }}
        >
          ₹{amt[0]}.
          <Text style={{ fontSize: 12, color: "#cccbcb" }}>{amt[1]}</Text>
        </Text>
        <Text
          style={{
            color:
              item.name === "Food"
                ? "#1a1a1a"
                : item.name === "Saving"
                ? "#1a1a1a"
                : "#fcfcfc",
            backgroundColor: "#f4d4fd33",
            paddingHorizontal: 5,
            paddingVertical: 3,
            borderRadius: 10,
            fontSize: 14,
          }}
        >
          {item.percentage}%
        </Text>
      </View>
    );
  };

  const staticItem = [{ name: "Add Item" }];
  return (
    <View style={{ paddingVertical: 20 }}>
      <FlatList
        data={staticItem.concat(expensList)}
        renderItem={renderItem}
        horizontal
        showsHorizontalScrollIndicator={false}
      />
    </View>
  );
};

export default ExpenseBlock;

const styles = StyleSheet.create({
  expensesBlock: {
    padding: 10,
    borderRadius: 15,
    backgroundColor: Colors.tintColor,
    marginRight: 15,
    width: 100,
    gap: 8,
    justifyContent: "space-between",
    alignItems: "flex-start",
  },
  addBtn: {
    flex: 1,
    borderWidth: 2,
    borderColor: "#2a79a7",
    borderStyle: "dashed",
    padding: 5,
    borderRadius: 10,
    marginRight: 20,
    justifyContent: "center",
    alignItems: "center",
  },
});
