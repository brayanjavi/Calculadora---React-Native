// screens/CalculatorScreen.tsx
import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

const CalculatorScreen: React.FC = () => {
  const [input, setInput] = useState<string>('');
  const [result, setResult] = useState<string>('');

  const handlePress = (value: string) => {
    if (value === '=') {
      calculateResult();
    } else if (value === 'C') {
      clear();
    } else {
      setInput((prev) => prev + value);
    }
  };

  const calculateResult = () => {
    try {
      const evaluatedResult = eval(input);
      setResult(evaluatedResult.toString());
    } catch (error) {
      setResult('Error');
    }
  };

  const clear = () => {
    setInput('');
    setResult('');
  };

  const buttons = [
    ['7', '8', '9', '/'],
    ['4', '5', '6', '*'],
    ['1', '2', '3', '-'],
    ['0', '.', '=', '+'],
    ['C'],
  ];

  return (
    <View style={styles.container}>
      <Text style={styles.inputText}>{input}</Text>
      <Text style={styles.resultText}>{result}</Text>
      <View style={styles.buttonsContainer}>
        {buttons.map((row, rowIndex) => (
          <View key={rowIndex} style={styles.row}>
            {row.map((buttonValue) => (
              <TouchableOpacity
                key={buttonValue}
                style={styles.button}
                onPress={() => handlePress(buttonValue)}
              >
                <Text style={styles.buttonText}>{buttonValue}</Text>
              </TouchableOpacity>
            ))}
          </View>
        ))}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    height: '100%',
    backgroundColor: '#282C34',
  },
  inputText: {
    fontSize: 36,
    color: '#61DAFB',
    alignSelf: 'flex-end',
    marginRight: 20,
    marginBottom: 10,
  },
  resultText: {
    fontSize: 48,
    color: '#FFFFFF',
    alignSelf: 'flex-end',
    marginRight: 20,
    marginBottom: 30,
  },
  buttonsContainer: {
    width: '100%',
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    marginBottom: 20,
  },
  button: {
    backgroundColor: '#61DAFB',
    padding: 20,
    borderRadius: 100,
    width: '20%',
    alignItems: 'center',
  },
  buttonText: {
    fontSize: 24,
    color: '#282C34',
  },
});

export default CalculatorScreen;
