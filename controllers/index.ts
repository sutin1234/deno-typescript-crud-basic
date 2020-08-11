
import { USER_DATA_MOCK, IUser } from '../mock/user.mock.ts'

let users: IUser[] = USER_DATA_MOCK;

export const getUsers = ({ response }: { response: any }) => {
    response.body = users
}

export const getUser = ({ params, response }: { params: { id?: number }; response: any }) => {
    console.log(params);
    const user: IUser = searchUserById(params.id)
    if (user) {
        response.status = 200
        response.body = user
    } else {
        response.status = 404
        response.body = { message: `User: ${params.id} not found` }
    }
}

export const addUser = async ({ request, response }: { request: any; response: any }) => {
    const body = await request.body()
    const user: IUser = body.value
    users.push(user)
    response.body = { message: 'OK added' }
    response.status = 200
}

export const updateUser = async ({ params, request, response }: { params: { id?: number }; request: any; response: any }) => {
    let user: IUser | undefined = searchUserById(params.id)
    if (user) {
        const body = await request.body()
        const updateInfos: any = body.value
        user = { ...user, ...updateInfos }
        users = [...users.filter(user => user.id !== params.id), user]
        response.status = 200
        response.body = { message: 'OK updated' }
    } else {
        response.status = 404
        response.body = { message: `User not found` }
    }
}


export const deleteUser = ({ params, response }: { params: { id?: number }; response: any }) => {
    const userIndex = users.findIndex((user) => user.id == params.id)
    if (userIndex) {
        users.splice(userIndex)
    }
    response.body = { message: 'OK' }
    response.status = 200
}

export const searchUserById = (id: number): (IUser | undefined) => users.filter(user => user.id == id)[0]