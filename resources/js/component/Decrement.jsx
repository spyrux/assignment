import React  from "react";
import { API_BASE_URL } from "../config";
import axios from "axios";
import  Form  from "react-bootstrap/Form";
import {BsDashSquare} from 'react-icons/bs';
import Button from "react-bootstrap/Button";


export default function Decrement(props) {

    const headers = {
        'Content-Type':'application/json',
    };

    const playerId = props.playerId;
    const data = {
        'amount' : -1,
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.put(API_BASE_URL+`/players/${playerId}/increment`, 
                data,
                {headers}
            );

            if(response.status === 200){
                console.log(playerId, "successfully decremented");
                props.onDecrement(playerId, response.data.player);
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
                <BsDashSquare size={18}/>
            </Button>
        </Form>
    );

}