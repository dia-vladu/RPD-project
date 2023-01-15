import './MyTasks.css'
import React from 'react';
import { useEffect, useState } from "react"

const SERVER = 'http://localhost:8080/api'

function Tasks() {
    const [tasks, setTasks] = useState([])

    const getTasks = async () => {
        const response = await fetch(`${SERVER}/getBugs`)

        const data = await response.json()
        setTasks(data)
    }

    useEffect(() => {
        getTasks()
    }, [])

    console.log(tasks);

    // async function getStudName(id){
    //     const response = await fetch(`${SERVER}/getStudent/${id}`)
    //     const data = await response.json()
    //     console.log(data.username, typeof data.username)
    //     return (data.username)
    // }

    const [students, setStudents] = useState([]);

    const getStudents = async (id) => {
        const response = await fetch(`${SERVER}/getStudent/${id}`)
        const data = await response.json()
        setStudents(data);
    }

    useEffect(() => {
        getStudents();
    }, []);

    // var studentsArray = (students.map(student => {
    //     return student;
    // }));
    console.log(students);

    return (
        <div className="tasks">
            <table className="task">
                <thead className='thead'>
                    <tr>
                        <th>Id</th>
                        <th>Severitate</th>
                        <th>Prioritate</th>
                        <th>Link commit</th>
                        <th>Status</th>
                        <th>Nume TST</th>
                    </tr>
                </thead>
                <tbody>
                    {/* {tasks.forEach((task) => {
                        console.log('task: ', task)
                        React.createElement(
                            'tr',
                            task[0],
                            console.log('Am facut un tr ', Object.values(task)[5])
                        )
                    })} */}

                    {tasks.map((val, key) => {
                        return (
                            <tr key={key}>
                                <td>{val.id}</td>
                                <td>{val.severitate}</td>
                                <td>{val.prioritate}</td>
                                <td className='link'>{val.link_commit}</td>
                                <td>{val.status}</td>
                                {/* {id = val.StudentId}
                                <td>{students}</td> */}
                                {/* <td>{getStudName(val.StudentId)}</td> */}
                            </tr>
                        )
                    })}

                </tbody>
                <tfoot>
                    <tr>
                        <td colspan="3">Numar persoane: 2</td>
                    </tr>
                </tfoot>
            </table>
        </div>

    )

    // var ProductRow = React.createClass({
    //     render: function () {
    //       return (
    //         <tr>
    //           <td>{this.props.product.name}</td>
    //           <td>{this.props.product.company_id}</td>
    //           <td>{this.props.product.price}</td>
    //         </tr>
    //       );
    //     }
    //   });


    //   var ProductTable = React.createClass({
    //     render: function () {
    //       var rows = [];

    //       this.props.data.forEach(function(product) {
    //         rows.push(<ProductRow product={product} key={product.id} />);
    //       });

    //       return (
    //         <div className="products">

    //           <h2 className="title">List of products</h2>

    //           <table className="table table-bordered">
    //             <thead>
    //               <tr>
    //                 <th>Name</th>
    //                 <th>Company</th>
    //                 <th>RRP</th>
    //               </tr>
    //             </thead>
    //             <tbody>
    //               {rows}
    //             </tbody>
    //           </table>

    //         </div>
    //       );
    //     }
    //   });
}

export default Tasks