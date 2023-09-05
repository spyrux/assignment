import React, { useEffect , useState} from "react";
import { InertiaLink} from '@inertiajs/inertia-react';



export default function Error(props){



    return (
        <div>
            
            
            <div className='fixed top-40 left-[500px] w-full h-full items-center justify-center'>
                <InertiaLink className="text-sm" to={`/`}>Back</InertiaLink>
                <p>You have encountered an error!</p>
                <p>{props.error}</p>
                
            </div>
        </div>
    );
    
}