
import { Header } from "./components/Header"
import { List } from "./components/List"
import { Task } from "./components/Task"


function App() {

  return (
    <div className="min-h-screen bg-gray-600">
      <Header/>
      <div className="p-8 md:px-[200px] lg:px-[352px]">
          <List/>
      </div>
      
    </div>
  )
}

export default App
