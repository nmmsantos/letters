import { HashRouter, Route, Routes } from 'react-router-dom';
import NewLetter from './NewLetter';

function App() {
    return (
        <HashRouter>
            <Routes>
                <Route path="/" element={<NewLetter />} />
            </Routes>
        </HashRouter>
    );
}

export default App;
