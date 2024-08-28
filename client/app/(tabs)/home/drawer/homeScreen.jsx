import { View, Text, ScrollView, StatusBar, StyleSheet } from "react-native";

import React, { useEffect } from "react";

import { SafeAreaView } from "react-native-safe-area-context";

import ScreenImage from "../../../../components/Home/ScreenImage";
import User_Institutions from "../../../../components/Home/User_Institutions";
import Header from "../../../../components/Home/Header";
import TopMess from "../../../../components/Home/TopMess";
import { useDispatch, useSelector } from "react-redux";
import { addAdmin } from "../../../../store/CreateSlices/UserSlice";

import { Colors } from "../../../../constants";
import { PieChart } from "react-native-gifted-charts";
import Admin_Header from "../../../../components/Home/Admin/Admin_Header";
import ExpenseBlock from "../../../../components/Home/Admin/ExpenseBlock";
import ExpensList from "../../../../data/expenses.json";
import IncomeBlock from "../../../../components/Home/Admin/IncomeBlock";
import IncomeList from "../../../../data/income.json";
import SpendingBlock from "../../../../components/Home/Admin/SpendingBlock";
import SpendingList from "../../../../data/spending.json";

const homeScreen = () => {
  const { isAdmin } = useSelector((state) => state.user);
  const dispatch = useDispatch();

  const pieData = [
    {
      value: 47,
      color: Colors.tintColor,
      focused: true,
      text: "47%",
    },
    {
      value: 40,
      color: Colors.blue,
      text: "40%",
    },
    {
      value: 16,
      color: Colors.white,
      text: "16%",
    },
    { value: 3, color: "#FFA5BA", gradientCenterColor: "#FF7F97", text: "3%" },
  ];

  useEffect(() => {
    dispatch(addAdmin(true));
    // console.log(isAdmin);
  }, []);
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <StatusBar barStyle="light-content" backgroundColor="#853e3a" />
      <ScrollView className="flex-1" showsVerticalScrollIndicator={false}>
        <Header />
        {isAdmin ? (
          <>
            {/* <Stack.Screen options={{ header: () => <Header /> }} /> */}

            <Admin_Header />

            <View style={[styles.container, { paddingTop: 40 }]}>
              <ScrollView showsVerticalScrollIndicator={false}>
                <View
                  style={{
                    flexDirection: "row",
                    justifyContent: "space-between",
                    alignItems: "center",
                  }}
                >
                  <View style={{ gap: 10 }}>
                    <Text style={{ color: Colors.white, fontSize: 16 }}>
                      My <Text style={{ fontWeight: "700" }}>Expenses</Text>
                    </Text>
                    <Text
                      style={{
                        color: Colors.white,
                        fontSize: 32,
                        fontWeight: "700",
                      }}
                    >
                      ₹14758.<Text style={{ fontSize: 22 }}>45</Text>
                    </Text>
                  </View>

                  <View style={{ paddingVertical: 20, alignItems: "center" }}>
                    <PieChart
                      data={pieData}
                      donut
                      showGradient
                      sectionAutoFocus
                      focusOnPress
                      semiCircle
                      radius={70}
                      innerRadius={50}
                      innerCircleColor={Colors.black}
                      centerLabelComponent={() => {
                        return (
                          <View
                            style={{
                              justifyContent: "center",
                              alignItems: "center",
                            }}
                          >
                            <Text
                              style={{
                                fontSize: 20,
                                color: "white",
                                fontWeight: "bold",
                              }}
                            >
                              47%
                            </Text>
                          </View>
                        );
                      }}
                    />
                  </View>
                </View>

                <ExpenseBlock expensList={ExpensList} />
                <IncomeBlock incomeList={IncomeList} />
                <SpendingBlock spendingLish={SpendingList} />
              </ScrollView>
            </View>
          </>
        ) : false ? (
          <>
            <Text>My mess</Text>
            <ScreenImage />
            <Text> Mess Information </Text>
            <Text> Mess Menu </Text>
          </>
        ) : (
          <>
            <ScreenImage />
            <User_Institutions />
            <TopMess />
          </>
        )}
      </ScrollView>
    </SafeAreaView>
  );
};

export default homeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.black,
    paddingHorizontal: 20,
  },
});
