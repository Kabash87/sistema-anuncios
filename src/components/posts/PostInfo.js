/**Detalles de la Publicacion */
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { Navigate, useParams } from "react-router-dom";
import {getPost} from './service';

const PostPage = () => {
    const params = useParams();
    const [error, setError] = useState(null);
    const [post, setPost] = useState(null);

    useEffect(() => {
        getPost(params.postId)
        .then(post => setPost(post))
        .catch( error => setError(error));
    }, [params.postId]);

    if(error?.status === 404){
        return <Navigate to="/404"/>
    }

    /**Detalles de la publicacion impresa en la Página */
return (
   <div>
    <center><h3> 
        Detalles de la publicacion n° {params.postId}</h3>
        <Link to="/"><button>Regresar al Inicio</button></Link> 
        </center><br/>
        
    <div className="posts2">
        {post && <div className="postInfo">
        <img src={post.img} alt='Producto' width="240px" className='ProductImg'/>
        <div className="tagSell"><p>{post.sell}</p></div>
            <h3>{post.content}</h3><div className="priceInfo"><p>{post.price}€</p></div>
            <p>{post.info}</p>
            
            <h4>Promocionado por el Usuario: {post.username}</h4>
            <div className="tagInfo"><p>{post.tag}</p></div>
            </div>} 
   </div> <br/><br/><br/>
</div>
);
};

export default PostPage;