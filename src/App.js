import logo from './logo.svg';
import './App.css';
import Main from './Components/MainComponent';
function App() {
  let a={
    "abc":'hello',
  }
  return (
    <Main name={a}/>
  );
}

export default App;
