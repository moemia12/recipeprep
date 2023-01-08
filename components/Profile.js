import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
  TextInput,
} from 'react-native';
import { SelectList } from 'react-native-dropdown-select-list';
import SelectDropdown from 'react-native-select-dropdown';

const Profile = (prop) => {
    const [selected, setSelected] = React.useState('');
      const [text, onChangeText] = React.useState('Useless Text');
      const [number, onChangeNumber] = React.useState(null);

      const data = [
        {key: '1', value: 'Mobiles', disabled: true},
        {key: '2', value: 'Appliances'},
        {key: '3', value: 'Cameras'},
        {key: '4', value: 'Computers', disabled: true},
        {key: '5', value: 'Vegetables'},
        {key: '6', value: 'Diary Products'},
        { key: '7', value: 'Drinks' },
      ];

  return (
    <View>
      {/* AGE */}
      <TextInput
        style={styles.input}
        onChangeText={onChangeNumber}
        value={number}
        placeholder="Total Calories"
        keyboardType="numeric"
      />
      {/* Weight KG */}
      <SelectList
        setSelected={val => setSelected(val)}
        data={data}
        save="value"
        boxStyles={styles.dropdown}
      />
      {/* Height */}
      <SelectList
        setSelected={val => setSelected(val)}
        data={data}
        save="value"
        boxStyles={styles.dropdown}
      />
      {/* Activity Level */}
      <SelectList
        setSelected={val => setSelected(val)}
        data={data}
        save="value"
        boxStyles={styles.dropdown}
      />
      {/* Goal */}
      <SelectList
        setSelected={val => setSelected(val)}
        data={data}
        save="value"
        boxStyles={styles.dropdown}
      />
      {/* Dietry Requirements */}
      <SelectList
        setSelected={val => setSelected(val)}
        data={data}
        save="value"
        boxStyles={styles.dropdown}
      />
      {/* TimeFrame */}
      <SelectList
        setSelected={val => setSelected(val)}
        data={data}
        save="value"
        boxStyles={styles.dropdown}
      />
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
});

export default Profile;
