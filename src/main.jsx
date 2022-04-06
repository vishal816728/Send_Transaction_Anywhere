import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'
import '../node_modules/bulma/css/bulma.min.css'
import {TransactionsProvider} from "../src/context/TransactionContext.jsx"

ReactDOM.render(
  <TransactionsProvider>
  <React.StrictMode>
    <App />
  </React.StrictMode>
  </TransactionsProvider>,
  document.getElementById('root')
)
