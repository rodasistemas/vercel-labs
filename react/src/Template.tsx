import {Header, Sidebar} from "./components/Layout";
import Navlink from './routes/Navlink';



const Template:React.FC = () => {
  return (
    <>
      <Header className="App-header">

        AppLayout Header
      </Header>
      <Sidebar className="App-sidebar left" title="AppLayout">
          <Navlink links={[
              {name: 'Home', url:'/'},
              {name: 'About', url:'about'},
              {name: 'Nothing', url:'nothing'},
          ]} />
      </Sidebar>

    </>
  );
}

export default Template;
