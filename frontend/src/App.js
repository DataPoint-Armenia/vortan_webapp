import './App.scss';
import {Helmet} from "react-helmet";

import Main from "./components/Main";

function App() {
    return (
    <>
        <Helmet>
            <meta charSet="utf-8" />
            <title>Vortan Demo</title>
            <meta http-equiv="Content-Security-Policy" content="upgrade-insecure-requests" />
        </Helmet>
        <Main />
      </>
    );
}

export default App;
