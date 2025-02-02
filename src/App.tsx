import React from "react";
import NextTrainIndicator from "./components/NextTrainIndicator/NextTrainIndicator";
import {MainContent} from "./styles";

const App: React.FC = () => {
    return (
        <MainContent>
            <NextTrainIndicator />
        </MainContent>
    );
};

export default App;
