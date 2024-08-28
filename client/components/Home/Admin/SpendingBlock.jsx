import { View, Text } from "react-native";
import React from "react";
// import { SpendingType } from "@/types";
import { Colors } from "../../../constants";
import {
  AirbnbIcon,
  AmazonIcon,
  FigmaIcon,
  NetflixIcon,
  RupeesIcon,
  ShoopingCartIcon,
  SpotifyIcon,
} from "../../../constants/svg_Icons";

const SpendingBlock = ({ spendingLish }) => {
  let icon = <RupeesIcon width={22} height={22} />;

  return (
    <View style={{ alignItems: "flex-start" }}>
      <Text style={{ color: Colors.white, fontSize: 16, marginVertical: 20 }}>
        July<Text style={{ fontWeight: "700" }}> Spending</Text>
      </Text>

      {spendingLish.map((item, index) => {
        const amt = item.amount?.split(".");
        if (!amt) return null;

        if (item.name == "AirBnB Rent") {
          icon = <AirbnbIcon width={22} height={22} color={Colors.white} />;
        } else if (item.name == "Netflix") {
          icon = <NetflixIcon width={22} height={22} color={Colors.white} />;
        } else if (item.name == "Spotify") {
          icon = <SpotifyIcon width={22} height={22} color={Colors.white} />;
        } else if (item.name == "Amazon") {
          icon = <AmazonIcon width={22} height={22} color={Colors.white} />;
        } else if (item.name == "Figma") {
          icon = <FigmaIcon width={22} height={22} color={Colors.white} />;
        } else if (item.name == "Online Shopping") {
          icon = (
            <ShoopingCartIcon width={22} height={22} color={Colors.white} />
          );
        }

        return (
          <View
            key={index}
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              alignItems: "center",
              paddingVertical: 10,
              paddingHorizontal: 15,
              marginVertical: 5,
              borderRadius: 10,
              backgroundColor: Colors.grey,
            }}
          >
            <View
              style={{
                padding: 10,
                backgroundColor: Colors.black,
                borderRadius: 20,
                marginRight: 15,
              }}
            >
              {icon}
            </View>
            <View
              style={{
                flex: 1,
                flexDirection: "row",
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              <View style={{ flexDirection: "column", gap: 5 }}>
                <Text
                  style={{
                    fontWeight: "700",
                    color: Colors.white,
                    fontSize: 16,
                  }}
                >
                  {item.name}
                </Text>
                <Text style={{ color: Colors.white, fontSize: 14 }}>
                  {item.date}
                </Text>
              </View>
              <Text
                style={{ fontWeight: "700", color: Colors.white, fontSize: 18 }}
              >
                ₹{amt[0]}.
                <Text style={{ fontSize: 12, color: "#cccbcb" }}>{amt[1]}</Text>
              </Text>
            </View>
          </View>
        );
      })}
    </View>
  );
};

export default SpendingBlock;
