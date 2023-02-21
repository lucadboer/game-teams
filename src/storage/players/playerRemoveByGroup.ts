import AsyncStorage from '@react-native-async-storage/async-storage';
import { PLAYER_COLLECTION } from '@storage/configStorage';
import { playersGetByGroup } from '@storage/players/playersGetByGroup';

export async function playerRemoveByGroup(playerToRemove: string, group: string) {
  const storedPlayers = await playersGetByGroup(group)

  const playersFiltered = storedPlayers.filter(player => player.name !== playerToRemove)

  const players = JSON.stringify(playersFiltered)

  await AsyncStorage.setItem(`${PLAYER_COLLECTION}-${group}`, players)
}