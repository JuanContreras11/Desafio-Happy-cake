import { Container } from "react-bootstrap";

import Contact from "../components/Contact";

const PlansPage = () => {
  return (
    <Container className="pt-5 text-center ">
      <h1 className="mb-4">Cuentanos, ¿En que te puedo Ayudar❓</h1>
      <Contact />
    </Container>
  );
};
export default PlansPage;