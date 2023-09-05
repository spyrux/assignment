import {React , useState } from "react";
import {Link} from '@inertiajs/inertia-react';
import { API_BASE_URL } from "../config";
import axios from "axios";
import route from "ziggy-js";
import { router } from "@inertiajs/react";

export default function CreatePlayer() {


    const headers = {
        'Content-Type':'application/json',
    };

    const [data, setData] = useState({
        name: '',
        age:'',
        address: '',
    });

    const handleInput = (event) => {
        setData({...data, [event.target.name] : event.target.value});

    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        
        try {
            const response = await axios.post(API_BASE_URL+`/players`, 
                data
            );

            if(response.status === 201){
                router.visit('/');
            
            }else{
                console.log("Failed to create user");
            }

        } catch (error) {
            console.error('Error:', error);
        }


    }


    return (
        <div className="min-h-screen bg-zinc-800">
        <main className =" fixed top-28 w-full left-96 h-full items-center justify-center text-sm text-white">
            <div className="relative ">
                <Link href = {route('player.index')}className="text-sm text-white absolute bottom-full py-2" >Back</Link>
            </div>
            <form
                className="bg-gray-700 shadow-lg rounded-md p-5 md:p-10 flex flex-col w-11/12 max-w-lg text-white font-medium"
                onSubmit={handleSubmit}
            >
                <label htmlFor="email" className="mb-5">
                    <span>Name</span>
                    <input
                        type="name"
                        name="name"
                        id="name"
                        onChange={handleInput}
                        className="w-full rounded border border-gray-300 bg-white p-3 shadow shadow-gray-100 mt-2 appearance-none outline-none text-neutral-800"
                        placeholder="Enter your name (max 255 Characters) "
                        required
                    />
                </label>
                <label htmlFor="password" className="mb-5">
                    <span>Age</span>
                    <input
                        type="age"
                        name="age"
                        id="age"
                        onChange={handleInput}
                        className="w-full rounded border border-gray-300 bg-white p-3 shadow shadow-gray-100 mt-2 appearance-none outline-none text-neutral-800"
                        placeholder="Enter your age (positive integers only)"
                        required
                    />
                </label>
                <label htmlFor="address" className="mb-5">
                    <span>Address</span>
                    <input
                        type="address"
                        name="address"
                        id="address"
                        onChange={handleInput}
                        className="w-full rounded border border-gray-300 bg-white p-3 shadow shadow-gray-100 mt-2 appearance-none outline-none text-neutral-800"
                        placeholder="Enter your address (max 255 Characters)"
                        required
                    />
                </label>
                <button type="submit" className="mt-5 py-3 border rounded-md text-white">Submit</button>
            </form>
        </main>
    </div>

    );

}