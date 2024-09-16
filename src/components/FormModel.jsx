import React from 'react';
import {Button, Form, Modal} from "react-bootstrap";
import {inputs} from "../constans.js";
import {addTask, editTask} from "../redux/slice/crudSlice.js";
import {useDispatch} from "react-redux";


const FormModel = ({task, isOpen, close}) => {



    const dispatch = useDispatch()

    const handleSubmit = (e) => {
        e.preventDefault();

        const formData = new FormData(e.target)
        const taskData = Object.fromEntries(formData.entries())


        if (!task) {
            //reducer a gorev ekle haber ver
            dispatch(addTask(taskData))
        }else{
            dispatch(editTask({id: task.id, ...taskData}))
        }


        e.target.reset();
        close();
    }

    return (
        <Modal
            show={isOpen}
            className='text-black'
            size="lg"
            aria-labelledby="contained-modal-title-vcenter"
            centered
            onHide={close}
        >
            <Modal.Header closeButton>
                <Modal.Title>
                    {task ? "Gorevi Duzenle" : "Yeni Gorev Ekle"}
                </Modal.Title>
            </Modal.Header>

            <Modal.Body>
                <Form onSubmit={handleSubmit}  className='d-flex flex-column gap-3'>
                    {inputs.map((prop, index) =>
                        (
                            <Form.Group key={index}>
                                <Form.Label>{prop.label}</Form.Label>
                                <Form.Control name={prop.name}
                                              placeholder={prop.holder}
                                              type={prop.type}
                                              required
                                              defaultValue={task?.[prop.name]}
                                />
                            </Form.Group>
                        )
                    )}

                    <Modal.Footer>
                        <Button variant={"secondary"} onClick={close}>Iptal</Button>
                        <Button  type={"submit"}>{task ? "Guncelle" : "Olustur"}</Button>
                    </Modal.Footer>
                </Form>
            </Modal.Body>


        </Modal>
    );
};

export default FormModel;
