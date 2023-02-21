import { useCallback, useState } from 'react'

import { FlatList, Alert } from 'react-native';
import { useFocusEffect, useNavigation } from '@react-navigation/native';

import { groupsGetAll } from '@storage/group/groupsGetAll';

import { Button } from '@components/Button';
import { GroupCard } from "@components/GroupCard";
import { Header } from "@components/Header";
import { Highlight } from "@components/Highlight";
import { ListEmpity } from '@components/ListEmpity';

import { Container } from "./styles";
import { Loading } from '@components/Loading';

export function Groups() {
  const [groups, setGroups] = useState<string[]>([])
  const [isLoading, setIsLoading] = useState(true)

  const navigation = useNavigation()

  function handleNewGroup() {
    navigation.navigate('new')
  }

  async function fetchGroups() {
    try {
      setIsLoading(true)
      const newGroups = await groupsGetAll()
      setGroups(newGroups)
    } 
    catch (error) {
      console.log(error)
      Alert.alert('Turmas', 'Ocorreu um erro ao buscar as turmas')
    }
    finally {
      setIsLoading(false)
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
      {isLoading ? <Loading /> : (
        <FlatList
        data={groups}
        keyExtractor={(item, i) => item + i}
        renderItem={({ item }) => (
          <GroupCard title={item} onPress={() => handleOpenGroup(item)} />
        )}
        showsVerticalScrollIndicator={false}
        ListEmptyComponent={() => (<ListEmpity title='A sua lista de turmas está vazia. Crie uma nova turma!' />)}
      />
      )}

      <Button title='Criar nova turma' onPress={handleNewGroup} />
    </Container>
  )
}


