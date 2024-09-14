import React from "react";
import { Stack } from "expo-router";

const HomeLayout = () => {
  return (
    <>
      <Stack>
        <Stack.Screen name="drawer" options={{ headerShown: false }} />
        <Stack.Screen name="add_expense" options={{ headerShown: false }} />

        {/* <Stack.Screen name="homeScreen" options={{ headerShown: false }} /> */}
        {/* <Stack.Screen name="profile" options={{ headerShown: false }} /> */}
      </Stack>
    </>
  );
};

export default HomeLayout;
