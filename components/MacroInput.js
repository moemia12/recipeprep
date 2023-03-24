import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Button,
  Alert,
    FlatList,
  ScrollView
} from 'react-native';
import {SelectList} from 'react-native-dropdown-select-list';
import { Configuration, OpenAIApi } from 'openai';
import { completionFunction } from './chatGPTCall';
import 'react-native-url-polyfill/auto';

const API_URL = 'http://localhost:3000/api';

const MacroInput = () => {


  const [selected, setSelected] = React.useState('');
  const [number, onChangeNumber] = React.useState(null);
  const [totalCalories, setTotalCalories] = React.useState('');
  const [protein, setProtien] = React.useState('');
  const [carbs, setCarbs] = React.useState('');
  const [fat, setFat] = React.useState('');
  const [exclude, setExclude] = React.useState('');
  const [response, setResponse] = React.useState('');
  const [prompt, setPrompt] = React.useState('');

  const data = [{value: 'Breakfast'}, {value: 'Lunch'}, {value: 'Dinner'}];

  const recipePrompt = (protein, carbs, fat, selected, exclude, prompt) => {
    console.log(prompt, '💊');

    setPrompt(
      `Give me a ${selected} recipe. It should have the following calorie profile: ${protein} grams of protein, ${carbs} grams of carbohydrates, and ${fat} grams of fat. Please exclude the following ingredients: ${exclude} Also please respond in JSON format`,
    );

    //Alert.alert(prompt, '✅');
  };

  async function onSubmit(prompt) {

    // try {
    //      const chatResponse = await completionFunction(prompt)
    
    // setResponse(chatResponse)

    // } catch (error){
    //   console.log(error)
    // }
  
 

  try {
    const response = await fetch(`${API_URL}/generate`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({prompt: prompt}),
    });

    const data = await response.json();
    if (response.status !== 200) {
      throw (
        data.error || new Error(`Request failed with status ${response.status}`)
      );
    }

      console.log(data.result, '✅');
      setResponse(data.result);
      console.log(response, '🛎')

  } catch (error) {
    // Consider implementing your own error handling logic here
    console.error(error);
    alert(error.message);
  }
}

  return (
    <ScrollView>
      {/* Total Calories
      <TextInput
        style={styles.input}
        onChangeText={onChangeNumber}
        value={number}
        placeholder="Total Calories"
        keyboardType="numeric"
        placeholderTextColor="black"
      /> */}
      {/* Protien */}
      <TextInput
        style={styles.input}
        onChangeText={setProtien}
        value={number}
        placeholder="Protien"
        keyboardType="numeric"
        placeholderTextColor="black"
      />
      {/* Carbs */}
      <TextInput
        style={styles.input}
        onChangeText={setCarbs}
        value={number}
        placeholder="Carbs"
        keyboardType="numeric"
        placeholderTextColor="black"
      />
      {/* Fat */}
      <TextInput
        style={styles.input}
        onChangeText={setFat}
        value={number}
        placeholder="Fat"
        keyboardType="numeric"
        placeholderTextColor="black"
      />
      {/* Meal Type */}
      <SelectList
        setSelected={val => setSelected(val)}
        data={data}
        save="save"
        boxStyles={styles.dropdown}
        placeholder="Meal Type"
      />
      {/* Exclude */}
      <TextInput
        style={styles.input}
        onChangeText={setExclude}
        value={number}
        placeholder="Exlude"
        keyboardType="numeric"
        placeholderTextColor="black"
      />

      <Button
        title="Submit"
        onPress={() => {
          recipePrompt(protein, carbs, fat, selected, exclude, prompt);
          // handleSubmit();
          onSubmit(prompt);
        }}
      />

      <View>
        <Text style={styles.outputText}>
          Give me a {selected} recipe. It should have the following calorie
          profile : {protein} grams of protein, {carbs} grams of carbohydrates,
          and {fat} grams of fat. Please exclude the following ingredients:
          {exclude} {response}
        </Text>
      </View>
      {/* <FlatList
        data={response}
        renderItem={({item}) => <Text>{item.text}</Text>}
        keyExtractor={item => item.id}
          /> */}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  input: {
    height: 40,
    width: '100%',
    borderRadius: 10,
    marginBottom: 20,
    borderWidth: 1,
    padding: 10,
  },
  dropdown: {
    marginBottom: 20,
  },
  textInputPlaceholder: {
    color: 'black',
  },
  outputText: {
    fontSize: 20,
    },
    recipe: {
      marginTop: 50,
  }
});

export default MacroInput;
