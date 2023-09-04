import React, { useEffect , useState} from "react";
import { Link, useParams } from "react-router-dom";
import { API_BASE_URL } from "../config";
import axios from "axios";


export default function ViewPlayer(){

    const {playerId} = useParams();
    const [player, setPlayer] = useState(null);

    useEffect(() => {
        async function fetchData() {
            
            try { 
                const response = await axios.get(API_BASE_URL+`/players/` + playerId);
                const data = response.data;
                console.log(response);
                setPlayer(data.player);

            } catch (error) {
                console.error('Error:', error);
            }
            

        
    }
    fetchData();

    },[playerId]);

    if(!player){
        return(
            <br></br>
        );
    }


    return (
        <div>
            
            
            <div className='fixed top-40 left-[500px] w-full h-full items-center justify-center'>
                <Link className="text-sm" to={`/`}>Back</Link>
                <ul className= " w-[300px] text-xl  text-white bg-gray-700 border-gray-500 rounded-lg">
                    <li className="p-2 border border-slate-200">Name : {player.name}</li>
                    <li className="p-2 border border-slate-200">Age : {player.age}</li>
                    <li className="p-2 border border-slate-200">Address : {player.address}</li>
                    <li className="p-2 border border-slate-200">Points : {player.points}</li>
                </ul>
                
            </div>
        </div>
    );
    
}