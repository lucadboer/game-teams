import { AppError } from './../../utils/AppError';
import { PlayerDTO } from './PlayerStorageDTO';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { PLAYER_COLLECTION } from '@storage/configStorage';
import { playersGetByGroup } from './playersGetByGroup';


export async function playerAddByGroup(newPlayer: PlayerDTO, group: string ) {
  try {
    const storedPlayers = await playersGetByGroup(group)

    const playersAlreadyExists = storedPlayers.filter(player => player.name === newPlayer.name)

    if (playersAlreadyExists.length > 0) {
      throw new AppError('Já existe um jogador com esse nome em algum dos times')
    }

    const storage = JSON.stringify([...storedPlayers, newPlayer])
    await AsyncStorage.setItem(`${PLAYER_COLLECTION}-${group}`, storage)
  }
  catch (error) {
    throw error
  }
}