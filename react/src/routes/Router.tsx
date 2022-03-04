import { Container } from '../components/Layout'
import { Route, Routes, BrowserRouter } from 'react-router-dom'
import App from "../App"

const Router:React.FC = (props) => {
  return (
    <BrowserRouter>
      <Routes>
          <Route
          path="/"
          element={<App/>}>
        <Route
          index
          element={<Container className="App-container left">Home</Container>}
        />
        <Route
          path="about"
          element={<Container className="App-container left">About</Container>}
        />
        <Route
          path="*"
          element={<Container className="App-container left">404</Container>}
        />


        </Route>
      </Routes>
    </BrowserRouter>
  )
}
export default Router
