import ToastMessage from '../ToastMessage';
import { Container } from './styles';

export default function ToastContainer() {
  return (
    <Container>
      <ToastMessage text="Default toast" type="default" />
      <ToastMessage text="Error toast" type="danger" />
      <ToastMessage text="Sucess toast" type="success" />
    </Container>
  );
}
