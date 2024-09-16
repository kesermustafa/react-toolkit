import React, {useState} from 'react';
import {Button, Table} from "react-bootstrap";
import {FaRegEdit, FaRegTrashAlt} from "react-icons/fa";
import {useSelector} from "react-redux";
import ConfirmModel from "./ConfirmModel.jsx";
import FormModel from "./FormModel.jsx";

const TaskTable = () => {

    const [isDelOpen, setIsDelOpen] = useState(false)
    const [isOpen, setIsOpen] = useState(false)
    const [isEditOpen, setIsEditOpen] = useState(false)
    const [id, setId] = useState(null)
    const [editTask, setEditTask] = useState(null)

    const {tasks} = useSelector((store)=> store.crudReducer)

    return (
        <Table variant={'dark'} responsive striped hover>

            <thead>
            <tr>
                <th>#</th>
                <th>Gorev</th>
                <th>Yazan</th>
                <th>Atanan</th>
                <th>Tarih</th>
                <th>Islemler</th>
            </tr>
            </thead>

            <tbody>
            {
                tasks.map((task, index) => (
                    <React.Fragment key={task.id}>
                    <tr >
                        <td className="align-middle">{index + 1}</td>
                        <td className="align-middle">{task.title}</td>
                        <td className="align-middle">{task.author}</td>
                        <td className="align-middle">{task.assigned}</td>
                        <td className="align-middle">{task.end_date}</td>
                        <td className="align-middle">
                            <Button onClick={() => {
                                setIsEditOpen(true)
                                setId(task.id)
                                setEditTask(task)

                            }}><FaRegEdit/></Button>
                            <Button onClick={() => {
                                setIsDelOpen(true)
                                setId(task.id)
                            }}  variant={"danger"} className='ms-1'><FaRegTrashAlt/></Button>
                        </td>
                    </tr>

                        <FormModel task={editTask} id={id} isOpen={isEditOpen} close={() => setIsEditOpen(false)} />

                        <ConfirmModel id={id}
                                      isOpen={isDelOpen}
                                      handleClose={() => setIsDelOpen(false)} />
                    </React.Fragment>
                ))
            }
            </tbody>





        </Table>
    );
};

export default TaskTable;
