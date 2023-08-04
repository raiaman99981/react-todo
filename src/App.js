import WelcomeComponent from './components/WelcomeComponent';
import LoginComponent from './components/LoginComponent';
import ErrorComponent from './components/ErrorComponent';
import ListElement from './components/ListElement';
import Header from './components/Header';
import Footer from './components/Footer';
import Logout from './components/Logout';
import { BrowserRouter,Routes,Route, Navigate } from 'react-router-dom';
import AuthProvider from './components/AuthProvider';
import { useAuth } from './components/AuthProvider';

function App() {
  
  function AuthRoute({children}){
      
      const {login,setLogin}=useAuth();
      if(login){
         return  children
      }
      return <Navigate to="/login"/>
  }
  const auth=useAuth();
  return (

    <div className="App">
    <AuthProvider>
    <Header/>
    <BrowserRouter>
    <Routes>
    <Route path='/' element={ <LoginComponent/>}/>
     <Route path='login' element={ <LoginComponent/>}/>
    
    <Route path="/login/welcome/:username" element={  <AuthRoute><WelcomeComponent /></AuthRoute>}/>
    <Route path="todo" element={<AuthRoute> <ListElement/></AuthRoute>}/>
     <Route path="logout" element={ <AuthRoute><Logout/></AuthRoute>}/>
     <Route path="*" element={ <ErrorComponent/>}/>
     </Routes>
    </BrowserRouter>
    <Footer/>
    </AuthProvider>
    </div>
  );
}

export default App;
