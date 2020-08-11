import { API_PREFIX } from './../../utils/Constants.ts';
import { Router } from 'https://deno.land/x/oak/mod.ts';
import { getUsers, getUser, addUser, updateUser, deleteUser } from "../../controllers/index.ts";


const router = new Router()

router.get(`${API_PREFIX}/users`, getUsers)
    .get(`${API_PREFIX}/user/:id`, getUser)
    .post(`${API_PREFIX}/user`, addUser)
    .put(`${API_PREFIX}/user`, updateUser)
    .delete(`${API_PREFIX}/user/:id`, deleteUser)

export { router as userRouter }