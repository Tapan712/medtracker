import { Stack } from "expo-router";
import { MedListContext, SelectMedContext } from "../components/AppContext";
import { useState } from "react";

export default function RootLayout() {
  const [medList, setMedList] = useState(null);
  const [selectedMed, setSelectedMed] = useState(0);
  return (
    <MedListContext.Provider value={{medList,setMedList}}>
            <SelectMedContext.Provider value={{selectedMed,setSelectedMed}}>
    <Stack screenOptions={{
      headerShown:false
    }}>
      <Stack.Screen name="(tabs)"/>
    </Stack>
    </SelectMedContext.Provider>
    </MedListContext.Provider>
  )
}
