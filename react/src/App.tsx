import 'assets/styles/App.scss'
import Template from "./Template"
import {Outlet} from "react-router-dom"




const App:React.FC = (props) => {
  return (
    <div className="App">
      <Template />
      <Outlet />
    </div>
  );
}

export default App;
