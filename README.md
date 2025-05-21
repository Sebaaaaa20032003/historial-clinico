
# 🏥 Aplicación Web: Historial Clínico de Pacientes

Aplicación web construida con React + Vite para gestionar el historial clínico de pacientes. Permite iniciar sesión, acceder a información médica y navegar por diferentes secciones. Actualmente solo frontend.

---

## 🚀 Tecnologías utilizadas

- **Frontend:** [React](https://react.dev/) + [Vite](https://vitejs.dev/)
- **Estilos:** [Material UI](https://mui.com/)
- **Diseño:** [Figma](https://www.figma.com/)
- **Backend (futuro):** [Django](https://www.djangoproject.com/)
- **Base de datos (futuro):** MySQL

---

## 📁 Estructura del proyecto

```
frontend/
├── src/
│   ├── components/        # Componentes reutilizables (InputCampo, etc.)
│   ├── pages/             # Páginas como Login, Sobre
│   ├── App.jsx
│   ├── main.jsx
│   └── ...
├── public/
├── package.json
└── README.md
```

---

## ⚙️ Instalación y ejecución

### 1. Instalar dependencias

```bash
cd frontend
npm install
```

### 2. Instalar Material UI

```bash
npm install @mui/material @emotion/react @emotion/styled
```

### 3. Ejecutar el servidor de desarrollo

```bash
npm run dev
```

---

## 💻 Componentes

### 🔹 `InputCampo.jsx`

Componente reutilizable para inputs con Material-UI.

**Ubicación:** `src/components/InputCampo.jsx`

**Props que recibe:**
- `etiqueta`: texto del label
- `tipo`: tipo de input (text, password, etc.)
- `valor`: valor actual del input
- `onChange`: función para manejar cambios

**Ejemplo de uso:**
```jsx
<InputCampo
  etiqueta="Usuario"
  tipo="text"
  valor={usuario}
  onChange={(e) => setUsuario(e.target.value)}
/>
```

---

## 📄 Páginas

### 🔐 `Login.jsx`

Formulario de inicio de sesión con campos reutilizables. Incluye un link a la página "Sobre nuestra clínica".

### 📜 `Sobre.jsx` (en desarrollo)

Página con información sobre la historia de la clínica.

---

## 🗓️ Historial de actualizaciones

### 2025-05-21
- Estructura base del frontend con Vite
- Implementación de Material UI
- Creación del componente `InputCampo`
- Página de login con campos reutilizables y link a historia

---

## 📌 Enlaces útiles

- [Figma](https://www.figma.com/)
- [Material UI](https://mui.com/)
- [React + Vite Docs](https://vitejs.dev/guide/)
- [Django Docs](https://www.djangoproject.com/)
