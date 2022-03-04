import 'assets/styles/index.css'
import App from './routes/'
import { BrowserRouter as Router } from 'react-router-dom'

import ReactDOM from 'react-dom'

ReactDOM.render(<Router><App/></Router>, document.getElementById('root'))
