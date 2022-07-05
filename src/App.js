import logo from './logo.svg';
import './App.css';

const Tombol = (props) => {
  return <button onClick={() =>{
      return alert(`Anda telah mengklik Tombol ${props.name}`);
    }}>
      Tombol {props.name}
    </button>
}

const App = () => {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />

        <Tombol name="Kurnia"/>
        <Tombol name="Anti"/>
        <Tombol name="Zuli"/>
      </header>
    </div>
  );
}

export default App;
