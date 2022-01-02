import { PageHeader } from '../../components/PageHeader';
import { ContactForm } from '../../components/ContactForm';

// import { Container } from './styles';

export function EditContact() {
  return (
    <>
      <PageHeader title="Editar Douglas Oliveira" />
      <ContactForm buttonLabel="Salvar alterações" />
    </>
  );
}
