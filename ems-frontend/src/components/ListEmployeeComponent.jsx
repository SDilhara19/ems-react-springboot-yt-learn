import React, {useEffect, useState} from 'react'
import { deleteEmployee, listEmployees } from '../services/EmployeeService'
import { useNavigate } from 'react-router-dom'

const ListEmployeeComponent = () => {

   

    const [employees, setEmployees] = useState([])

    const navigator = useNavigate();

    useEffect(() => {
       getAllEmployees();
    }, [])

    function getAllEmployees(){
        listEmployees().then((response) => {
            setEmployees(response.data);
        }).catch(error => {
            console.error(error);
        })
    }

    function addNewEmployee(){
        navigator('/add-employee')
    }


    function updateEmployee(id){
        navigator(`/edit-employee/${id}`)
    }

    function removeEmployee(id){
        deleteEmployee (id).then(response => {
            console.log(response.data);
            getAllEmployees()
          }).catch(error => {
            console.error(error);
          })
    }

   

    return (
        <div className='container'>
             <h1 className="text-3xl font-bold underline">
      Hello world!
    </h1>
            <h2 className='text-center'>List of Employees</h2>
            <button className='btn btn-primary mb-2' onClick={addNewEmployee}>Add Employee</button>
            <table className='table table-striped table-bordered'>
                <thead>
                    <tr>
                        <th>Employee Id</th>
                        <th>Employee First Name</th>
                        <th>Employee Last Name</th>
                        <th>Employee Email</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                   {
                    employees.map(employee => 
                        <tr key={employee.id} >
                            <td>{employee.id}</td>
                            <td>{employee.firstName}</td>
                            <td>{employee.lastName}</td>
                            <td>{employee.email}</td>
                            <td className='text-center'>
                                <button className='btn btn-info m-2' onClick={() => updateEmployee(employee.id)}>Update</button>
                                <button className='btn btn-danger m-2' onClick={() => removeEmployee(employee.id)}>Delete</button>
                            </td>
                        </tr>
                    )
                   }
                </tbody>
            </table>
        </div>
    )
}

export default ListEmployeeComponent