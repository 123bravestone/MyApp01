import { View, Text } from "react-native";
import React from "react";
import { useLocalSearchParams } from "expo-router";

const Add_Items = () => {
  const params = useLocalSearchParams();
  return (
    <View className="flex-1 items-center justify-center">
      <Text>{params.name}</Text>
    </View>
  );
};

export default Add_Items;
