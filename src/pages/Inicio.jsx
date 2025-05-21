import React from 'react';
import Paciente from '../models/Paciente';

function Inicio() {
  const paciente = new Paciente("Ana López", 35, "Hipertensión");

  return (
    <div>
      <h2>Historial Clínico</h2>
      <p>{paciente.resumen()}</p>
    </div>
  );
}

export default Inicio;