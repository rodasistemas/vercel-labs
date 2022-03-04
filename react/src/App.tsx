import './App.scss';
import {Header, Sidebar, Container} from "./components/Layout";

const App:React.FC<any> = () => {
  return (
    <div className="App">
      <Header className="App-header">

        AppLayout Header
      </Header>
      <Sidebar className="App-sidebar left" title="AppLayout">
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
      <Container className="App-container left">
          AppLayout Container
      </Container>
    </div>
  );
}

export default App;
