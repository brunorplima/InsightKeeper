import React from 'react'
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import AddIcon from './AddIcon'
import { Feather } from '@expo/vector-icons'
import colors from '../utilities/consts'
import { FontAwesome } from '@expo/vector-icons'
import styles from './styles'

const MenuBar = () => {
   return (
      <View style={styles.menuBarContainer}>
         <TouchableOpacity>
            <Feather name="menu" size={32} color={colors.darkCyan} />
         </TouchableOpacity>

         <View style={styles.mbEmptyView}>
            <Text style={{ ...styles.mbText, color: colors.blue }}>Insight </Text>
            <Text style={{ ...styles.mbText, color: colors.green }}>Keeper</Text>
         </View>

         <TouchableOpacity style={styles.buttonContainer}>
            <FontAwesome name="search" size={25} color={colors.darkCyan} />
         </TouchableOpacity>

         <AddIcon />
      </View>
   )
}

export default MenuBar
