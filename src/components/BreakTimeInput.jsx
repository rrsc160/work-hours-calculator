import React from "react";

export default function BreakTimeInput({ breaks, handleBreakChange, addBreak }) {
    return (
        <div className="mb-3">
            <label className="form-label fw-medium">Break Times (Optional):</label>
            {breaks.map((brk, index) => (
                <div key={index} className="d-flex gap-2 mb-2">
                    <label>Break Start:</label>
                    <input 
                        type="time" 
                        value={brk.start} 
                        onChange={(e) => handleBreakChange(index, "start", e.target.value)} 
                        className="form-control"
                    />
                    <label>Break End:</label>
                    <input 
                        type="time" 
                        value={brk.end} 
                        onChange={(e) => handleBreakChange(index, "end", e.target.value)} 
                        className="form-control"
                    />
                </div>
            ))}
            <button onClick={addBreak} className="btn btn-secondary mt-2">Add Another Break</button>
        </div>
    );
}
