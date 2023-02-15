import { StatusBar, Text, View, Image, SafeAreaView, TouchableOpacity, FlatList } from 'react-native';
import styles from './src/css/homeStyle';
import main from './src/css/main';
import color from './src/color/colorPalette';
export default function App() {
  return (
    <SafeAreaView>
      <View>
        <View>
          <StatusBar 
            backgroundColor={ 
              color.secondaryBackground 
            } 
            barStyle='dark-content'
          ></StatusBar>
        </View>
        <View style= { styles.mainBody }>
            <View style={ styles.topBar }>
              <View style={ styles.optionImage }>
                <Image source={ require('./assets/menu-burger.png') } style={ main.icon }></Image>
              </View>
              <View style={ styles.profileIconCircle }></View>
            </View>
            <View>
              
            </View>
        </View>
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




