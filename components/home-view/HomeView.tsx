import React, { useContext } from 'react'
import { StyleSheet, View, ScrollView } from 'react-native'
import SubjectView from '../subject-view/SubjectView'
import { appContext } from '../../App'

const HomeView = () => {

   const { mainSubjects } = useContext(appContext);

   return (
      <ScrollView style={styles.container}>
         <View style={{paddingTop: 15}}></View>
         {
            mainSubjects.map((subject, i) => <SubjectView key={subject + i} subjectName={subject} />)
         }
      </ScrollView>
   )
}

export default HomeView

const styles = StyleSheet.create({
   container: {
      flex: 1,
      width: '100%',
      paddingHorizontal: 15
   }
})
