import React from "react";
import { SafeAreaView} from "react-native";
// import { ContadorScreen } from "./src/screens/ContadorScreen";
// import { HolaMundoScreen } from "./src/screens/HolaMundoScreen";
// import { BoxObjectModelScreen } from './src/screens/BoxObjectModelScreen';
// import { DimensionesScreen } from './src/screens/DimensionesScreen';
// import { PositionScreen } from './src/screens/PositionScreen';
// import { FlexScreen } from './src/screens/FlexScreen';
import { CalculadoraScreen } from './src/screens/calculadora/CalculadoraScreen';
import { styles } from "./src/theme/appTheme";

const App = () => {
  return (
    <SafeAreaView style={styles.fondo}>
      {/* <HolaMundoScreen/> */}
      {/* <ContadorScreen/> */}
      {/* <BoxObjectModelScreen/> */}
      {/* <DimensionesScreen/> */}
      {/* <PositionScreen/> */}
      {/* <FlexScreen/> */}
      <CalculadoraScreen/>
    </SafeAreaView>
  )
}

export default App;