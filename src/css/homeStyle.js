import { StyleSheet, Dimensions } from 'react-native';
import color from '../color/colorPalette';
import size from '../sizePalette';

const styles = StyleSheet.create({
  mainBody: {
    width: '100%',
    height: '100%',
    backgroundColor: color.secondaryBackground,
    paddingHorizontal: '6%',
    paddingVertical: '2%'
  },
  topBar: {
    width: '100%',
    height: 60,
    flexDirection: 'row',
    alignItems: 'center',
  },
  searchBtn: {
    width: '100%',
    height: '100%',
    backgroundColor: color.primaryBackground,
    borderRadius: size.L,
    
  },
  searchBtnContainer:{
    width: '75%',
    height: '100%'
  },
  optionImage: {
    width: (10/2)+'%' ,
    aspectRatio: 1/1,
    position: 'relative',
    marginHorizontal: size.medium 
  },
  profileIconCircle: {
    width: 40,
    aspectRatio: 1/1,
    backgroundColor: color.secondaryBackground,
    borderRadius: size.L,
    marginHorizontal: size.medium
  },
  addButtonContainer: {
    width: '100%',
    height: '100%',
    flexDirection: 'row',
    justifyContent: 'flex-end'
  },
  addButton: {
    width: 70,
    aspectRatio: 1/1,
    backgroundColor: color.primary,
    padding: 27,
    borderRadius: size.L,
    transform: [{
      translateY : -85
    }],
    marginRight: 20
  },
  fl: {
    width: '100%',
    height: '100%'
  },
  item: {
    width: '50%',
    aspectRatio: 1/1.5,
    backgroundColor: color.primaryBackground,
    borderRadius: 30,
    // margin: 8,
    borderColor: color.secondaryBackground,
    borderWidth: 8
  }
});

export default styles