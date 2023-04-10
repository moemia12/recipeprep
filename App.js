import React from 'react';
import {
  SafeAreaView,
} from 'react-native';
import { SelectList } from 'react-native-dropdown-select-list';
import Profile from './components/Profile';
import MacroInput from './components/MacroInput';


const App = () => {

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
      {key: '7', value: 'Drinks'},
    ];

  return (
    <SafeAreaView>
      {/* <Profile /> */}
      <MacroInput/>
    </SafeAreaView>
  );
};



export default App;
