import React from 'react';
import { Box, Button, Typography } from '@mui/material';

export default function MenuUsuario({ usuario, onCerrarSesion }) {
  return (
    <Box sx={{ p: 3, maxWidth: 400, margin: 'auto', mt: 5, boxShadow: 3, borderRadius: 2 }}>
      <Typography variant="h5" gutterBottom>
        ¡Bienvenido, {usuario}!
      </Typography>

      <Button fullWidth variant="contained" sx={{ mb: 2 }}>
        Perfil
      </Button>

      <Button fullWidth variant="contained" sx={{ mb: 2 }}>
        Historial Clínico
      </Button>

      <Button
        fullWidth
        variant="outlined"
        color="error"
        onClick={onCerrarSesion}
      >
        Cerrar sesión
      </Button>
    </Box>
  );
}
