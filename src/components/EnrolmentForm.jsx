import { useState } from "react";
import "./EnrolmentForm.css";

export default function EnrolmentForm({
  selectedProgram,
  actionUpdateStudentsList,
}) {
  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");
  const [msg, setMsg] = useState(null);

  const updateFieldState = (event, callback) => {
    const { value } = event.target;
    callback(value);
  };
  const updateFirstName = (e) => updateFieldState(e, setFirstname);
  const updateLastName = (e) => updateFieldState(e, setLastname);

  const insertStudent = (event) => {
    event.preventDefault();
    const newStudent = {
      firstname, // firstname: firstname
      lastname, // lastname: lastname
      programDetail: selectedProgram,
    };
    setFirstname("");
    setLastname("");
    actionUpdateStudentsList(newStudent);
    setMsg(`Aluno cadastrado.`);
  };

  return (
    <>
      <form className="enrolForm" onSubmit={insertStudent}>
        <h1>Student Details</h1>
        <div>
          <label>First name:</label>
          <input
            type="text"
            name="firstname"
            value={firstname}
            onChange={updateFirstName}
          />
        </div>
        <div>
          <label>Last name:</label>
          <input
            type="text"
            name="lastname"
            value={lastname}
            onChange={updateLastName}
          />
        </div>
        <button type="submit">Salvar</button>
        <label id="studentMsg">{msg}</label>
      </form>
    </>
  );
}

// export default function EnrolmentPage() {
//   // const lista = [1, 3, 4, 5, 6, 8, 5, 3];
//   const cards = [
//     { titulo: "titulo", descricao: "descrição"},
//     { titulo: "tituloA", descricao: "descrição"},
//     { titulo: "tituloB", descricao: "descrição"},
//     { titulo: "tituloC", descricao: "descrição"},
//     { titulo: "tituloD", descricao: "descrição"},
//   ];
//   return (
//     <>
//       {lista.map(el => (<p>{el}</p>))}
//       {cards.map(el => (<Card titulo={el.titulo} descricao={el.descricao}/>))}
//     </>
//   );
// }

// function Card({ titulo, descricao}) {
//   return (
//     <>
//       <h3>{titulo}</h3>
//       <p>{descricao}</p>
//     </>
//   )
// }
