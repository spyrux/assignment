import './bootstrap';

import ReactDOM  from 'react-dom/client'
import Index from './component/index'
import '../css/app.css'
import React from 'react';

ReactDOM.createRoot(document.getElementById('app')).render(

    <React.StrictMode>
        <Index></Index>
    </React.StrictMode>
    
);
