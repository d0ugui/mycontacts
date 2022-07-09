import { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';

import { PageHeader } from '../../components/PageHeader';
import { ContactForm } from '../../components/ContactForm';
import { Loader } from '../../components/Loader';

import toast from '../../utils/toast';
import ContactsService from '../../services/ContactsService';

export function EditContact() {
  const [isLoading, setIsLoading] = useState(true);

  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    async function loadContact() {
      try {
        const contactData = await ContactsService.getContactById(id);
        console.log({ contactData });
        setIsLoading(false);
      } catch {
        navigate('/');
        toast({
          type: 'danger',
          text: 'Contato não encontrado!',
        });
      }
    }

    loadContact();
  }, [id, navigate]);

  function handleSubmit() {
    console.log(id);
  }

  return (
    <>
      <Loader isLoading={isLoading} />
      <PageHeader
        title="Editar Douglas Oliveira"
      />
      <ContactForm
        buttonLabel="Salvar alterações"
        onSubmit={handleSubmit}
      />
    </>
  );
}
