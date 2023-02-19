import AsyncStorage from "@react-native-async-storage/async-storage";

import { GROUP_COLLECTION } from "@storage/configStorage";

export async function groupsGetAll(newGroup: string) {
  try {
    const storage = await AsyncStorage.getItem(GROUP_COLLECTION)

    const groups = storage ? JSON.parse(storage) : [];
    
    return groups
  } catch (error) {
    throw error;
  }
}