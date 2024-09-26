import SideBar from "./pages/SideBar"
import Header from "./pages/Header"
import DashMenu from "./pages/DashMenu"
import "./App.css"
function App() {
  return (
    <>
      <div className="app-external">
          <SideBar />
        <div className="app-internal">
          <Header />
          <DashMenu />
        </div>
      </div>
    </>
  )
}

export default App
