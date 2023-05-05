import { library } from '@fortawesome/fontawesome-svg-core';
import * as solid from '@fortawesome/free-solid-svg-icons';
import 'bulma/css/bulma.css';
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './containers/App';

library.add(
    solid.faKey,
    solid.faLock,
    solid.faUnlock,
    solid.faRotate,
    solid.faClipboard,
    solid.faRightLong,
    solid.faEye,
    solid.faEyeSlash,
    solid.faEnvelope,
    solid.faEnvelopeOpen,
    solid.faXmark,
);

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);

root.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>,
);
