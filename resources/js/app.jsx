import './bootstrap';

import ReactDOM  from 'react-dom/client'
import {BrowserRouter as Router, Routes, Route, Link} from 'react-router-dom';
import HelloReact from './component/helloreact';
import CreatePlayer from './component/CreatePlayer';

ReactDOM.createRoot(document.getElementById('app')).render(
    <HelloReact></HelloReact>
);
