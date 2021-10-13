interface NewUserForm {
    vorname: string;
    nachname:string;
    geschlecht:string;
    geburtsdatum:Date;
    password:string;
}

interface NewPatientForm {
    vorname: string;
    nachname:string;
    versicherungsnummer:number;
    geschlecht:string;
    geburtsdatum:Date;
    strasse:string;
    plz:number;
    ort:string;
}

interface LoginScreenProps {
    username?: string;
    password: string;
} 

interface ListUsersProps {
    nachname:string;
    vorname:string;
    userName:string;
    password:string;
    istAdmin:boolean;
}


interface ListPatientsProps {
    vorname: string;
    nachname:string;
    versicherungsnummer:number;
    kvNummer:number;
    geschlecht:string;
    geburtsdatum:Date;
    strasse:string;
    plz:number;
    ort:string;
}

interface ImpfstoffeProps {
    id:string;
    bezeichnung:string;
    dosierung:number;
    hersteller:Date;
    zulassungsdatum: Date;
}


interface ListAppointmentsProps {
    vorname: string;
    nachname:string;
    versicherungsnummer:number;
    datum: Date;
    artz:string;
}

interface Impfstoffsform {
    bezeichnung:string;
    dosierung:number;
    hersteller:Date;
    zulassungsdatum: Date;
    menge:number;
}