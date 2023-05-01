import client, { removeAuthoHeader, setAuthoHeader } from "../../api/client";
import storage from "../../utils/storange";



/**Recoje el AcessToken para recordar usuario  */
export const login = credentials => {
  return client.post('/auth/login', credentials).then(({accessToken}) => {
  setAuthoHeader(accessToken);

    storage.set('auth', accessToken);
   
   })
};

/**Se borra el Token para cerrar sesion */
export const logout = () => {
  return Promise.resolve().then(() => {
    removeAuthoHeader();
    storage.remove('auth');
  });
};
