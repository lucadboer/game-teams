import { AppError } from './../../utils/AppError';
import AsyncStorage from "@react-native-async-storage/async-storage";

import { GROUP_COLLECTION } from "@storage/configStorage";
import { groupsGetAll } from "./groupsGetAll";

export async function groupCreate(newGroup: string) {
  try {
    const storedGroups = await groupsGetAll()

    const groupsAlreadyExists = storedGroups.includes(newGroup)

    if (groupsAlreadyExists) {
      throw new AppError('Já existe uma turma criada com esse nome...')
    }

    const storage = JSON.stringify([...storedGroups,  newGroup])

    await AsyncStorage.setItem(GROUP_COLLECTION, storage)
  } catch (error) {
    throw error;
  }
}