import PessoaAddTela from "./Telas/PessoaAddTela";
import PessoaListTela from "./Telas/PessoaListTela";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import '@fortawesome/fontawesome-free/css/all.min.css';

const Stack = createNativeStackNavigator()

export default function App() {
  return(
    <NavigationContainer>
      <Stack.Navigator 
      initialRouteName="PessoaAdd">
        <Stack.Screen 
        name="PessoaAdd" 
        component={PessoaAddTela}
        />
        <Stack.Screen 
        name="PessoaList" 
        component={PessoaListTela}
        />
      </Stack.Navigator>
    </NavigationContainer>
  )
}



