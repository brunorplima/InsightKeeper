import React from 'react'
import { StyleSheet, Image, View, StatusBar } from 'react-native'
import colors from '../utilities/consts'

const StartScreen = () => {
   return (
      <View style={styles.container}>
         <StatusBar hidden={true} />

         <View style={styles.topContainer}>

         </View>

         <View style={styles.logoContainer}>
            <Image
               source={require('../../assets/IK_logo1.png')}
            />
         </View>

         <View style={styles.bottomContainer}>

         </View>
      </View>
   )
}

export default StartScreen

const styles = StyleSheet.create({
   container: {
      flex: 1,
      width: '100%',
      justifyContent: 'center'
   },
   logoContainer: {
      width: '100%',
      height: '40%',
      justifyContent: 'center',
      alignItems: 'center'
   },
   topContainer: {
      flex: 1,
      width: '100%',
      backgroundColor: colors.blue
   },
   bottomContainer: {
      flex: 1,
      width: '100%',
      backgroundColor: colors.green
   }
})
