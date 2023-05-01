/**Elementos Importados */
import PostsPage from './components/posts/postPage';
import './App.css';
import LoginPage from './components/auth/LoginPage';
import { useState } from 'react';
import NewPostPage from './components/posts/NewPostPage';
import { Route, Routes, Navigate, Link } from 'react-router-dom';
import PostInfo from './components/posts/PostInfo';
import { AuthContext } from './components/auth/context';

function App({isInitLogged}) {
  const [isLogged, setIsLogged] = useState(isInitLogged);


  /**Sesion Iniciada */
const handleLogin = () => {
  setIsLogged(true);
};
/**Se cierra la sesión */
const handleLogout = () => {
  setIsLogged(false);
};

/**Parte de Arriba, donde especifica la Pagina */
  return (
    <div className="App"> 
     <center>
      <h2>Sistema de Anuncios</h2>
      <h3>Mira nuestras nuevas publicaciones y publica tu contenido tambien</h3>
      <img src="https://scontent.fuio30-1.fna.fbcdn.net/v/t39.30808-6/343791525_1289536541912787_5020609242745881020_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=730e14&_nc_ohc=JQ_BAoGcj00AX8PyKXK&_nc_oc=AQmfRDPZ8PHvxHBlripBsT7L5VpN2QF0bYuza-xyUsBATiFRw-_tbBcMcLh2PqLv4zY&_nc_ht=scontent.fuio30-1.fna&oh=00_AfC7OzO2NQG6SUDs-RgEoIDS3_HFuzcbQ-s7RcWVPUfoPw&oe=6451DF4E" alt="Dibujo" width="800px"/>
      </center>
     <br/><hr/>
     {/**Comando que Inicia y cierra la sesion 
      * RUTAS PARA IR A LAS DEMAS PAGINAS
     */}
     <AuthContext.Provider
     value={{isLogged, onLogout : handleLogout, onLogin:handleLogin}}>
<Routes>
    {/**Para devolver al login */}
    <Route path='/login' element={<LoginPage onLogin={handleLogin}/>}/>
    
    {/**Para devolver al Inicio*/}
    <Route 
       path='/home' element={
       isLogged ? (
       <PostsPage onLogout={handleLogout}/>
       ):( <Navigate to="/login"/>) }/>

    {/**Para devolver a la publicacion*/}
    <Route 
       path='/home/:postId' element={
       isLogged ? (
       <PostInfo onLogout={handleLogout}/>
       ):(<Navigate to="/login"/>)}/>
       
{/**Para devolver al Nueva Publicacion*/}
    <Route
      path='/newpost' element={
      isLogged ? (
        <NewPostPage onLogout={handleLogout}/>
      ) : ( <Navigate to="/login"/> ) }/>

    {/**Para devolver a la Pagina de Error */}
    <Route path='*' element={<Navigate to ="/404"/> }/>
    {/**Para devolver al Inicio */}
    <Route path='/' element={<Navigate to ="/home"/> }/>

{/**Ruta larga de la Pagina de Error 404 (No encontrado) */}
    <Route path='/404' element={
    <div>
      <center><br/><br/>
      <h1>No se ha encontrado la pagina 😿</h1><h2>Error 404</h2>
      <img src="https://cdn.pixabay.com/photo/2020/11/18/16/31/cat-5755899_960_720.png" alt="Dibujo" width="220px"/>
      <br/><Link to="/"><button>Regresar al Inicio de la Pagina</button></Link><br/><br/>
      </center></div>}
      />
</Routes>
</AuthContext.Provider>  
{/** Footer de la Pagina Web*/}
     <footer>
      <hr/> <center>
      <Link to="/"><p>Regresar al Inicio</p></Link>
      <p>@ 2023 Sistema de Anuncios</p>
      <p>Hecho por Diego Hernández</p>
      </center>
     </footer>
    </div>
      
  );
}

export default App;

