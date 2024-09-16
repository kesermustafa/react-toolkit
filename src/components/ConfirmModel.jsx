import React from 'react';
import {Button, Modal} from "react-bootstrap";
import {useDispatch} from "react-redux";
import {deleteTask} from "../redux/slice/crudSlice.js";

const ConfirmModel = ({id, isOpen, handleClose}) => {

    const dispatch = useDispatch()

    const handleDelete = ()=>{
      dispatch(deleteTask(id));

      handleClose();
    }


    return (
        <Modal show={isOpen} onHide={handleClose} centered className={"text-black"}>
            <Modal.Header closeButton>
            </Modal.Header>
            <Modal.Body className='text-black'>
                <h5 className='text-danger'>Bu gorevi silmek istediginizden emin misiniz?</h5>
            </Modal.Body>
            <Modal.Footer>
                <Button variant="secondary" onClick={handleClose}>
                    Iptal
                </Button>
                <Button variant="danger" onClick={handleDelete}>
                    S i l
                </Button>
            </Modal.Footer>
        </Modal>
    );
};

export default ConfirmModel;
