import { useState } from "react";
import EnrolmentForm from "/src/components/EnrolmentForm";
import StudentsList from "/src/components/StudentsList";

const objectsList = [
  {
    firstname: "João",
    lastname: "Silva",
    programDetail: {
      id: 1,
      program: "Ensino Médio"
    }
  },
  {
    firstname: "Maria",
    lastname: "Santos",
    programDetail: {
      id: 2,
      program: "Graduação"
    }
  },
  {
    firstname: "Carlos",
    lastname: "Ferreira",
    programDetail: {
      id: 3,
      program: "Pós-graduação"
    }
  },
  {
    firstname: "Ana",
    lastname: "Souza",
    programDetail: {
      id: 4,
      program: "Mestrado"
    }
  },
  {
    firstname: "Pedro",
    lastname: "Oliveira",
    programDetail: {
      id: 5,
      program: "Doutorado"
    }
  },
  {
    firstname: "Luana",
    lastname: "Ribeiro",
    programDetail: {
      id: 6,
      program: "Ensino Médio"
    }
  },
  {
    firstname: "Fernanda",
    lastname: "Martins",
    programDetail: {
      id: 7,
      program: "Graduação"
    }
  },
  {
    firstname: "Ricardo",
    lastname: "Almeida",
    programDetail: {
      id: 8,
      program: "Graduação"
    }
  },
  {
    firstname: "Paula",
    lastname: "Lima",
    programDetail: {
      id: 9,
      program: "Pós-graduação"
    }
  },
  {
    firstname: "Mariana",
    lastname: "Costa",
    programDetail: {
      id: 10,
      program: "Ensino Médio"
    }
  },
];


export default function StudentsPage() {
  const [studentsList, setStudentsList] = useState(objectsList);
  const [program, setProgram] = useState(1);
  const [seats1, setSeats1] = useState(30);
  const [seats2, setSeats2] = useState(20);
  const [seats3, setSeats3] = useState(40);
  const [seats4, setSeats4] = useState(60);
  const [filterTerm, setFilterTerm] = useState("");
  const [selectedProgram, setSelectedProgram] = useState({
    id: 1,
    program: "Graduação",
  });
  const programs = [
    { id: 1, program: "Graduação" },
    { id: 2, program: "Pós" },
    { id: 3, program: "Técnico" },
    { id: 4, program: "Livre" },
  ];
  const updateProgram = (event) => {
    const { value } = event.target;
    setProgram(+value);
    setSelectedProgram(programs[value]);
  };
  const updateStudentsList = (studentDetails) => {
    studentsList.push(studentDetails);
    setStudentsList(studentsList);
    let newSeats;
    switch (program) {
      case 1:
        newSeats = seats1 - 1;
        setSeats1(newSeats);
        break;
      case 2:
        newSeats = seats2 - 1;
        setSeats2(newSeats);
        break;
      case 3:
        newSeats = seats3 - 1;
        setSeats3(newSeats);
        break;
      case 4:
        newSeats = seats4 - 1;
        setSeats4(newSeats);
        break;
    }
  };
  const deleteStudent = (studentIndex) => {
    const list = [...studentsList];
    list.splice(studentIndex, 1);
    setStudentsList(list);
  };
  const showRemainingSeats = () => {
    switch (program) {
      case 1:
        return <label>Remaining Seats - {seats1}</label>;
      case 2:
        return <label>Remaining Seats - {seats2}</label>;
      case 3:
        return <label>Remaining Seats - {seats3}</label>;
      case 4:
        return <label>Remaining Seats - {seats4}</label>;
      default:
        return <label>Remaining Seats - #</label>;
    }
  };
  const updateFilterTerm = (event) => {
    const { value } = event.target;
    setFilterTerm(value);
  }
  const getFilteredStudentsList = () => {
    let filteredList = [...studentsList];
    if (filterTerm)
      filteredList = filteredList.filter((student) => {
        return student.firstname.includes(filterTerm) ||
                student.lastname.includes(filterTerm) ||
                student.programDetail.program.includes(filterTerm);
      })
    return filteredList;
  }
  return (
    <main>
      <div>
        <label>Choose Program:</label>
        <select onChange={updateProgram} value={program}>
          {programs.map((p, index) => (
            <option key={"progOption" + index} value={p.id}>
              {p.program}
            </option>
          ))}
        </select>
      </div>
      <p>{showRemainingSeats()}</p>
      <EnrolmentForm
        selectedProgram={selectedProgram}
        actionUpdateStudentsList={updateStudentsList}
      />
      {/* <input type="text" value={filterTerm} onChange={updateFilterTerm} /> */}
      <StudentsList 
        list={getFilteredStudentsList()} 
        inputValue={filterTerm}
        updateFilterTerm={updateFilterTerm}
        actionDeleteStudent={deleteStudent} />
    </main>
  );
}
