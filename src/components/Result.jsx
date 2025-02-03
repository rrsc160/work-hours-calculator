import React from "react";

export default function Results({ outTime, startTime, totalHours }) {
    return (
        <div className="mt-4 bg-light p-3 rounded text-center border">
            <h3 className="fs-5 fw-semibold">Results</h3>
            <p>Your out time will be: <span className="fw-bold text-primary">{outTime}</span></p>
            <p>Start Time: {startTime}</p>
            <p>Total Hours Worked: {totalHours} hours</p>
        </div>
    );
}
