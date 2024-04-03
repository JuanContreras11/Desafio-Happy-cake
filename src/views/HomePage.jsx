import  {Container}  from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';

const HomePage = () => {
  return (
    <Container className="text-center " >
      <h1 className="pt-5">
        Bienvenido a <span className="fw-bold">Happy Cake</span> 
      </h1>
      <h6> El lugar de los pasteles felices  </h6>
      <h1>🍰🎂</h1>
    </Container>
  );
};
export default HomePage;
