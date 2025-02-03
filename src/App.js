import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import WorkHourCalculator from "./components/WorkHourCalculator";

export default function App() {
  return (
    <div className="d-flex justify-content-center align-items-center min-vh-100 bg-light">
      <WorkHourCalculator />
    </div>
  );
}



