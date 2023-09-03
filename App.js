import { View, StatusBar, SafeAreaView } from 'react-native';
import { Basket } from './src/views/basket';
import * as SplashScreen from 'expo-splash-screen';
import { UseLoadFonts } from './src/hooks/useLoadFonts';

SplashScreen.preventAutoHideAsync();

export default function App() {
  const { fontsLoaded, onLayoutRootView } = UseLoadFonts();
  if(!fontsLoaded){
    return null
  }
  return (
    <SafeAreaView
      onLayout={onLayoutRootView}
    >
      <StatusBar/>
      <Basket/>
    </SafeAreaView>
  ); 
}
