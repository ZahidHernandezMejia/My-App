import React from "react";
import { SafeAreaView } from "react-native";
// import { ContadorScreen } from "./src/screens/ContadorScreen";
// import { HolaMundoScreen } from "./src/screens/HolaMundoScreen";
// import { BoxObjectModelScreen } from './src/screens/BoxObjectModelScreen';
// import { DimensionesScreen } from './src/screens/DimensionesScreen';
import { PositionScreen } from './src/screens/PositionScreen';

const App = () => {
  return (
    <SafeAreaView style={{flex:1,backgroundColor:'white',  }}>
      {/* <HolaMundoScreen/> */}
      {/* <ContadorScreen/> */}
      {/* <BoxObjectModelScreen/> */}
      {/* <DimensionesScreen/> */}
      <PositionScreen/>
    </SafeAreaView>
  )
}

export default App;