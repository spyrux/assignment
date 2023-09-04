import React, {useEffect, useState} from 'react';
import { API_BASE_URL } from '../config';
import { Button} from "react-bootstrap";
import axios from "axios";
import { Reorder } from 'framer-motion';
import { Link } from 'react-router-dom';
import Increment from './Increment';
import Decrement from './Decrement';
import {BsArrowUpSquare, BsArrowDownSquare} from 'react-icons/bs';
import Delete from './Delete';

export default function Leaderboard(){

    const[players, setPlayers] = useState(null);
    const[isLoading, setIsLoading] = useState(null);
    const[isDescending, setIsDescending] = useState(true);
    const[isAlphabetical, setIsAlphabetical] = useState(null)
    const [filterText, setFilterText] = useState('');

    
    const [displayPlayers, setDisplayPlayers] = useState(null);

    useEffect(() => {
        
        async function fetchData() {
            if(!players) {
            try { 
                setIsLoading(true);
                const response = await axios.get(API_BASE_URL+'/players');
                const data = response.data;
                console.log(response);
                const players = data.players;
                setPlayers(data.players);
                setDisplayPlayers(players);
                setIsLoading(false);

            } catch (error) {
                setIsLoading(false);
                console.error('Error:', error);
            }
            

        }
    }

    fetchData();

    },[]);

    const handleFilterChange = (e) => {
        const newText = e.target.value; 
        setFilterText(newText); 
      
        let filtered = [...players];  
      
        
        if (newText !== '') {
          filtered = players.filter((player) =>
            player.name.toLowerCase().includes(newText.toLowerCase())
          );    
        }
      
       
        if (isDescending === true) {
          filtered.sort((a, b) => b.points - a.points);
        } else if (isDescending === false) {
          filtered.sort((a, b) => a.points - b.points);
        }
      
        setDisplayPlayers(filtered);
      };

    function onDelete(id) {
        console.log("deleting user id",id);
        const newPlayers = [...players];
        const newDisplayPlayers =[...displayPlayers];
        const playerIndex = newPlayers.findIndex(player => player.id === id);
        const displayPlayerIndex = newDisplayPlayers.findIndex(player => player.id === id);
        newDisplayPlayers.splice(displayPlayerIndex, 1);
        newPlayers.splice(playerIndex, 1);
        setDisplayPlayers(newDisplayPlayers);
        setPlayers(newPlayers);
    }
    
    function onNameOrder() {

        const newPlayers = [...displayPlayers];
        if(isAlphabetical == null){
            newPlayers.sort((a, b) => a.name.localeCompare(b.name));
            setDisplayPlayers(newPlayers);
            setIsAlphabetical(true);
        }else{
            setIsAlphabetical(isAlphabetical => {
                console.log("Previous isAlphabetical is: ", isAlphabetical);
                
               
                if (!isAlphabetical === true) {
                    newPlayers.sort((a, b) => a.name.localeCompare(b.name));
                } else {
                    newPlayers.sort((a, b) => b.name.localeCompare(a.name));
                }
        
        
                setDisplayPlayers(newPlayers);
                
                return !isAlphabetical;
            });

        }
      

    }
    function onPointOrderAsc() {
        const newPlayers = [...displayPlayers];
        
        newPlayers.sort((a, b) => a.points - b.points);
            
    
           
        setDisplayPlayers(newPlayers);

        setIsDescending(isDescending => {
            console.log("Previous isDescending is: ", isDescending);
            
           
             
            
            

            return false;
        });
    }

    function onPointOrderDes() {
        const newPlayers = [...displayPlayers];
        
        newPlayers.sort((a, b) => b.points - a.points);
            
    
           
        setDisplayPlayers(newPlayers);
        setIsDescending(isDescending => {
            console.log("Previous isDescending is: ", isDescending);
            

            return true;
        });
    }


    function onUpdate(id, data) {
       
        console.log("Received id:", id);
        console.log("Received data:", data);
        const newPlayers = [...displayPlayers]; 
        
        
        const playerIndex = newPlayers.findIndex(player => player.id === id);
      
     
        if (playerIndex !== -1) {
          newPlayers[playerIndex] = data;
        }
        if(isDescending === true){
            newPlayers.sort((a,b) => b.points - a.points);
        }
        if(isDescending === false){
            newPlayers.sort((a,b) => a.points - b.points);
        }
        
        setDisplayPlayers(newPlayers);
    }

    return (


        <div className='fixed top-10 left-0 w-full  flex justify-center'>
        {isLoading && <br></br>}

        {players && 
        <div>
            <input
                className=' left-9 p-2 w-60 mx-2 my-2 text-sm'
                type="text"
                placeholder="Type to filter"
                value = {filterText}
                onChange={e => handleFilterChange(e)}
            />
            <article className= " w-[800px] text-sm font-medium text-white bg-gray-700 border-gray-500 rounded-lg">
            <h1 className='p-3 text-center  text-lg border border-gray-400 rounded-lg'>Leaderboard</h1>
            <Reorder.Group values={displayPlayers} onReorder={setDisplayPlayers} drag={false}>
                <table className="min-w-full leading-normal">
                    <thead className='p-1 text-center '>
                        <tr>
                            <th className='p-1 text-center border-r border-gray-400'>
                            <Button className=' px-3'onClick={onNameOrder} >Name </Button></th>
                            <th className='p-1 text-center '>Points
                            {isDescending? <Button className=' px-3' onClick={onPointOrderAsc}><BsArrowUpSquare/></Button> : 
                            <Button className=' px-3'onClick={onPointOrderDes} ><BsArrowDownSquare/></Button>}
                             </th>
                            
                        </tr>
                        
                    </thead>
                    <tbody>
                        {displayPlayers.map(player =>
                            <Reorder.Item as="tr" key ={player.id} value={player} drag={false} className='bg-gray-600'>
                                <td className="p-4 text-left border font-normal border-gray-400">
                                    <div className='flex'>
                                        <Delete className="pl-5" onDeleteButton = {onDelete} playerId = {player.id}/>
                                        <Link className ="pl-5"to={`/players/${player.id}`}>{player.name}</Link>

                                    </div>
                                </td>
                                <td className="p-2 text-center border border-gray-400">
                                    <div >
                                        <Increment onIncrement ={onUpdate} playerId ={player.id}/>
                                        <p className='pb-2'>{player.points}</p>
                                        <Decrement onDecrement ={onUpdate} playerId ={player.id}/>
                                    </div>
                                </td>

                            </Reorder.Item>

                            )}



                    </tbody>



                </table>
            </Reorder.Group>

        </article>
        <div className='relative top-2'>
            <Link to ={'/players/create'}>
                <Button className='absolute top-full right-2 py-2 text-sm border rounded-lg bg-lime-500 w-32'>Create Player
                </Button>
            </Link>
        </div>
        </div>}
    </div>

    );
    
}
