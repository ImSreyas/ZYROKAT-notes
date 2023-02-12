import { StatusBar, StyleSheet, Text, View, Image, SafeAreaView } from 'react-native';


export default function App() {
  return (
    <SafeAreaView>
      <View>
        <View>
          <StatusBar backgroundColor={ color.primaryBackground } barStyle='dark-content'></StatusBar>
        </View>

        <View style= { styles.mainBody }>
            <View style={ styles.topBar }>
              <View style={ styles.profileIconCircle }></View>
            </View>
        </View>
      </View>
    </SafeAreaView>
  );
}

const color = {
  primary: '#658864',
  secondary: '#B7B78A',
  primaryBackground: '#EEEEEE',
  secondaryBackground: '#DDDDDD'
}
const styles = StyleSheet.create({
  mainBody: {
    width: '100%',
    height: '100%',
    backgroundColor: color.primaryBackground,
    paddingHorizontal: '6%',
    paddingVertical: '2%'
  },
  topBar: {
    width: '100%',
    height: '7%',
    backgroundColor: color.secondaryBackground,
    borderRadius: 16,
    flexDirection: 'row',
    justifyContent: 'flex-end',
    alignItems: 'center'
  },
  profileIconCircle: {
    width: 40,
    aspectRatio: 1/1,
    backgroundColor: '#bbb',
    borderRadius: 1000,
    marginRight: 16
  },
  container: {
    width: '100%',
    height: '100%',
    backgroundColor: "#FFF",
    alignItems: 'center',
    justifyContent: 'center',
  },
  card: {
    width: '80%',
    height: '50%',
    margin: '2%',
    backgroundColor: '#aaa'
  }
});


