import './bootstrap';

import ReactDOM  from 'react-dom/client'

import HelloReact from './component/helloreact';
import CreatePlayer from './component/CreatePlayer';

ReactDOM.createRoot(document.getElementById('app')).render(
    <HelloReact></HelloReact>
);

ReactDOM.render(<CreatePlayer/>, document.getElementById('CreatePlayer'));