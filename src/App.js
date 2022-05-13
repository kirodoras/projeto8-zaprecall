import React from 'react';
import HomeScreen from './components/HomeScreen';
import PlayScreen from './components/PlayScreen';

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