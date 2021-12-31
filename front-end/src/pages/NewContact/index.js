import { PageHeader } from '../../components/PageHeader';
import { Input } from '../../components/Input';
import { Select } from '../../components/Select';

// import { Container } from './styles';

export function NewContact() {
  return (
    <>
      <PageHeader title="Novo contato" />
      <Input type="text" placeholder="Nome" />
      <Select>
        <option value="123">Instagram</option>
      </Select>
    </>
  );
}
