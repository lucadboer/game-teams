import { useState } from 'react'

import { GroupCard } from "@components/GroupCard";
import { Header } from "@components/Header";
import { Highlight } from "@components/Highlight";
import { Container } from "./styles";
import { FlatList } from 'react-native';
import { ListEmpity } from '@components/ListEmpity';
import { Button } from '@components/Button';

export function Groups() {
  const [groups, setGroups] = useState<string[]>(['Galera da facul', 'Galera do Discord', 'Galera do trabalho'])

  return (
    <Container>
      <Header />
      <Highlight title="Turmas" subtitle="jogue com sua turma" />
      <FlatList
        data={groups}
        keyExtractor={(item, i) => item + i}
        renderItem={({ item }) => (
          <GroupCard title={item} />
        )}
        showsVerticalScrollIndicator={false}
        ListEmptyComponent={() => (<ListEmpity title='A sua lista de turmas está vazia. Crie uma nova turma!' />)}
      />

      <Button title='Criar nova turma' />
    </Container>
  )
}


