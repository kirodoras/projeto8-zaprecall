export default function HomeScreen({changePage}) {
    return (
        <div className="homeScreen">
            <img src="assets/logo1.png" alt="Logo ZapRecall" />
            <h1>ZapRecall</h1>
            <button type="button" onClick={changePage}>Iniciar Recall!</button>
        </div>
    );
}