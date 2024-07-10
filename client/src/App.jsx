import Header from "./components/Header"
import InputForm from "./components/InputForm"
import AllMemories from "./components/AllMemories"

function App() {

  return (
    <div className='h-screen w-full bg-slate-500 flex justify-center'>
      <div className="w-[80%] bg-slate-100 flex items-center flex-col">
        <Header />

        <div className="w-full flex justify-normal items-center">
          <AllMemories />
          <InputForm />
        </div>
      </div>
    </div>
  )
}

export default App
