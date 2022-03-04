import './App.scss';
import {Header, Sidebar} from "./components/Layout";
import {Outlet} from "react-router-dom";
import Navlink from './routes/Navlink';



const App:React.FC<any> = () => {
  return (
    <div className="App">
      <Header className="App-header">

        AppLayout Header
      </Header>
      <Sidebar className="App-sidebar left" title="AppLayout">
          <Navlink links={[
              {name: 'home', url:'/'},
              {name: 'about', url:'about'}
          ]} />
      </Sidebar>
      <Outlet />
    </div>
  );
}

export default App;
