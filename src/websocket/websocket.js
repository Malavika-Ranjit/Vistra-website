import { useDispatch } from "react-redux";
import { updateProgress, updateReport } from "../slice/progressSlice";
// import { useRef } from "react";
let socket = null;   

export const useWebSocketTask = (deviceId,handleScanCompleted) => {
    // const wsRef = useRef(null);
    const dispatch = useDispatch();

    const startTask = () => {
        // const ws = new WebSocket(`ws://10.107.190.46:8000/ws/frontend/${deviceId}`);
        // wsRef.current = ws;
        if (socket) {
    console.log("Socket already running");
    return;
}

socket = new WebSocket(`ws://10.107.190.46:8000/ws/frontend/${deviceId}`);


        socket.onopen = () => {
            console.log("Connected");
            ws.send(JSON.stringify({ event: "START_SCAN" })); // FIX: stringify
        };

        socket.onmessage = (event) => {
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

            if (data.event == "FILE_RESULT"){
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

                socket.close();
            }   
        };

        ws.onclose = () => {
            console.log("Disconnected");
        };

        socket.onerror = (err) => {
            console.error(err);
        };
    };

    return { startTask };
};