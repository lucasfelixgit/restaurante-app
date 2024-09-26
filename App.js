import { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet} from 'react-native';

export default function App() {
  const [clients, setClients] = useState(0);

  const increment = () => {
    setClients(prevClient => prevClient + 1);
  };

  const decrement = () => {
    if (clients > 0) {
      setClients(prevClient => prevClient - 1);
    }
  };

  return (

    <View style={styles.container}>
   
      <Text style={styles.title}>Contador Restaurante App</Text>

      <Text style={styles.counter}>Número de clientes: {clients}</Text>

      <View style={styles.buttonContainer}>

        <TouchableOpacity style={styles.button} onPress={increment}>
          <Text style={styles.buttonText}>Entrada</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.button} onPress={decrement}>
          <Text style={styles.buttonText}>Saída</Text>
        </TouchableOpacity>

      </View>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFF',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },

  title: {
    fontSize: 24,
    color: '#f3b61f',
    fontWeight: 'bold',
    marginBottom: 20,
  },

  counter: {
    fontSize: 18,
    marginBottom: 20,
  },

  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
  },

  button: {
    backgroundColor: '#f3b61f',
    padding: 15,
    borderRadius: 50,
    marginHorizontal: 10,
    flex: 1,
  },

  buttonText: {
    color: '#FFF',
    textAlign: 'center',
    fontWeight: 'bold',
  },
});