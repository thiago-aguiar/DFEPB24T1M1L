export default function StudentsList({
  list,
  inputValue,
  updateFilterTerm,
  actionDeleteStudent,
}) {
  function trStudent(student, index) {
    return (
      <tr key={"student" + index}>
        <td>{index}</td>
        <td>{student.firstname}</td>
        <td>{student.lastname}</td>
        <td>{student.programDetail?.program}</td>
        <td>
          <button onClick={() => actionDeleteStudent(index)}>X</button>
        </td>
      </tr>
    );
  }
  return (
    <>
      <h2>Students List</h2>
      <label id='inputFilterTerm'>Campo de Busca</label>
      <input
        type="text"
        id='inputFilterTerm'
        alt="Informe um termo para filtar a lista de estudantes."
        placeholder="Termo de busca."
        value={inputValue}
        onChange={updateFilterTerm}
      />
      <table>
        <thead>
          <tr>
            <th>#</th>
            <th>Firstname</th>
            <th>Lastname</th>
            <th>Program</th>
            <th>Delete</th>
          </tr>
        </thead>
        <tbody>{list.map(trStudent)}</tbody>
        {/* <tbody>{list.map((ele, idx) => trStudent(ele, idx))}</tbody> */}
      </table>
    </>
  );
}
