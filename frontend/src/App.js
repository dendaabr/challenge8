import { Routes, Route, BrowserRouter } from "react-router-dom"
import Home from "./components/Home"
import CreatePlayer from "./components/CreatePlayer"
import Swagger from "./components/Swagger"
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route>
            <Route path="/" element={<Home />} />
            <Route path="player/create" element={<CreatePlayer />} />
            <Route path="docs" element={<Swagger />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App