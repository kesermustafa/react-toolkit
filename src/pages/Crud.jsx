import React, {useState} from 'react';
import {Button, Container, Stack} from "react-bootstrap";
import FormModel from "../components/FormModel.jsx";
import {useSelector} from "react-redux";
import TaskTable from "../components/TaskTable.jsx";


const Crud = () => {

    const [isOpen, setIsOpen] = useState(false)






    return (
        <div className="">
            <Container >
                <Stack className="align-items-end my-4 " >
                    <Button onClick={() => setIsOpen(true)} >Yeni gorev ekle</Button>
                </Stack>


                <TaskTable/>
            </Container>

            <FormModel isOpen={isOpen} close={() => setIsOpen(false)} />
        </div>
    );
};

export default Crud;
