import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Button,
  Alert,
} from 'react-native';
import {SelectList} from 'react-native-dropdown-select-list';

const MacroInput = () => {
  const [selected, setSelected] = React.useState('');
  const [number, onChangeNumber] = React.useState(null);
  const [totalCalories, setTotalCalories] = React.useState('');
  const [protein, setProtien] = React.useState('');
  const [carbs, setCarbs] = React.useState('');
  const [fat, setFat] = React.useState('');
  const [exclude, setExclude] = React.useState('');

  const [prompt, setPrompt] = React.useState('');

  const data = [{value: 'Breakfast'}, {value: 'Lunch'}, {value: 'Dinner'}];

  const recipePrompt = (protein, carbs, fat, selected, exclude, prompt) => {
    console.log(prompt, '💊');

    setPrompt(
      `Give me a ${selected} recipe. It should have the following calorie profile: ${protein} grams of protein, ${carbs} grams of carbohydrates, and ${fat} grams of fat. Please exclude the following ingredients: ${exclude}`,
    );

    Alert.alert(prompt, '✅');
  };

  return (
    <View>
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
        onPress={() =>
          recipePrompt(protein, carbs, fat, selected, exclude, prompt)
        }
      />

      <View>
        <Text style={styles.outputText}>
          Give me a {selected} recipe. It should have the following calorie
          profile : {protein} grams of protein, {carbs} grams of carbohydrates,
          and {fat} grams of fat. Please exclude the following ingredients:
          {exclude}
        </Text>
      </View>
    </View>
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
});

export default MacroInput;
