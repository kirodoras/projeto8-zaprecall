import ReactDOM from 'react-dom';
import HomeScreen from './components/HomeScreen';
import PlayScreen from './components/PlayScreen';

function App() {
    return (
        <>
            <HomeScreen />
            <PlayScreen/>
        </>
    );
}

ReactDOM.render(<App />, document.querySelector(".root"));