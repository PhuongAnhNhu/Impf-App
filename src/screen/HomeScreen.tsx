import React from 'react';
import { Table } from 'react-bootstrap';
import appointments from '../dummydata/appointments';

const HomeScreen = () => {
    return (
        <div>
            {/* Anzeige nur Termin für einen Tag */}
            <h1>Termin von heute:</h1>
            <Table striped bordered hover>
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
                                <td>{appointment.datum}</td>
                                <td>{appointment.datum}</td>
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
