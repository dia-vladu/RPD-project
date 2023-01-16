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

    const [bugs, setBugs] = useState([]);

    const getBugs = async () => {
        const response = await fetch(`${SERVER}/getBugs`)
        const data = await response.json()
        setBugs(data);
    }

    useEffect(() => {
        getBugs();
    }, []);


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
                        <th>Id TST</th>
                    </tr>
                </thead>
                <tbody>

                    {tasks.map((val, key) => {
                        async function getStudName() {
                            try {
                                const response = await fetch(`${SERVER}/getStudent/${val.StudentId}`)
                                const data = await response.json()
                                console.log(data.username, typeof data.username)
                                return (data.username)
                            }
                            catch (err) {
                                console.log(err);
                            }
                        }
                        return (
                            <tr key={key}>
                                <td>{val.id}</td>
                                <td>{val.severitate}</td>
                                <td>{val.prioritate}</td>
                                <td className='link'>{val.link_commit}</td>
                                <td>{val.status}</td>
                                <td>{val.StudentId}</td>
                                {/* {id = val.StudentId} */}
                                {/* <td>{students}</td> */}
                                {/* <td>{getStudName()}</td> */}
                            </tr>
                        )
                    })}

                </tbody>
                <tfoot>
                    <tr>
                        <td colspan="3">Numar buguri: {bugs.length}</td>
                    </tr>
                </tfoot>
            </table>
        </div>

    )
}

export default Tasks