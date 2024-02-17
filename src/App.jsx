import './App.css';
import {Route, BrowserRouter as Router, Routes} from 'react-router-dom'; 
import CreatePlan from './pages/CreatePlan';
import ReadyPlan from './pages/ReadyPlan';
import Layout from './pages/layout';


function App() {

  return (
    <>
      <Router> 
        <Routes>
          <Route path = '/' element = {<Layout />}>
            <Route path = '/create-plan' element = {<CreatePlan />}/>
            <Route path = '/ready-plan' element = {<ReadyPlan />}/>
          </Route>
        </Routes>
      </Router>
    </>  
  )
}

export default App;
