import AsyncStorage from "@react-native-async-storage/async-storage";

import { GROUP_COLLECTION, PLAYER_COLLECTION } from "@storage/configStorage";
import { groupsGetAll } from "./groupsGetAll";

export async function groupRemove(groupRemoved: string) {
  try {
    const storedGroups = await groupsGetAll()

    const groups = storedGroups.filter(group => group !== groupRemoved)
  
    await AsyncStorage.setItem(`${GROUP_COLLECTION}`, JSON.stringify(groups))
    await AsyncStorage.removeItem(`${PLAYER_COLLECTION}-${groupRemoved}`)
  } catch (error) {
    throw error
  }
}