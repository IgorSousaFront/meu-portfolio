import { useContext } from 'react'

import { Header } from '@/components/'
import { UserName } from '@/context'

import './App.css';

function App() {
  const { userName, setUserName } = useContext(UserName.UserNameContext);

  return (
    <div className="App">
      <Header name={userName} number={3} text="HAHAHAHAHA"  />
      <input onChange={e => setUserName(e.target.value)} />
    </div>
  )
}

export default App
