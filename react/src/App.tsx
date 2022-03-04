import './App.scss';
import {Header, Sidebar} from "./components/Layout";

const App:React.FC<any> = () => {
  return (
    <div className="App">
      <Header className="App-header">

        React
      </Header>
      <Sidebar className="App-sidebar" title="Menu">
          <ul>
              <li>Item</li>
              <li>Item</li>
              <li>Item</li>
              <li>Item</li>
              <li>Item</li>
              <li>Item</li>
              <li>Item</li>
              <li>Item</li>
              <li>Item</li>
              <li>Item</li>
              <li>Item</li>
              <li>Item</li>
              <li>Item</li>
          </ul>
      </Sidebar>
    </div>
  );
}

export default App;
