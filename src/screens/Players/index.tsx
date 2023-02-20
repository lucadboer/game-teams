import { Button } from "@components/Button";
import { ButtonIcon } from "@components/ButtonIcon";
import { Filter } from "@components/Filter";
import { Header } from "@components/Header";
import { Highlight } from "@components/Highlight";
import { Input } from "@components/Input";
import { ListEmpity } from "@components/ListEmpity";
import { PlayerCard } from "@components/PlayerCard";
import { useRoute } from "@react-navigation/native";
import { playerAddByGroup } from "@storage/players/playerAddByGroup";
import { playersGetByGroup } from "@storage/players/playersGetByGroup";
import { AppError } from "@utils/AppError";
import { useState } from "react";
import { Alert, FlatList } from "react-native";
import { Container, FormContainer, HeaderList, QuantityPlayers } from "./styles";

interface PlayersParams {
  group: string
}

export function Players() {
  const [newPlayerName, setNewPlayerName] = useState('')
  const [team, setTeam] = useState('')

  const route = useRoute()
  const { group } = route.params as PlayersParams

  async function handleAddNewPlayer() {
    if (newPlayerName.trim().length === 0) {
      return Alert.alert('Novo Jogador', 'Informe um nome para adicionar.')
    }

    const newPlayer = {
      name: newPlayerName,
      team,
    }

    try {
      await playerAddByGroup(newPlayer, group)
      const players = await playersGetByGroup(group)
      console.log(players);
    }
    catch (error) {
      if (error instanceof AppError) {
        throw Alert.alert('Novo Jogador', error.message)
      }
    }
  }

  return (
    <Container>
      <Header hasBackButton />
      <Highlight title={group} subtitle="adicione a galera e separe os times" />

      <FormContainer>
        <Input placeholder="Nome do participante" autoCorrect={false} onChangeText={setNewPlayerName}/>
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
        <QuantityPlayers>2</QuantityPlayers>
      </HeaderList>

      <FlatList 
          data={[]} 
          keyExtractor={(item) => item} 
          renderItem={({item}) => (
            <PlayerCard 
              name={item} 
            />
          )}
          ListEmptyComponent={<ListEmpity title="Não existe jogadores nessa turma, adicione para formar um time!" />}
          showsVerticalScrollIndicator={false}
          contentContainerStyle={[{paddingBottom: 30}]}
        />

        <Button title="Remover turma" variant="secondary" /> 
      
    </Container>
  )
}