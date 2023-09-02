import { View, StatusBar, SafeAreaView } from 'react-native';
import { Basket } from './src/views/basket';
import { 
  useFonts,
  Montserrat_400Regular,
  Montserrat_700Bold
} from '@expo-google-fonts/montserrat'

export default function App() {
  const [ myFonts ] = useFonts({
    "MontserratRegular": Montserrat_400Regular,
    "MontserratBold": Montserrat_700Bold
  })

  if(!myFonts) return <View/>

  return (
    <SafeAreaView>
      <StatusBar/>
      <Basket/>
    </SafeAreaView>
  ); 
}
