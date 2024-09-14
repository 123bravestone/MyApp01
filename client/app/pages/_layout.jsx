import React from "react";
import { Stack } from "expo-router";

const Page_Layout = () => {
  return (
    <Stack>
      <Stack.Screen name="mess_details" options={{ headerShown: false }} />
      <Stack.Screen
        name="member_payment_status"
        options={{ headerShown: false }}
      />
    </Stack>
  );
};

export default Page_Layout;
