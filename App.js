import { StatusBar, TextInput, View, Image, SafeAreaView, TouchableOpacity, FlatList } from 'react-native';
import {SvgUri} from 'react-native-svg'
import styles from './src/css/homeStyle';
import main from './src/css/main';
import color from './src/color/colorPalette';
import { useState } from 'react';
export default function App() {
  let [text, changeText] = useState('')
  return (
    <SafeAreaView>
      <View>
        <View>
          <StatusBar 
            backgroundColor={ 
              color.secondaryBackground 
            } 
            barStyle='white-content'
          ></StatusBar>
        </View>

            {/* main body  */}

        <View style= { styles.mainBody }>
            <View style={ styles.topBar }>
              <View style={ styles.searchBtnContainer }>
                <TextInput 
                style={ styles.searchBtn }
                defaultValue={ 'good' }
                onTextChange={i => changeText(i)}
                />
              </View>
              <View style={ styles.optionImage }>
                <SvgUri uri="./assets/grid.svg" style={ main.icon }></SvgUri>
              </View>
              <View style={ styles.optionImage }>
                <Image source={ require('./assets/menu-burger.png') } style={ main.icon }></Image>
              </View>
              <View style={ styles.profileIconCircle }></View>
            </View>
            <View>
              
            </View>
        </View>

            {/* bottom navigation mark  */}

        <View style={ main.navigationBar }>
          <View style= { styles.addButtonContainer }>
            <TouchableOpacity title='' style={ styles.addButton }>
              <Image source={ require('./assets/whitePlus.png') } style={ main.icon }></Image>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
}




