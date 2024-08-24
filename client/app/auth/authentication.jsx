import { useState } from "react";
import { Alert, Image, Text, TouchableOpacity, View } from "react-native";
import MobileLogin from "../../components/Authentication/MobileLogin";
import OTPVerification from "../../components/Authentication/OTPVerification";
import UserName from "../../components/Authentication/UserName";

const Authentication = () => {
  const [flag, setFlag] = useState(false);
  const [validation, setValidation] = useState(false);

  return (
    <>
      {!validation ? (
        <View className="flex-1">
          <View className="flex-[1]  items-center justify-center px-[20px]">
            <Image
              className="flex-[1] w-screen"
              source={require("../../assets/images/login_page.png")}
            />
          </View>
          {!flag ? (
            <MobileLogin setFlag={setFlag} />
          ) : (
            <OTPVerification setValidation={setValidation} setFlag={setFlag} />
          )}
        </View>
      ) : (
        <UserName setValidation={setValidation} setFlag={setFlag} />
      )}
    </>
  );
};

export default Authentication;
