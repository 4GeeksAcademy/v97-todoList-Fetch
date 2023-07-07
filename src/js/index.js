
import React from 'react'
import {createRoot} from 'react-dom/client';

import "../styles/index.css";


import Router from './component/Router.jsx'

const container = document.getElementById('app');
const root = createRoot(container);
root.render(<Router/>);


