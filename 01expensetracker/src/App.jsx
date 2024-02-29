import { Header } from './components/Header'
import { Balance } from './components/Balance'
import { IncomeExpenses } from './components/IncomeExpenses'
import { TransactionList } from './components/TransactionList'
import { Addtransaction } from './components/AddTransaction'
import './App.css'

function App() {


  return (
    <>
     <Header/>
     <div className="container">
      <Balance/>
      <IncomeExpenses/>
      <TransactionList/>
      <Addtransaction/>
     </div>
    </>
  )
}

export default App
