import { View, StatusBar, SafeAreaView } from 'react-native';
import { Basket } from './src/views/basket';

export default function App() {
  return (
    <SafeAreaView>
      <StatusBar/>
      <Basket/>
    </SafeAreaView>
  ); 
}
