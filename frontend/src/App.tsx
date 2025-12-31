import Chatbot from './components/chatbot'
import Navbar from './components/Navbar'
import Profile from './components/Profile'

function App() {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-100">
      <Navbar />

      <main className="mx-auto max-w-screen-2xl px-4 sm:px-6 py-5">
        <div className="mt-4 flex flex-col lg:flex-row lg:items-stretch lg:justify-center gap-8 lg:gap-10">
          <div className="w-full lg:w-[30%]">
            <Profile />
          </div>
          <div className="w-full lg:w-[50%]">
            <Chatbot />
          </div>
        </div>
      </main>
    </div>
  )
}

export default App
