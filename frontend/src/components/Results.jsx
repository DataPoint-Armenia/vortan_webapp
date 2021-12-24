import React from "react";
import Table from 'react-bootstrap/Table';
import { ResultsContext } from "./InputForm";

import './sass/style.scss'

export default function Results() {
    const { results } = React.useContext(ResultsContext)

    return (
        <div className="results">
            {results.map((result, index) => 
            <Table striped bordered hover>
                <thead>
                    <tr>
                        <th>Suggest</th>
                        <th>Distance</th>
                        <th>Score</th>
                        <th>POS Tags</th>
                    </tr>
                </thead>
                <tbody>
                    {result.map((sugg, index) => (
                        <tr key={index}>
                            <td>{sugg.term}</td>
                            <td>{sugg.distance}</td>
                            <td>{sugg.score}</td>
                            <td>{sugg.tags.join(', ')}</td>
                        </tr>
                    ))}
                </tbody>
            </Table>
            )}
        </div>
    )
}
