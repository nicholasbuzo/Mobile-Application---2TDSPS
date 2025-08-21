// AppHeaderAlert
import * as React from 'react';
import { View, Text, Button, StyleSheet, Alert } from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator, NativeStackScreenProps} from '@react-navigation/native-stack';
import {SafeAreaProvider} from 'react-native-safe-area-context';

// Definindo os tipos das rotas
type RootStackParamList = {
  Home: undefined;
};

type HomeScreenProps = NativeStackScreenProps<RootStackParamList, 'Home'>;

const Stack = createNativeStackNavigator<RootStackParamList>();

// Componente para a tela inicial
function HomeScreen({navigation}: HomeScreenProps): React.JSX.Element {
  return (
    <View style={style.container}>
      <Text style={style.mainText}>Exemplo Header Button</Text>
    </View>
  )
}

// Definindo os estilos
const style = StyleSheet.create({
  container: {
    flex:1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#a32222',
  },
  mainText: {
    fontSize: 18,
    color: '#ffff',
    marginBottom: 24,
  },
});

// Componente principal do aplicativo

function App(): React.JSX.Element {
  const handleButtonPress = (): void => {
    Alert.alert('Informação', 'Você pressionou o botão');
  };

  return (
    <SafeAreaProvider>
      <NavigationContainer>
        <Stack.Navigator
          screenOptions={{
            headerStyle:{
              backgroundColor: '#f8f9fa',
            },
            headerTintColor: '#000',
            headerTitleStyle: {
              fontWeight: 'bold',
              fontSize: 20,
            },
            headerShown: true, // garante que o header seja mostrado
          }}
          >
            <Stack.Screen
            name='Home'
            component={HomeScreen}
            options={{
              // Configuração do cabeçalho da tela Home
              title: 'Header Button',
              headerRight: () => ( // Define local botão
                <Button
                  onPress={handleButtonPress}
                  title='info'
                  color='#00cc00' // Define cor botão
                />
              ),
            }}
          />
          </Stack.Navigator>
      </NavigationContainer>
    </SafeAreaProvider>
  );
}

export default App;