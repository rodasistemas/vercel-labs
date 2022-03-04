import { Route, Routes } from 'react-router-dom'
import { lazy, Suspense } from 'react'
import {Loading} from "components/Layout"


const App = lazy(() => import('../App'))
const Home = lazy(() => import('components/Pages/Home'))
const About = lazy(() => import('components/Pages/About'))
const PageNotFound = lazy(() => import('components/Pages/PageNotFound'))
const Routers: React.FC = (props) => {
  return (


<Suspense fallback={<Loading />}>
        <Routes>
          <Route path="/" element={<App />}>


                <Route index element={<Home />} />
                <Route path="about" element={<About />} />
                <Route path="*" element={<PageNotFound />} />


          </Route>
        </Routes>
        </Suspense>


  )
}
export default Routers
