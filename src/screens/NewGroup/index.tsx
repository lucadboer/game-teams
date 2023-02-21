import { useState } from 'react'
import { Alert } from 'react-native'

import { useNavigation } from '@react-navigation/native';
import { groupCreate } from '@storage/group/groupCreate';

import { AppError } from '@utils/AppError';

import { Button } from "@components/Button";
import { Header } from "@components/Header";
import { Highlight } from "@components/Highlight";
import { Input } from "@components/Input";

import { Container, Content, Icon } from "./styles";

export function NewGroup() {
  const [group, setGroup] = useState('')

  const navigation = useNavigation()

  async function handleCreateGroup() {
    if (group.trim().length === 0) {
      return Alert.alert('Nova turma', 'Digite mais de um caractere para criar a turma')
    }
    
    try {
      await groupCreate(group)
    }
    catch (error) {
      if (error instanceof AppError) {
        throw Alert.alert('Nova turma', error.message)
      }
    }
    navigation.navigate('players', { group })
  }

  return (
    <Container>
      <Header hasBackButton />

      <Content>
        <Icon />

        <Highlight title="Nova turma" subtitle="crie uma turma para adicionar pessoas" />

        <Input placeholder="Nome da turma" value={group} onChangeText={setGroup} />

        <Button title="Criar" onPress={handleCreateGroup} />
      </Content>
    </Container>
  )
}