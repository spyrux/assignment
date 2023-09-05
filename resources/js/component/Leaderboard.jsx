import React, {useEffect, useState} from 'react';
import { Reorder } from 'framer-motion';
import { InertiaLink } from '@inertiajs/inertia-react';
import Increment from './Increment';
import Decrement from './Decrement';
import {BsArrowUpSquare, BsArrowDownSquare} from 'react-icons/bs';
import Delete from './Delete';


export default function Leaderboard(props){


    const[players, setPlayers] = useState(props.players);
    const[isDescending, setIsDescending] = useState(true);
    const[isAlphabetical, setIsAlphabetical] = useState(null)
    const [filterText, setFilterText] = useState('');
    
    
    const [displayPlayers, setDisplayPlayers] = useState(props.players);


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


        <div className='fixed left-0 w-full h-full flex justify-center bg-zinc-700'>

        {players && 
        <div className='relative top-10'>
            <input
                className=' left-9 p-2 w-60 mx-1 my-2 text-sm rounded-sm'
                type="text"
                placeholder="Type to filter"
                value = {filterText}
                onChange={e => handleFilterChange(e)}
            />
            <article className= " overflow-auto h-[500px] w-[800px] text-sm font-medium text-white bg-gray-700 border-gray-500 rounded-lg">
            <h1 className='p-3 text-center  text-lg border-t border-r border-l border-gray-400 rounded-t'>Leaderboard</h1>
            <Reorder.Group values={displayPlayers} onReorder={setDisplayPlayers} drag={false}>
                <table className="min-w-full leading-normal">
                    <thead className='p-1 text-center '>
                        <tr>
                            <th className='p-1 text-center border border-gray-400'>
                            <button className=' px-3'onClick={onNameOrder} >Name </button></th>
                            <th className='p-1 text-center border border-gray-400 '>Points
                            {isDescending? <button className=' px-3' onClick={onPointOrderAsc}><BsArrowUpSquare/></button> : 
                            <button className=' px-3'onClick={onPointOrderDes} ><BsArrowDownSquare/></button>}
                             </th>
                            
                        </tr>
                        
                    </thead>
                    <tbody>
                        {displayPlayers.map(player =>
                            <Reorder.Item as="tr" key ={player.id} value={player} drag={false} className='bg-gray-600'>
                                <td className="p-4 text-left border font-normal border-gray-400">
                                    <div className='flex'>
                                        <Delete className="pl-5" onDeleteButton = {onDelete} playerId = {player.id}/>
                                        
                                        <InertiaLink href={route('player.view', { id: player.id })} className ="pl-5">{player.name}</InertiaLink>
                                        
                                    </div>
                                </td>
                                <td className="p-2 text-center border border-gray-400">
                                    <div >
                                        <Increment onIncrement ={onUpdate} playerId ={player.id}/>
                                        <p className='pb-1.5'>{player.points}</p>
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
            <InertiaLink href={route('player.create')} className='absolute top-full right-2 text-center py-2 text-sm border rounded-lg bg-white w-32'
            type='button'>
                Create Player
            </InertiaLink>
        </div>
        </div>}
    </div>

    );
    
}

