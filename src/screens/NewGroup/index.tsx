import { useState } from 'react'

import { Button } from "@components/Button";
import { Header } from "@components/Header";
import { Highlight } from "@components/Highlight";
import { Input } from "@components/Input";
import { Container, Content, Icon } from "./styles";
import { useNavigation } from '@react-navigation/native';

export function NewGroup() {
  const [group, setGroup] = useState('')

  const navigation = useNavigation()

  function handleCreateGroup() {
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