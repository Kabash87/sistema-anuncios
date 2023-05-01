
import {Link, useNavigate} from 'react-router-dom';
import { createPost } from './service';

const  NewPostPage =  () => {
    const navigate = useNavigate ();
   
    //Se imprime el Usuario, el Producto, Compra o Venta, Informacion, Precio, Tag, Imagen
    

/**Evento que envia la publicacion dentro de la Base de Datos */
const handleSubmit = async event => {
    event.preventDefault();
    try {
        const post = await createPost({
       username: event.target.usuario.value,
       content: event.target.product.value,
       sell: event.target.flexRadio.value,
       info: event.target.info.value,
       price: event.target.price.value,
       tag: event.target.tag.value,
       img: event.target.img.value,
    });
    navigate(`/home/${post.id}`);
    } catch (error) {
        if (error.status === 401) {
            navigate('/login');
        }
    }
};
   return (
    <div className="formPost">
        <center>
        <Link to="/"><button>Regresar al Inicio</button></Link> 
        <h2>Crea una nueva publicacion</h2>
        <h3>Todo el mundo sabra sobre el, te lo aseguramos 😃</h3>
        <br/>
        </center>
        <form onSubmit={handleSubmit}>
        <center>
            {/**Input que especifica si es Compra o venta */}
            <div className='input'>
                 <div className='class1'>
                    <input type="radio" name='flexRadio' value="Compra" />
                    <label>Compra de un Producto</label>
                    </div> 
                 <div className='class1'>
                 <input type="radio" name='flexRadio' value="Venta"  checked/>
                    <label>Venta de un Producto</label>
                 </div>     
            </div>

            <div className="input1">
                <label>Nombre de Usuario: </label>
                <input type="text" name="usuario" className="input-post" placeholder="Ingresa tu nombre..." required/>
            </div>

            <div className="input1">
                <label>Nombre del Producto: </label>
                <input type="text" name="product" className="input-post" placeholder="¿Que vas a publicar?" required/>
            </div>

            <div className="input2">
                <label>Describe tu producto: </label>
                <textarea name="info" className="input-post" placeholder="Cuentanos más sobre el producto..." required></textarea>
            </div>

            <div className="input3">
                <label>Precio del Producto: </label>
                <input type="number" name="price" className="input-post" placeholder="¿Y cuanto cuesta?" required/>
            </div>

            <div className="input4">
                <label>Etiqueta: </label>
                <select name="tag" className="input-post" required>
                    <option selected disabled>Seleciona un Tag...</option>
                    <option value="Tecnologia">Tecnología</option>
                    <option value="Automotriz">Automotriz</option>
                    <option value="Hogar/Cocina">Hogar y Cocina</option>
                    <option value="Belleza">Belleza y Cuidado</option>
                    <option value="Mascotas">Para Mascotas</option>
                    <option value="Ropa">Ropa y Calzado</option>
                </select>
            </div>
        

            <div className="input5">
                <label>Imagen: </label>
                <input type="text" name="img" className="input-post" placeholder="Inserta el link de la imagen"/>
            </div>
            </center>
<center>
            <h5>*Inserta unicamente un link de una Imagen valida de Internet*</h5>
            <button type="submit">¡Publicar Ahora!</button></center>
        </form>
        </div>
        
    );
}

export default NewPostPage;