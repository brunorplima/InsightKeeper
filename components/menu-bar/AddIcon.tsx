import React, { useContext, useState } from 'react'
import { TouchableOpacity, View, Modal, Text, KeyboardAvoidingView, Platform, TouchableWithoutFeedback } from 'react-native'
import { appContext } from '../../App'
import AddForm from './AddForm'
import { MaterialIcons } from '@expo/vector-icons'
import styles from './styles'
import colors from '../utilities/consts'
import { Feather } from '@expo/vector-icons'

const AddIcon = () => {

   const { mainSubjects, setMainSubjects } = useContext(appContext);

   const [menuOpen, setMenuOpen] = useState<boolean>(false);
   const [formOpen, setFormOpen] = useState<boolean>(false);
   const [task, setTask] = useState<string>('');

   function openModal() {
      setMenuOpen(true);
   }

   function closeModal() {
      setMenuOpen(false);
      setFormOpen(false);
   }

   function showForm(task: string) {
      setTask(task);
      setFormOpen(true);
   }

   return (
      <View>
         <TouchableOpacity style={styles.buttonContainer} onPress={openModal}>
            <Feather name="plus" size={36} color={colors.darkCyan} />
         </TouchableOpacity>

         <Modal visible={menuOpen} animationType='slide' transparent={true}>

            <TouchableOpacity style={styles.addMenuContainer} onPress={closeModal} activeOpacity={1}>


               <KeyboardAvoidingView
                  behavior={'position'}
               >
                  <TouchableOpacity style={styles.addMenu} onPress={() => { }} activeOpacity={1}>
                     <TouchableOpacity style={styles.modalClose} onPress={closeModal}>
                        <MaterialIcons name='close' color='white' size={40} />
                     </TouchableOpacity>

                     <TouchableOpacity style={styles.addMenuButton} onPress={() => showForm('Note')}>
                        <View style={styles.buttonIcon}>
                           <MaterialIcons name='add' size={30} color={colors.blueButtonBorder} />
                        </View>
                        <Text style={styles.addButtonText}>New Note</Text>
                     </TouchableOpacity>
                     <TouchableOpacity style={styles.addMenuButton} onPress={() => showForm('Subject')}>
                        <View style={styles.buttonIcon}>
                           <MaterialIcons name='add' size={30} color={colors.blueButtonBorder} />
                        </View>
                        <Text style={styles.addButtonText}>New Subject</Text>
                     </TouchableOpacity>

                     {
                        formOpen && (
                           <AddForm
                              task={task}
                              currentSubjects={mainSubjects}
                              addSubject={setMainSubjects}
                              closeModal={closeModal}
                           />
                        )
                     }
                  </TouchableOpacity>
               </KeyboardAvoidingView>

            </TouchableOpacity>

         </Modal>
      </View>
   )
}

export default AddIcon

