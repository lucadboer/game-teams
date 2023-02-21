import { useEffect, useState } from "react";
import { Alert, FlatList, Keyboard } from "react-native";

import { useNavigation, useRoute } from "@react-navigation/native";

import { playerAddByGroup } from "@storage/players/playerAddByGroup";
import { playersGetByGroupAndTeam } from "@storage/players/playersGetByGroupAndTeam";
import { PlayerDTO } from "@storage/players/PlayerStorageDTO";

import { AppError } from "@utils/AppError";


import { Button } from "@components/Button";
import { ButtonIcon } from "@components/ButtonIcon";
import { Filter } from "@components/Filter";
import { Header } from "@components/Header";
import { Highlight } from "@components/Highlight";
import { Input } from "@components/Input";
import { ListEmpity } from "@components/ListEmpity";
import { PlayerCard } from "@components/PlayerCard";

import { Container, FormContainer, HeaderList, QuantityPlayers } from "./styles";
import { playerRemoveByGroup } from "@storage/players/playerRemoveByGroup";
import { groupRemove } from "@storage/group/groupRemove";
import { Loading } from "@components/Loading";

interface PlayersParams {
  group: string
}

export function Players() {
  const [newPlayerName, setNewPlayerName] = useState('')
  const [players, setPlayers] = useState<PlayerDTO[] | undefined>([])
  const [team, setTeam] = useState('')

  const [isLoading, setIsLoading] = useState(true)

  const navigation = useNavigation()

  const route = useRoute()
  const { group } = route.params as PlayersParams

  async function handleAddNewPlayer() {
    if (newPlayerName.trim().length === 0) {
      return Alert.alert('Novo Jogador', 'Informe um nome para adicionar.')
    }

    if (!team) {
      return Alert.alert('Novo Jogador', 'Selecione um time para o jogador.')
    }

    const newPlayer = {
      name: newPlayerName,
      team,
    }

    try {
      await playerAddByGroup(newPlayer, group)
      setNewPlayerName('')
      Keyboard.dismiss()

      fetchPlayersByTeam()
    }
    catch (error) {
      if (error instanceof AppError) {
        throw Alert.alert('Novo Jogador', error.message)
      }
    }
  }

  async function fetchPlayersByTeam() {
    try {
      setIsLoading(true)
      const playersByTeam = await playersGetByGroupAndTeam(group, team)
      setPlayers(playersByTeam)
    } 
    catch (error) {
      console.log(error);
      Alert.alert('Jogadores', 'Ocorreu um erro ao buscar os jogadores')
    } 
    finally {
      setIsLoading(false)
    }
  }

  async function handleRemovePlayer(playerToRemove: string) {
    await playerRemoveByGroup(playerToRemove, group)
    fetchPlayersByTeam()
  }

  function handleRemoveGroup() {
    Alert.alert('Remover turma', `Deseja deletar a turma ${group}?`, [
      {
        text: 'Não',
        style: 'cancel'
      },
      {
        text: 'Sim',
        onPress: () => removeGroup()
      },
    ])

  }

  async function removeGroup() {
    await groupRemove(group)

    navigation.navigate('groups')
  }

  useEffect(() => {
    fetchPlayersByTeam()
  }, [team])

  return (
    <Container>
      <Header hasBackButton />
      <Highlight title={group} subtitle="adicione a galera e separe os times" />

      <FormContainer>
        <Input
          placeholder="Nome do jogador" 
          autoCorrect={false} 
          onChangeText={setNewPlayerName} 
          value={newPlayerName}
          onSubmitEditing={handleAddNewPlayer}
          returnKeyType="done"
        />
        <ButtonIcon icon="add" onPress={handleAddNewPlayer} />
      </FormContainer>

      <HeaderList>
        <FlatList 
          data={['Team A', 'Team B']} 
          keyExtractor={item => item} 
          renderItem={({item}) => (
            <Filter 
              title={item} 
              toActive={team === item}
              onPress={() => setTeam(item)}
            />
          )} 
          horizontal
          showsHorizontalScrollIndicator={true}
        />
        <QuantityPlayers>{players?.length}</QuantityPlayers>
      </HeaderList>

      {isLoading ? <Loading /> : (
        <FlatList 
        data={players} 
        keyExtractor={(player) => player.name} 
        renderItem={({item}) => (
          <PlayerCard 
            name={item.name}
            onRemove={() => handleRemovePlayer(item.name)} 
          />
        )}
        ListEmptyComponent={<ListEmpity title="Não existe jogadores nessa turma, adicione para formar um time!" />}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={[{paddingBottom: 30}]}
      />
      )}

        <Button title="Remover turma" variant="secondary" onPress={handleRemoveGroup} /> 
      
    </Container>
  )
}