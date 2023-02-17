import { ButtonIcon } from "@components/ButtonIcon";
import { Filter } from "@components/Filter";
import { Header } from "@components/Header";
import { Highlight } from "@components/Highlight";
import { Input } from "@components/Input";
import { Container, FormContainer } from "./styles";

export function Players() {
  return (
    <Container>
      <Header hasBackButton />
      <Highlight title="Nome da turma" subtitle="adicione a galera e separe os times" />

      <FormContainer>
        <Input placeholder="Nome do participante" autoCorrect={false}/>
        <ButtonIcon icon="add" />
      </FormContainer>

      <Filter title="Grupo A" />
    </Container>
  )
}