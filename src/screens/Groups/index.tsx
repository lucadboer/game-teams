import { useCallback, useState } from 'react'

import { FlatList } from 'react-native';
import { useFocusEffect, useNavigation } from '@react-navigation/native';

import { groupsGetAll } from '@storage/group/groupsGetAll';

import { Button } from '@components/Button';
import { GroupCard } from "@components/GroupCard";
import { Header } from "@components/Header";
import { Highlight } from "@components/Highlight";
import { ListEmpity } from '@components/ListEmpity';

import { Container } from "./styles";

export function Groups() {
  const [groups, setGroups] = useState<string[]>(['Galera da facul', 'Galera do Discord', 'Galera do trabalho'])

  const navigation = useNavigation()

  function handleNewGroup() {
    navigation.navigate('new')
  }

  async function fetchGroups() {
    try {
      const newGroups = await groupsGetAll()
      setGroups(newGroups)
    } 
    catch (error) {
      console.log(error);
    }
  }

  function handleOpenGroup(group: string) {
    navigation.navigate('players', { group })
  }

  useFocusEffect(useCallback(() => {
    fetchGroups()
  }, []))

  return (
    <Container>
      <Header />
      <Highlight title="Turmas" subtitle="jogue com sua turma" />
      <FlatList
        data={groups}
        keyExtractor={(item, i) => item + i}
        renderItem={({ item }) => (
          <GroupCard title={item} onPress={() => handleOpenGroup(item)} />
        )}
        showsVerticalScrollIndicator={false}
        ListEmptyComponent={() => (<ListEmpity title='A sua lista de turmas está vazia. Crie uma nova turma!' />)}
      />

      <Button title='Criar nova turma' onPress={handleNewGroup} />
    </Container>
  )
}


