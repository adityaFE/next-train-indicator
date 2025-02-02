import React from "react";
import { TimeDisplay } from "./styles";

interface VirtualTimeProps {
    virtualTime: number;
}

const VirtualTimeDisplay: React.FC<VirtualTimeProps> = ({ virtualTime }) => {
    return (
        <TimeDisplay>
            Current Time: {Math.floor(virtualTime / 60)}:{(virtualTime % 60).toString().padStart(2, "0")}
        </TimeDisplay>
    );
};

export default VirtualTimeDisplay;
