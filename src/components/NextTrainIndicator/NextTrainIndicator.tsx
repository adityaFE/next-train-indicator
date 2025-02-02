import React, { useState, useEffect } from "react";
import TrainList from "../TrainList/TrainList";
import VirtualTimeDisplay from "../VirtualTimeDisplay/VirtualDisplay";
import { getUpcomingTrains, Train } from "../../utils/trainUtils";
import { Container,  NextTrainsText } from "./styles";

const NextTrainIndicator: React.FC = () => {
    const [virtualTime, setVirtualTime] = useState(300);
    const [trains, setTrains] = useState<Train[]>([]);

    useEffect(() => {
        const interval = setInterval(() => {
            setVirtualTime((prev) => (prev + 1) % 1440);
        }, 1000);
        return () => clearInterval(interval);
    }, []);

    useEffect(() => {
        setTrains(getUpcomingTrains(virtualTime));
    }, [virtualTime]);

    return (
        <Container>
            <NextTrainsText> Next Trains </NextTrainsText>
            <TrainList trains={trains} />
            <VirtualTimeDisplay virtualTime={virtualTime} />
        </Container>
    );
};

export default NextTrainIndicator;
