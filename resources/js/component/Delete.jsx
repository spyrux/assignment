import React  from "react";
import { API_BASE_URL } from "../config";
import axios from "axios";
import  Form  from "react-bootstrap/Form";
import {BsXSquare} from 'react-icons/bs';
import Button from "react-bootstrap/Button";


export default function Delete(props) {

    const headers = {
        'Content-Type':'application/json',
    };

    const playerId = props.playerId;


    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.delete(API_BASE_URL+`/players/${playerId}`, 
                {headers}
            );

            if(response.status === 200){
                console.log(playerId, "successfully deleted");
                props.onDeleteButton(playerId, response.data.player);
            }else{
                console.log("Failed to decrement user", playerId);
            }

        } catch (error) {
            console.error('Error:', error);
        }

    }


    return (
        <Form>
            <Button onClick={handleSubmit}>
                <BsXSquare size={18}/>
            </Button>
        </Form>
    );

}