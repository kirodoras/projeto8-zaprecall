import React from 'react';
import './styles/reset.css';
import './styles/style.css';
import HomeScreen from './components/HomeScreen';
import PlayScreen from './components/playscreen/PlayScreen';

export default function App() {
    //LOGIC
    const [page, setPage] = React.useState(false);

    //UI
    return (
        <>
            {page ? <PlayScreen/> : <HomeScreen changePage = {() => setPage(true)}/>}
        </>
    );
}