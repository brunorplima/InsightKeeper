import React, { useState } from 'react'
import { Text, TextInput, TouchableOpacity, View } from 'react-native'
import { MaterialIcons } from '@expo/vector-icons'
import colors from '../utilities/consts'
import styles from './styles'

interface Props {
   task: string,
   currentSubjects: string[],
   addSubject: React.Dispatch<React.SetStateAction<string[]>>,
   closeModal: Function
}

const AddForm = ({
   task,
   addSubject,
   currentSubjects,
   closeModal
}: Props) => {

   const [title, setTitle] = useState<string>('');

   function addNewSubject() {
      addSubject([...currentSubjects, title]);
      closeModal();
   }

   return (
      <View style={styles.afContainer}>
         <TextInput
            style={styles.afInput}
            placeholder={`${task} title`}
            value={title}
            onChangeText={text => setTitle(text)}
         />
         <TouchableOpacity
            style={styles.afButton}
            disabled={title === ''}
            onPress={addNewSubject}
         >
            <MaterialIcons name='add' size={30} color={colors.greenButtonBorder} />
         </TouchableOpacity>
      </View>
   )
}

export default AddForm
