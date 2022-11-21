import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'


function App() {
  const [depts,setDept] = useState([]);
  const [emps,setEmps] = useState([]);

  useEffect(()=>{
    (async()=>{
      const response = await fetch('http://localhost:5000/department')
      const dept = await response.json();
      setDept(dept);
    })();
  }, []);

useEffect(()=>{
  (async ()=>{
    const resp = await fetch('http://localhost:5000/employee');
    const empes = await resp.json();
    setEmps(empes);
  })();
},[]);

  return (
    <div className="App">
      <h1>Departments</h1>
      <div className="dept">
        {
          depts.map((dept)=>(
            <li key={dept}>{dept.id} - {dept.name} - {dept.location}</li>
          ))
        }
      </div>
        <h1>Employees</h1>
        <div className="emp">
          {
            emps.map((emp)=>(
              <li key={emp}>{emp.lastname}, {emp.firstname} - {emp.department}</li>
            ))
          }
        </div>
    </div>
  )
}

export default App
