import React, { useState } from "react";

function Select() {
  const [mes, setMes] = useState("seleccione");

  return (
    <React.Fragment>
      <div className="container my-5">
        <div className="row">
          <div className="col-12 d-flex justify-content-center">
            <select
              className="form-select form-select-lg w-50 mb-3"
              aria-label=".form-select-lg example"
              onChange={(e) => {
                const selectMes = e.target.value;
                setMes(selectMes);
              }}
            >
              <option value="seleccione" selected>
                Seleccione un mes
              </option>
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
              <option value="5">5</option>
              <option value="6">6</option>
              <option value="7">7</option>
              <option value="8">8</option>
              <option value="9">9</option>
              <option value="10">10</option>
              <option value="11">11</option>
              <option value="12">12</option>
            </select>
            {mes}
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}

export default Select;
