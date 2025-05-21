import React, { useState } from 'react';
import Login from './pages/Login';          // Tu página Login
import MenuUsuario from './components/MenuUsuario';

export default function App() {
  const [usuario, setUsuario] = useState(null);

  const manejarLoginExitoso = (nombreUsuario) => {
    setUsuario(nombreUsuario);
  };

  const manejarCerrarSesion = () => {
    setUsuario(null);
  };

  return (
    <>
      {!usuario ? (
        <Login onLoginExitoso={manejarLoginExitoso} />
      ) : (
        <MenuUsuario usuario={usuario} onCerrarSesion={manejarCerrarSesion} />
      )}
    </>
  );
}
