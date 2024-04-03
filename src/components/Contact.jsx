import { Accordion } from "react-bootstrap";

const Contact = () => {
  return (
    <>
      <form>
        <label className="form-label" >Correo:</label>
        <input type="email" className="form-control" name="email" />
        <label className="form-label mt-3" >Descripción</label>
        <textarea className="form-control" name="descripcion"></textarea>
        <button className="btn btn-danger mt-3">Enviar</button>
      </form>
    </>
  );
};
export default Contact;
