import WelcomeComponent from './components/WelcomeComponent';
import LoginComponent from './components/LoginComponent';
import ErrorComponent from './components/ErrorComponent';
import ListElement from './components/ListElement';
import Header from './components/Header';
import Footer from './components/Footer';
import Logout from './components/Logout';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import AuthProvider from './components/AuthProvider';
function App() {

  
  return (
    <div className="App">
    <AuthProvider>
    <Header/>
    <BrowserRouter>
    <Routes>
    <Route path='/' element={ <LoginComponent/>}/>
     <Route path='login' element={ <LoginComponent/>}/>
     <Route path="/login/welcome/:username" element={ <WelcomeComponent />}/>
     <Route path="todo" element={ <ListElement/>}/>
     <Route path="logout" element={ <Logout/>}/>
     <Route path="*" element={ <ErrorComponent/>}/>
     </Routes>
    </BrowserRouter>
    <Footer/>
    </AuthProvider>
    </div>
  );
}

export default App;
