import {BrowserRouter as Router, Routes, Route, Link} from 'react-router-dom';
import Leaderboard from './Leaderboard';
import ViewPlayer from './ViewPlayer';
import CreatePlayer from './CreatePlayer';

export default function Index(){


    return (
        <Router>
            <Routes>
                <Route path='/' element={<Leaderboard/>}/>
                <Route path='/players/:playerId' element ={<ViewPlayer/>}/>
                <Route path='/players/create' element ={<CreatePlayer/>}/>
            </Routes>
        </Router>
    );
    
}