import './App.css';
import {Header, Sidebar} from "./components/Layout";

const App:React.FC<any> = () => {
  return (
    <div className="App">
      <Header className="App-header">

        React
      </Header>
      <Sidebar className="App-sidebar">Teste</Sidebar>
    </div>
  );
}

export default App;
