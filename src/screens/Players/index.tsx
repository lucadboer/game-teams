import { Button } from "@components/Button";
import { ButtonIcon } from "@components/ButtonIcon";
import { Filter } from "@components/Filter";
import { Header } from "@components/Header";
import { Highlight } from "@components/Highlight";
import { Input } from "@components/Input";
import { ListEmpity } from "@components/ListEmpity";
import { PlayerCard } from "@components/PlayerCard";
import { useState } from "react";
import { FlatList } from "react-native";
import { Container, FormContainer, HeaderList, QuantityPlayers } from "./styles";

export function Players() {
  const [team, setTeam] = useState('')

  return (
    <Container>
      <Header hasBackButton />
      <Highlight title="Nome da turma" subtitle="adicione a galera e separe os times" />

      <FormContainer>
        <Input placeholder="Nome do participante" autoCorrect={false}/>
        <ButtonIcon icon="add" />
      </FormContainer>

      <HeaderList>
        <FlatList 
          data={['Grupo A', 'Grupo B','Grupo c', 'Grupa B','Grupe A', 'Grup]d B',]} 
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
          data={['aa','aa','aa','aa','aa','aa','aa','aa','aa','aa','aa','aa','aa',]} 
          keyExtractor={(item, i) => item + i} 
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