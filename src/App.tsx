import { Header } from './components/Header'
import { List } from './components/List'

function App() {
  return (
    <div className="min-h-screen bg-gray-600">
      <Header />
      <div className="p-8 md:px-[12.5rem] lg:px-[22rem]">
        <List />
      </div>
    </div>
  )
}

export default App
