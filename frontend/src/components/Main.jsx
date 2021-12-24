import React from "react";
import Params from "./Params"
import Header from "./Header";
import Alert from 'react-bootstrap/Alert';

import './sass/style.scss'

const Main = () => {
    return (
        <div className="main">
            <Header />
            <Alert variant="primary">
                The first request might take much longer than subsequent ones because it triggers
                the backend to wake up from hibernation.
            </Alert>
            <Params />
        </div>
    );
};

export default Main;
