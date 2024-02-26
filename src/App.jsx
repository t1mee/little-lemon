import './App.css'

const App = () => (
    <Routes>
      <Route path = "/" element = {<Home />}/>
      <Route path = "/reservations" element = {<Reservations />}/>
    </Routes>
  )

export default App
