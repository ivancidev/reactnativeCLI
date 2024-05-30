/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, {useState} from 'react';
import {
  SafeAreaView,
  StatusBar,
  StyleSheet,
  TextInput,
  useColorScheme,
  View,
} from 'react-native';

import {Colors} from 'react-native/Libraries/NewAppScreen';
import Counter from './src/components/Counter';
import ButtonComponent from './src/components/ButtonComponent';

function App(): React.JSX.Element {
  const isDarkMode = useColorScheme() === 'dark';
  const [count, setCount] = useState<number>(0);
  const [inputValue, setInputValue] = useState<string>('1');

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
    flex: 1,
  };

  const handleInputChange = (value: string) => {
    setInputValue(value.replace(/[^0-9]/g, ''));
  };

  return (
    <SafeAreaView style={backgroundStyle}>
      <StatusBar
        barStyle={isDarkMode ? 'light-content' : 'dark-content'}
        backgroundColor={backgroundStyle.backgroundColor}
      />
      <View style={styles.container}>
        <Counter value={count} />
        <TextInput
          style={styles.input}
          keyboardType="numeric"
          value={inputValue}
          onChangeText={handleInputChange}
        />
        <ButtonComponent
          title="Sumar"
          onPress={() => setCount(count + parseInt(inputValue || '0', 10))}
          style={styles.incrementButton}
        />
        <ButtonComponent
          title="Restar"
          onPress={() => setCount(count - parseInt(inputValue || '0', 10))}
          style={styles.decrementButton}
        />
        {count !== 0 && (
          <ButtonComponent
            title="Reset"
            onPress={() => setCount(0)}
            style={styles.resetButton}
          />
        )}
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    gap: 20,
    backgroundColor: '#130f40',
  },
  input: {
    height: 60,
    borderColor: '#dff9fb',
    borderWidth: 3,
    marginBottom: 20,
    textAlign: 'center',
    width: 200,
    borderRadius: 12,
    fontSize: 25,
    color: '#dff9fb',
  },
  incrementButton: {
    backgroundColor: '#4CAF50',
  },
  decrementButton: {
    backgroundColor: '#f44336',
  },
  resetButton: {
    backgroundColor: '#008CBA',
  },
});

export default App;
