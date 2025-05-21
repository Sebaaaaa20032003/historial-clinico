import React, { useState } from 'react';
import InputCampo from '../components/InputCampo';
import { Button, Link, Box, Typography } from '@mui/material';

export default function Login({ onLoginExitoso }) {
  const [usuario, setUsuario] = useState('');
  const [password, setPassword] = useState('');

  const manejarSubmit = (e) => {
    e.preventDefault();
    // Aquí validas usuario y password (por ahora simulamos éxito)
    if (usuario.trim() !== '') {
      onLoginExitoso(usuario);
    }
  };

  return (
    <Box sx={{ maxWidth: 350, margin: 'auto', mt: 10 }}>
      <Typography variant="h4" mb={2}>Iniciar sesión</Typography>
      <form onSubmit={manejarSubmit}>
        <InputCampo
          etiqueta="Usuario"
          tipo="text"
          valor={usuario}
          onChange={(e) => setUsuario(e.target.value)}
        />
        <InputCampo
          etiqueta="Contraseña"
          tipo="password"
          valor={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <Button type="submit" variant="contained" fullWidth sx={{ mt: 2 }}>
          Entrar
        </Button>
      </form>

      <Link href="/sobre" display="block" mt={3} textAlign="center">
        Sobre nuestra clínica
      </Link>
    </Box>
  );
}
