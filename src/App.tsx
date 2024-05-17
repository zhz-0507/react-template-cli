import React from "react"
import { useRoutes } from 'react-router-dom';
import routes from '@/router';

function App() {
  const page = useRoutes(routes)
  return (
    <div className="App">
      { page }
    </div>
  )
}
export default App
