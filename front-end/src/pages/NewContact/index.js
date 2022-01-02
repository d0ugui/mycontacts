import { PageHeader } from '../../components/PageHeader';
import { ContactForm } from '../../components/ContactForm';

// import { Container } from './styles';

export function NewContact() {
  return (
    <>
      <PageHeader title="Novo contato" />
      <ContactForm buttonLabel="Cadastrar" />
    </>
  );
}
