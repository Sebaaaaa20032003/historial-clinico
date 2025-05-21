import React, { useState } from 'react';
import {
  Box,
  Button,
  Container,
  Typography,
  Link as MuiLink,
  Paper,
} from '@mui/material';
import { Link } from 'react-router-dom';
import InputCampo from '../components/InputCampo';

function Login() {
  const [usuario, setUsuario] = useState('');
  const [contrasena, setContrasena] = useState('');

  const manejarEnvio = (e) => {
    e.preventDefault();
    alert(`Bienvenido ${usuario}`);
  };

  return (
    <Container maxWidth="sm">
      <Paper elevation={3} sx={{ padding: 4, marginTop: 10 }}>
        <Typography variant="h4" align="center" gutterBottom>
          Iniciar Sesión
        </Typography>
        <Box component="form" onSubmit={manejarEnvio} sx={{ mt: 2 }}>
          <InputCampo
            etiqueta="Usuario"
            tipo="text"
            valor={usuario}
            onChange={(e) => setUsuario(e.target.value)}
          />

          <InputCampo
            etiqueta="Contraseña"
            tipo="password"
            valor={contrasena}
            onChange={(e) => setContrasena(e.target.value)}
          />

          <Button
            type="submit"
            variant="contained"
            color="primary"
            fullWidth
            sx={{ mt: 2 }}
          >
            Ingresar
          </Button>
        </Box>
        <Typography align="center" sx={{ mt: 3 }}>
          <MuiLink component={Link} to="/sobre" underline="hover">
            Sobre nuestra clínica
          </MuiLink>
        </Typography>
      </Paper>
    </Container>
  );
}

export default Login;
