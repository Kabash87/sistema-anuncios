
import client from "../../api/client";

const postsURL = '/api/posts'

export const getLastestPosts = () =>{
  return client.get(postsURL)
}

/**Obtener los Posts */
export const getPost = postId => {
  const url = `${postsURL}/${postId}`;
  return client.get(url);
}

/**Crear nuevas Publicaciones */
export const createPost = post => {
  const url = postsURL;
  return client.post(url, post);
}