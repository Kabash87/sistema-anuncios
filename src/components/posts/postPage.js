/**Se importan los elementos para las publicaciones */
import './styles.css';
import {  useEffect, useState } from 'react';
import { getLastestPosts } from './service';
import { logout } from '../auth/service';
import { Link } from 'react-router-dom';


/**Logica de Inicio y Cierre de Sesion */
const PostsPage = ({onLogout}) => {
  const [isLoading, setIsLoading] = useState(true);
  const [posts, setPosts] = useState([]);

  const [query, setQuery] = useState('');
  const [query2, setQuery2] = useState('');

useEffect(() => {
  setIsLoading(true);
  getLastestPosts().then(posts => {setPosts(posts)
  setIsLoading(false)});
}, []);

/**Icono de carga de mientras se esta cargando */
if(isLoading){
<div><center><br/><br/><br/><br/><br/><br/><br/><br/>
  <p>Cargando...</p>
  </center></div>
}

/**Cierre de Sesion */
const handleClick = async () => {
  await logout();
  onLogout();
}
/**Filtro de Busqueda de Publicaciones */
const filterPosts = posts
   .filter(post => 
   (post.content ?? '').toUpperCase().startsWith(query.toUpperCase()),
).filter(
  post => 
   (post.tag ?? '').toUpperCase().startsWith(query2.toUpperCase()),
)


   return (
    <div className="postsPage">
       {/**Botones de Cierre de Sesion, y para publicar */}
<div className='botones'>
      <center>
      <Link to="/login"><button className='Logout' onClick={handleClick}>Cerrar Sesión</button></Link>
        <Link to="/newpost"><button>Publicar algo nuevo</button></Link>
      </center>
      </div>
      {/**Se imprimen todos los productos dentro de la Base de datos */}
      { !!posts.length ? ( 
       <>
    <div className='Buscador'> {/**Input de Busqueda */}
       <label>Buscar: <input type="text" placeholder='Escribe y busca aqui...' className='buscador-input' value={query}
       onChange={event => setQuery(event.target.value)}/>  

    <select name="tag" className="input-post2" onChange={event => setQuery2(event.target.value)}>
       <option value="" selected >Todo</option>
       <option value="Tecnologia">Tecnología</option>
       <option value="Automotriz">Automotriz</option>
       <option value="Juguetes">Juguetes</option>
       <option value="Hogar/Cocina">Hogar y Cocina</option>
       <option value="Belleza">Belleza y Cuidado</option>
       <option value="Mascotas">Para Mascotas</option>
       <option value="Ropa">Ropa y Calzado</option>
   </select>
   
   </label>
    </div>
     <ul>
        {filterPosts.map( post => (
        <div className="posts1">
          <li key={post.id}>
            <Link to={`/home/${post.id}`}>
            <img src={post.img} alt='Producto' width="230px" className='ProductImg'/>
            <div className="tagSell"><p>{post.sell}</p></div>
            <h3>{post.username}</h3>
            <p> {post.content}</p>
            <p>{post.info}</p>
            <div className="space">
            <div className="priceInfo"><p>{post.price}€</p></div>
            <div className="tagInfo"><p>{post.tag}</p></div>
            </div>
            </Link>
         </li>
        </div>
        ))}
        <br/> </ul>
        </>
          ) : (
            <>
            {/**Frase de Error si no se ha encontrado ningun elemento */}
            <br/><center> <img src="https://www.pngarts.com/files/8/Chibi-Anime-Download-PNG-Image.png" alt="Dibujo" width="220px"/>
              <h3>¡WoW! Esto se ve muy vacio por aqui...</h3>
              <Link to="/newpost"> <button>¿No hay nada? Crea la primera publicacion</button></Link>
              <br/><br/></center>
            </>
            )}
      </div>
)};

export default PostsPage;