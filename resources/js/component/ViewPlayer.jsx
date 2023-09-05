import React from "react";
import { InertiaLink} from '@inertiajs/inertia-react';
import route from "ziggy-js";



export default function ViewPlayer(props){

    const player = props.player;

  

    return (
        <div>
            
            
            <div className="flex items-center justify-center min-h-screen bg-zinc-700">
                <InertiaLink className="text-sm text-white relative bottom-28 left-8" href={route('player.index')}>Back</InertiaLink>
                <ul className="items-center justify-center w-[300px] text-xl text-white bg-gray-700 border-gray-500 border-collapse">
                    <li className="p-2 border rounded border-slate-200">Name : {player.name}</li>
                    <li className="p-2 border rounded border-slate-200">Age : {player.age}</li>
                    <li className="p-2 border rounded border-slate-200">Address : {player.address}</li>
                    <li className="p-2 border rounded border-slate-200">Points : {player.points}</li>
                </ul>
            </div>
        </div>
    );
    
}