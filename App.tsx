import React, { useState, useEffect, createContext, useContext } from 'react';
import { StyleSheet, View, Image } from 'react-native';
import MenuBar from './components/menu-bar/MenuBar';
import HomeView from './components/home-view/HomeView';
import StartScreen from './components/start-screen/StartScreen'

interface Context {
  mainSubjects: string[],
  setMainSubjects: React.Dispatch<React.SetStateAction<string[]>>
}
const mainSubjects: string[] = [];
const setMainSubjects: React.Dispatch<React.SetStateAction<string[]>> = () => { }
export const appContext = createContext<Context>(
  {
    mainSubjects,
    setMainSubjects
  }
);

export default function App() {

  const [isStarting, setIsStarting] = useState<boolean>(true)
  const [mainSubjects, setMainSubjects] = useState<string[]>([
    'Theology',
    'Economics'
  ])

  useEffect(() => {
    if (isStarting) {
      setTimeout(() => {
        setIsStarting(false);
      }, 5000);
    }
  }, [isStarting]);

  return (
    <View style={styles.container}>
      <appContext.Provider value={
        {
          mainSubjects,
          setMainSubjects
        }}>

        {
          isStarting && <StartScreen />
        }

        {
          !isStarting && <MenuBar />
        }

        {
          !isStarting && <HomeView />
        }

      </appContext.Provider>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexBasis: '100%',
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center'
  }
});
