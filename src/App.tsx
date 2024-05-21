import './App.css'
import Sidebar from './components/Sidebar'
import Middle from './components/Middle'
import RightBar from './components/RightBar'

function App() {

  return (
    <div className='app'>
      <Sidebar />
      <Middle />
      <RightBar />
    </div>
  )
}

export default App
