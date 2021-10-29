interface User {
    id: number;
    username: string;
    firstname: string;
    lastname: string;
    isAdmin: number;
}

interface UsersState {
    users: User[];
    loading: boolean;
    loggedIn: boolean;
}

interface LoginPayload {
    username: string;
    password: string;
}

interface PostUserPayload {
    username: string;
    password: any;
    isAdmin: boolean;
    firstname: string;
    lastname: string;
}

interface UserListResponse {
    success: boolean;
    collection: User[];
}