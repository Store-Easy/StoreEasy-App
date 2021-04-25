import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import HostForm from "./HostForm/HostForm";
import RenteeSearch from "./RenteeSearch/RenteeSearch";

const Index = () => {
  return (
    <SafeAreaView>
      <HostForm />
      {/* <RenteeSearch/> */}
    </SafeAreaView>
  );
};

export default Index;
