import { Title } from "./styles";

interface ListEmpityProps {
  title: string;
}

export function ListEmpity({ title }: ListEmpityProps) {
  return <Title>{title}</Title>
}