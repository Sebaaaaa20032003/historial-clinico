import React from 'react';
import { TextField } from '@mui/material';

function InputCampo({ etiqueta, tipo, valor, onChange }) {
  return (
    <TextField
      label={etiqueta}
      type={tipo}
      fullWidth
      margin="normal"
      value={valor}
      onChange={onChange}
      required
    />
  );
}

export default InputCampo;
