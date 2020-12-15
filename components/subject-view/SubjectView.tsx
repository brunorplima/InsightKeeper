import React from 'react'
import { StyleSheet, Text, TouchableOpacity, Image } from 'react-native'
import colors from '../utilities/consts'

interface Props {
   subjectName: string
}

const SubjectView = ({ subjectName }: Props) => {
   return (
      <TouchableOpacity style={styles.container}>
         <Image
            source={require('../../assets/folder.png')}
            style={styles.image}
         />
         <Text style={styles.text}>{subjectName}</Text>
      </TouchableOpacity>
   )
}

export default SubjectView

const styles = StyleSheet.create({
   container: {
      // position: 'absolute',
      height: 50,
      width: '100%',
      backgroundColor: colors.darkCyan,
      borderRadius: 6,
      flexDirection: 'row',
      alignItems: 'center',
      paddingHorizontal: 15,
      marginBottom: 20,
      zIndex: 2
   },
   text: {
      color: 'white',
      fontSize: 20
   },
   image: {
      width: 30,
      height: 30,
      marginRight: 15
   }
})
