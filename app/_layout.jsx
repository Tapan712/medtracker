import { Stack } from "expo-router";
import { MedListContext, SelectMedContext, DoseListContext,DbContext} from "../components/AppContext";
import { useEffect, useState } from "react";
import { View, Text } from 'react-native'
import * as SQLite from 'expo-sqlite';

export default function RootLayout() {
  const [medList, setMedList] = useState(null);
  const [doseList, setDoseList] = useState(null);
  const [dbObj, setDbObj] = useState(null);
  const [selectedMed, setSelectedMed] = useState(0);
  const [loaded, setLoaded] = useState(false);
  useEffect(() => {
    // Initialize or fetch the medication list here if needed
    // For example, you could fetch from a local database or API
    // setMedList(fetchedMedList);
     const initializeApp = async () => {
      const db = await SQLite.openDatabaseAsync("medTrackerDB.db");
      db.execAsync(
        `CREATE TABLE IF NOT EXISTS med (
          mId INTEGER PRIMARY KEY AUTOINCREMENT,
          name TEXT NOT NULL,
          type TEXT NOT NULL,
          dose TEXT NOT NULL,
          timesPerDay TEXT NOT NULL,
          whenTotake TEXT NOT NULL,
          startDate TEXT NOT NULL,
          startTime TEXT NOT NULL,
          endDate TEXT NOT NULL,
          endTime TEXT NOT NULL,
          courseDuration TEXT NOT NULL
        );`
      );
      db.execAsync(
        `CREATE TABLE IF NOT EXISTS doseStatus (
          dId INTEGER PRIMARY KEY AUTOINCREMENT,
          dSlNo TEXT NOT NULL,
          date TEXT NOT NULL,
          time TEXT NOT NULL,
          status TEXT,
          mId INTEGER NOT NULL
        );`
      );
      console.log('Database initialized successfully');
      const allMedList = await db.getAllAsync(`SELECT * FROM med;`);
      const medStatusList = await db.getAllAsync(`SELECT * FROM doseStatus;`);
      setDbObj(db);
      setMedList(allMedList);
      setDoseList(medStatusList);
      console.log('Fetched medList:', allMedList);
      console.log('Fetched doseList:', medStatusList);
      console.log('App loaded via _layout.jsx!');
    }
    initializeApp();
    setLoaded(true);
  }, []);

  if (!loaded) {
    return (
      <View>
        <Text>Loading app...</Text>
      </View>
    );
  }

  return (
      <DbContext.Provider value={{dbObj, setDbObj}}>
    <MedListContext.Provider value={{medList,setMedList}}>
      <DoseListContext.Provider value={{doseList, setDoseList}}>
      <SelectMedContext.Provider value={{selectedMed,setSelectedMed}}>
    <Stack screenOptions={{
      headerShown:false
    }}>
      <Stack.Screen name="(tabs)"/>
    </Stack>
    </SelectMedContext.Provider>
    </DoseListContext.Provider>
    </MedListContext.Provider>
    </DbContext.Provider>
  )
}
