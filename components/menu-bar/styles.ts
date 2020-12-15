import { StyleSheet } from 'react-native'
import colors from '../utilities/consts'


const styles = StyleSheet.create({
   menuBarContainer: {
      height: 70,
      width: '100%',
      flexDirection: 'row',
      alignItems: 'center',
      borderBottomWidth: 1,
      borderBottomColor: colors.green,
      paddingTop: 20,
      paddingHorizontal: 15,
   },
   mbText: {
      fontSize: 25,
   },
   mbEmptyView: {
      flex: 1,
      justifyContent: 'center',
      flexDirection: 'row',
   },
   mbSearchIcon: {
      width: 26,
      height: 26
   },
   buttonContainer: {
      width: 40,
      height: 40,
      marginLeft: 0,
      justifyContent: 'center',
      alignItems: 'center',
      borderRadius: 100
   },
   addMenuContainer: {
      padding: 30,
      backgroundColor: 'rgba(0,0,0,0.6)',
      justifyContent: 'center',
      alignItems: 'center',
      flex: 1,
      width: '100%'
   },
   addMenu: {
      width: 250,
      backgroundColor: 'white',
      borderRadius: 15,
      padding: 10,
      alignItems: 'center'
   },
   addMenuButton: {
      height: 50,
      justifyContent: 'center',
      alignItems: 'center',
      borderWidth: 1,
      borderColor: colors.blueButtonBorder,
      backgroundColor: colors.blueButtonBg,
      width: '100%',
      marginBottom: 8,
      borderRadius: 15,
      flexDirection: 'row'
   },
   addMenuButtonLast: {
      marginBottom: 0
   },
   addButtonText: {
      color: colors.blueButtonBorder,
      fontSize: 20,
      flex: 1,
      textAlign: 'center'
   },
   buttonIcon: {
      flexBasis: '20%',
      borderRightWidth: 1,
      borderRightColor: colors.blueButtonBorder,
      height: '100%',
      justifyContent: 'center',
      alignItems: 'center'
   },
   modalClose: {
      position: 'absolute',
      top: -50,
      right: 0,
      paddingVertical: 5
   },
   afContainer: {
      width: '100%',
      marginTop: 25,
      alignItems: 'center',
      padding: 10,
   },
   afInput: {
      width: '100%',
      borderBottomWidth: 1,
      borderBottomColor: 'gray',
      fontSize: 16

   },
   afButton: {
      marginTop: 10,
      padding: 10,
      borderColor: colors.greenButtonBorder,
      borderWidth: 1,
      backgroundColor: colors.greenButtonBg,
      borderRadius: 15
   }
})


export default styles