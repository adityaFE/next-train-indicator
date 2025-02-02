import React from "react";
import { Train } from "../../utils/trainUtils";
import { List, TrainArrival, TrainDestination } from "./styles";

interface TrainListProps {
    trains: Train[];
}

const TrainList: React.FC<TrainListProps> = ({ trains }) => {
    return (
        <List>
            {trains.map((train, index) => (
                <li key={index}>
                    <TrainDestination>
                        <span>
                            {train.destination}
                        </span>
                        <span>
                            -
                        </span> 
                    </TrainDestination>
                    <TrainArrival>
                     {train.arrivalIn} min
                    </TrainArrival>             
                </li>
            ))}
        </List>
    );
};

export default TrainList;
