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

interface DeleteUserPayload {
    id:number;
}

interface PutUserPayload {
    id:number;
    username?: string;
    password?: any;
    isAdmin?: boolean;
    firstname?: string;
    lastname?: string;
}

interface Patient {
    id: number;
    insurance: string;
    kkv: string;
    firstname: string;
    lastname: string;
    dateOfBirth: Date;
    gender: string;
    address: string;
    zip: string;
    city: string;
}

interface PatientsState {
    patients: Patient[];
    loading: boolean;
}

interface PutPatientPayLoad {
    id: number;
    insurance?: string;
    kkv?: string;
    firstname?: string;
    lastname?: string;
    dateOfBirth?: string;
    gender?: string;
    address?: string;
    zip?: string;
    city?: string;
}
interface DeletePatientPayload {
    id:number;
}

interface Appointment {
    id:number;
    date:Date;
    vaccine_dose: string;
    patient: string;
    user: number;
}

interface AppointmentsState {
    appointments: Appointment[];
    loading: boolean;
}

interface VaccineDose {
    id: number;
    createAt: Date;
    expiresAt: Date;
    vaccine: string;
}

interface VaccineDosesState {
    vaccineDoses: VaccineDose[];
    loading: boolean;
}