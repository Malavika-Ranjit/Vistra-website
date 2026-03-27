import { useDispatch } from "react-redux";
import { updateProgress, updateReport } from "../slice/progressSlice";
import { useRef } from "react";

export const useWebSocketTask = (deviceId,handleScanCompleted) => {
    const wsRef = useRef(null);
    const dispatch = useDispatch();

    const startTask = () => {
        const ws = new WebSocket(`ws://localhost:8000/ws/frontend/${deviceId}`);
        wsRef.current = ws;

        ws.onopen = () => {
            console.log("Connected");
            ws.send(JSON.stringify({ event: "START_SCAN" })); // FIX: stringify
        };

        ws.onmessage = (event) => {
            const data = JSON.parse(event.data);
            console.log("message from backend:",data)
            if (data.event === "SCAN_PROGRESS") {
                dispatch(updateProgress({ progress: data.value }));
                console.log("progress:", data.value); // FIX
            }

            if (data.event === "SCAN_COMPLETED") {
                handleScanCompleted(); //closure to handle completion
                console.log("SCAN COMPLETED")
            }

            if (data.event == "FILE_COUNT"){
                console.log("File result reached");
                console.log("DATA: ", data.value)
                const totalThreats = data.value.totalThreats;
                const low = data.value.safe;
                const medium = data.value.quarantine;
                const high = data.value.deletion;
                dispatch(updateReport({
                    totalThreats:totalThreats, 
                    low: low, 
                    medium: medium, 
                    high: high
                }))

                ws.close();
            }   
        };

        ws.onclose = () => {
            console.log("Disconnected");
        };

        ws.onerror = (err) => {
            console.error(err);
        };
    };

    return { startTask };
};