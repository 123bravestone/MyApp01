import {
  View,
  Text,
  ListRenderItem,
  FlatList,
  StyleSheet,
  TouchableOpacity,
} from "react-native";
import React from "react";
// import { ExpenseType } from "@/types";
import Feather from "@expo/vector-icons/Feather";
import { Colors } from "../../../constants";

const ExpenseBlock = ({ expensList }) => {
  const renderItem = ({ item, index }) => {
    if (index === 0) {
      return (
        <TouchableOpacity onPress={() => {}}>
          <View style={styles.addBtn}>
            <Feather name="plus" size={24} color="white" />
            <Text style={{ color: "white", marginTop: 10, fontSize: 12 }}>
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
                ? "#97e0f7"
                : item.name === "Saving"
                ? "#fcfcfc"
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
                ? "#1a1a1a"
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
                ? "#1a1a1a"
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
    borderColor: "#666",
    borderStyle: "dashed",
    padding: 10,
    borderRadius: 10,
    marginRight: 20,
    justifyContent: "center",
    alignItems: "center",
  },
});
