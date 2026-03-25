import { useDispatch } from "react-redux";
import { updateProgress } from "../slice/progressSlice";
import { useRef } from "react";

export const useWebSocketTask = (deviceId) => {
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

            if (data.type === "done") {
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