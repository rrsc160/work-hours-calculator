import React, { useState } from "react";
import BreakTimeInput from "./BreakTimeInput";
import Results from "../components/Result";
import nexuclink from '../components/assets/nexuclink-logo.png';

export default function WorkHourCalculator() {
    const [startTime, setStartTime] = useState("");
    const [totalHours, setTotalHours] = useState("");
    const [breaks, setBreaks] = useState([{ start: "", end: "" }]);
    const [outTime, setOutTime] = useState("");

    const addBreak = () => setBreaks([...breaks, { start: "", end: "" }]);

    const handleBreakChange = (index, field, value) => {
        const newBreaks = [...breaks];
        newBreaks[index][field] = value;
        setBreaks(newBreaks);
    };

    const calculateOutTime = () => {
        if (!startTime || !totalHours) return;

        let [hours, minutes] = startTime.split(":").map(Number);
        let totalMinutes = hours * 60 + minutes + parseFloat(totalHours) * 60;

        breaks.forEach(({ start, end }) => {
            if (start && end) {
                let [sh, sm] = start.split(":").map(Number);
                let [eh, em] = end.split(":").map(Number);
                totalMinutes -= (eh * 60 + em) - (sh * 60 + sm);
            }
        });

        let outHours = Math.floor(totalMinutes / 60) % 24;
        let outMinutes = totalMinutes % 60;
        setOutTime(`${String(outHours).padStart(2, "0")}:${String(outMinutes).padStart(2, "0")}`);
    };

    return (
        <div className="d-flex justify-content-center align-items-center min-vh-100 bg-light">
            <div className="bg-white shadow p-4 rounded w-100 border" style={{ maxWidth: "400px" }}>
                {/* <h4 className="text-center text-primary fw-bold mb-4">Work Hour Calculator</h4> */}
                <div className="logo_img" >
                <img style={{width:'68%',padding:'10px',paddinBottom:'16px'}}src={nexuclink} alt="company-logo"/>
                </div>

                <div className="mb-3">
                    <label className="form-label fw-medium">Start Time (HH:MM):</label>
                    <input 
                        type="time" 
                        value={startTime} 
                        onChange={(e) => setStartTime(e.target.value)} 
                        className="form-control"
                    />
                </div>

                <div className="mb-3">
                    <label className="form-label fw-medium">Total Hours Worked:</label>
                    <input 
                        type="number" 
                        value={totalHours} 
                        onChange={(e) => setTotalHours(e.target.value)} 
                        className="form-control"
                    />
                </div>

                <BreakTimeInput breaks={breaks} handleBreakChange={handleBreakChange} addBreak={addBreak} />

                <div className="d-flex justify-content-center mt-4">
                    <button onClick={calculateOutTime} className="btn btn-primary">Calculate Out Time</button>
                </div>

                {outTime && <Results outTime={outTime} startTime={startTime} totalHours={totalHours} />}
            </div>
        </div>
    );
}
