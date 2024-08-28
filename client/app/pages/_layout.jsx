import React from "react";
import { Stack } from "expo-router";

const Page_Layout = () => {
  return (
    <Stack>
      <Stack.Screen name="mess_profile" options={{ headerShown: false }} />
      <Stack.Screen name="add_members" options={{ headerShown: false }} />
      <Stack.Screen name="food_members" options={{ headerShown: false }} />
    </Stack>
  );
};

export default Page_Layout;
