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
interface PostPatientPayLoad {
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

interface PostAppointmentPayload {
    date: string;
    vaccine_dose: number;
    patient: number;
    user: number;
}

//Vaccine Dose
interface VaccineDose {
    id: number;
    createdAt: Date;
    expiresAt: Date;
    vaccine: number;
}


interface VaccineDosesState {
    vaccineDoses: VaccineDose[];
    vaccineDosesAssigned: VaccineDose[];
    vaccineDosesNotAssigned: VaccineDose[];
    loading: boolean;
}

interface PutVaccineDosePayload {
    id:number;
    createdAt: string;
    expiresAt: string
}

interface PostVaccineDosePayload {
    createdAt: string;
    expiresAt: string;
    vaccine: number;
}
//Vaccine
interface Vaccine {
    id: number;
    name: string;
    producer: string;
    dosage: string;
    approveAt: Date;
}
interface VaccinesState {
    vaccines: Vaccine[];
    loading: boolean;
}

interface Profile {
    username: string;
    firstname: string;
    lastname: string;
    isAdmin: Boolean;
}

interface ProfileState {
    profile: Profile;
    isLoggedIn:boolean;
    loading: boolean;
    initialLoaded:boolean;
}
