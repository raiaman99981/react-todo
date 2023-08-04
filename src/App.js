import WelcomeComponent from './components/WelcomeComponent';
import LoginComponent from './components/LoginComponent';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
function App() {
  return (
    <div className="App">
    <BrowserRouter>
    <Routes>
    <Route path='/' element={ <LoginComponent/>}/>
     <Route path='login' element={ <LoginComponent/>}/>
     <Route path="welcome" element={ <WelcomeComponent/>}/>
     </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;
