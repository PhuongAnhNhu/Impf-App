import React from 'react';
import { Table } from 'react-bootstrap';
import appointments from '../dummydata/appointments';
import moment from 'moment';

const HomeScreen = () => {
    return (
        <div className="mt-3">
            {/* Anzeige nur Termin für einen Tag */}
            <h3>Termin von heute:</h3>
            <Table className="mt-3" striped bordered hover>
                <thead>
                    <th></th>
                    <th className="text-center">Versicherungsnummer</th>
                    <th className="text-center">Name</th>
                    <th className="text-center">Vorname</th>
                    <th className="text-center">Datum</th>
                    <th className="text-center">Uhrzeit</th>
                    <th className="text-center">Artz</th>
                </thead>
                <tbody>
                    {appointments.map((appointment, index) => {
                        return (
                            <tr key={appointment.impfterminId}>
                                <td>{index + 1}</td>
                                <td>{appointment.versicherungsnummer}</td>
                                <td>{appointment.nachname}</td>
                                <td>{appointment.vorname}</td>
                                <td>{moment.unix(Number(appointment.datum)).format("DD-MM-YYYY")}</td>
                                <td>{moment.unix(Number(appointment.datum)).format("HH:mm")}</td>
                                <td>{appointment.arzt}</td>
                            </tr>
                        );
                    })}
                </tbody>
            </Table>
            <h1>Anzahl des Impfstoff: </h1>
        </div>
    );
};

export default HomeScreen;
