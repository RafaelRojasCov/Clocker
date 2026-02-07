# Clocker (Pomofocus Clone)

# 🍅 Clocker - Pomodoro Timer

- Node.js +16
- Typescript
- React
- Yarn

## Development

To run the project locally:

```bash
yarn install
yarn start
```

To build for production:

```bash
yarn build
```

## Deployment

This project automatically deploys to GitHub Pages on every push to the `main` branch using GitHub Actions.

### GitHub Pages Configuration

To enable automatic deployment, ensure the following settings in your GitHub repository:

1. Go to **Settings** → **Pages**
2. Under **Source**, select **GitHub Actions**
3. The workflow will automatically deploy the site to `https://RafaelRojasCov.github.io/Clocker/`

The deployment workflow is defined in `.github/workflows/deploy.yml`.

<div align="center">

![Clocker App](https://github.com/user-attachments/assets/c1a237ab-3661-4f0e-a636-f2640da43fbb)

[![React](https://img.shields.io/badge/React-18.2.0-61dafb?style=flat&logo=react&logoColor=white)](https://reactjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-4.9.4-3178c6?style=flat&logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![Node.js](https://img.shields.io/badge/Node.js-16+-339933?style=flat&logo=node.js&logoColor=white)](https://nodejs.org/)
[![Yarn](https://img.shields.io/badge/Yarn-Package%20Manager-2c8ebb?style=flat&logo=yarn&logoColor=white)](https://yarnpkg.com/)
[![License](https://img.shields.io/badge/License-MIT-yellow.svg)](LICENSE)

**Una aplicación de temporizador Pomodoro para mejorar tu productividad** 🚀

[Demo en vivo](https://rafaelrojascov.github.io/pomofocus-clone) | [Reportar un Bug](https://github.com/RafaelRojasCov/Clocker/issues) | [Solicitar Funcionalidad](https://github.com/RafaelRojasCov/Clocker/issues)

</div>

---

## 📋 Tabla de Contenidos

- [Acerca del Proyecto](#-acerca-del-proyecto)
- [Características](#-características)
- [Requerimientos Técnicos](#-requerimientos-técnicos)
- [Instalación](#-instalación)
- [Cómo Usar](#-cómo-usar)
- [Scripts Disponibles](#-scripts-disponibles)
- [Estructura del Proyecto](#-estructura-del-proyecto)
- [Tecnologías Utilizadas](#-tecnologías-utilizadas)
- [Despliegue](#-despliegue)
- [Contribuir](#-contribuir)
- [Licencia](#-licencia)
- [Contacto](#-contacto)

---

## 🎯 Acerca del Proyecto

**Clocker** es una aplicación web inspirada en la técnica Pomodoro, diseñada para ayudarte a gestionar tu tiempo de manera eficiente. La técnica Pomodoro es un método de gestión del tiempo que utiliza intervalos de 25 minutos de trabajo concentrado, separados por breves descansos.

### ¿Qué es la Técnica Pomodoro?

La técnica Pomodoro divide tu trabajo en intervalos de tiempo:
- **Pomodoro**: 25 minutos de trabajo enfocado
- **Short Break**: 5 minutos de descanso corto
- **Long Break**: 15 minutos de descanso largo

Esta aplicación te permite administrar estos intervalos de manera visual e intuitiva, mejorando tu concentración y productividad.

---

## ✨ Características

- ⏱️ **Timer Configurable**: Tres modos de temporizador (Pomodoro, Short Break, Long Break)
- 🎨 **Interfaz Intuitiva**: Diseño limpio y fácil de usar con cambios visuales según el modo
- 🔊 **Notificaciones de Audio**: Alertas sonoras cuando termina cada intervalo
- 📱 **Diseño Responsive**: Funciona perfectamente en dispositivos móviles, tablets y escritorio
- ⚡ **Rendimiento Optimizado**: Construido con React y TypeScript para una experiencia fluida
- 🎯 **Control del Timer**: Botones de inicio, pausa y reset

---

## 💻 Requerimientos Técnicos

### Requisitos Previos

Antes de comenzar, asegúrate de tener instalado en tu sistema:

| Software | Versión Mínima | Descripción |
|----------|----------------|-------------|
| **Node.js** | 16.x o superior | Entorno de ejecución de JavaScript |
| **Yarn** | 1.x o superior | Gestor de paquetes (o npm) |
| **Git** | 2.x | Sistema de control de versiones |

### Dependencias Principales

- **React**: ^18.2.0 - Biblioteca de UI
- **TypeScript**: ^4.9.4 - Superset de JavaScript con tipado estático
- **Emotion**: ^11.11.0 - Biblioteca de CSS-in-JS para estilos
- **FontAwesome**: ^6.4.2 - Iconos vectoriales
- **React Scripts**: 5.0.1 - Scripts y configuración de Create React App
- **Sass**: ^1.56.2 - Preprocesador CSS

---

## 🚀 Instalación

Sigue estos pasos para configurar el proyecto localmente:

### 1. Clonar el Repositorio

```bash
git clone https://github.com/RafaelRojasCov/Clocker.git
cd Clocker
```

### 2. Instalar Dependencias

Usando Yarn (recomendado):

```bash
yarn install
```

O usando npm:

```bash
npm install
```

### 3. Verificar la Instalación

Una vez completada la instalación, verifica que todas las dependencias se hayan instalado correctamente:

```bash
yarn list --depth=0
```

---

## 🎮 Cómo Usar

### Levantar el Servidor de Desarrollo

Para ejecutar la aplicación en modo desarrollo:

```bash
yarn start
```

La aplicación se abrirá automáticamente en [http://localhost:3000](http://localhost:3000) en tu navegador.

### Usando la Aplicación

1. **Selecciona un Modo**: Haz clic en uno de los tres botones (Pomodoro, Short Break, Long Break)
2. **Inicia el Timer**: Presiona el botón "START" para comenzar el temporizador
3. **Gestiona el Timer**: Usa los controles para pausar o reiniciar según necesites
4. **Recibe Notificaciones**: Escucha la alerta cuando el tiempo termine

---

## 📜 Scripts Disponibles

En el directorio del proyecto, puedes ejecutar los siguientes comandos:

### `yarn start`

Ejecuta la aplicación en modo desarrollo.\
Abre [http://localhost:3000](http://localhost:3000) en tu navegador.

La página se recargará automáticamente cuando hagas cambios.\
También verás errores de lint en la consola.

### `yarn test`

Ejecuta todos los tests en modo no-watch.\
Para más información sobre testing, consulta la [documentación de testing de Create React App](https://create-react-app.dev/docs/running-tests/).

### `yarn build`

Construye la aplicación para producción en la carpeta `build`.\
Optimiza la build para el mejor rendimiento.

Los archivos están minificados y los nombres incluyen hashes.\
¡Tu aplicación está lista para ser desplegada!

### `yarn deploy`

Despliega la aplicación a GitHub Pages.\
Ejecuta automáticamente `yarn build` antes del despliegue.

---

## 📁 Estructura del Proyecto

```
Clocker/
├── public/                 # Archivos estáticos públicos
│   ├── index.html         # Plantilla HTML principal
│   ├── favicon.ico        # Favicon del sitio
│   └── manifest.json      # Manifest de PWA
├── src/                   # Código fuente de la aplicación
│   ├── assets/           # Recursos (imágenes, sonidos, fuentes)
│   ├── components/       # Componentes de React
│   │   ├── Home/        # Componente principal y timer
│   │   ├── Timer/       # Componente del temporizador
│   │   ├── Button/      # Componentes de botones
│   │   ├── Container/   # Componentes de contenedor
│   │   └── Todo/        # Componentes de lista de tareas
│   ├── shared/          # Utilidades compartidas
│   ├── types/           # Definiciones de tipos TypeScript
│   ├── index.tsx        # Punto de entrada de la aplicación
│   └── index.css        # Estilos globales
├── package.json          # Dependencias y scripts
├── tsconfig.json         # Configuración de TypeScript
├── .gitignore           # Archivos ignorados por Git
└── README.md            # Este archivo
```

---

## 🛠️ Tecnologías Utilizadas

Este proyecto fue construido con:

- **[React](https://reactjs.org/)** - Biblioteca de JavaScript para construir interfaces de usuario
- **[TypeScript](https://www.typescriptlang.org/)** - Superset de JavaScript con tipado estático
- **[Emotion](https://emotion.sh/)** - Biblioteca para escribir estilos CSS con JavaScript
- **[Sass](https://sass-lang.com/)** - Preprocesador CSS para estilos más mantenibles
- **[FontAwesome](https://fontawesome.com/)** - Biblioteca de iconos vectoriales
- **[Create React App](https://create-react-app.dev/)** - Herramienta para crear aplicaciones React
- **[React Testing Library](https://testing-library.com/react)** - Framework de testing para React
- **[GitHub Pages](https://pages.github.com/)** - Hosting para el despliegue

---

## 🌐 Despliegue

### Desplegar en GitHub Pages

El proyecto está configurado para desplegarse fácilmente en GitHub Pages:

```bash
yarn deploy
```

Este comando:
1. Construye la aplicación para producción
2. Despliega el contenido de la carpeta `build` a la rama `gh-pages`
3. La aplicación estará disponible en: `https://rafaelrojascov.github.io/pomofocus-clone`

### Desplegar en Otros Servicios

Para desplegar en servicios como Vercel, Netlify o Heroku, consulta:
- [Deployment - Create React App](https://create-react-app.dev/docs/deployment/)

---

## 🤝 Contribuir

Las contribuciones son lo que hacen que la comunidad de código abierto sea un lugar increíble para aprender, inspirar y crear. Cualquier contribución que hagas será **muy apreciada**.

### Cómo Contribuir

1. Fork el Proyecto
2. Crea tu Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit tus Cambios (`git commit -m 'Add some AmazingFeature'`)
4. Push a la Branch (`git push origin feature/AmazingFeature`)
5. Abre un Pull Request

### Reportar Bugs

Si encuentras un bug, por favor abre un [issue](https://github.com/RafaelRojasCov/Clocker/issues) describiendo:
- El comportamiento esperado
- El comportamiento actual
- Pasos para reproducir el problema

---

## 📄 Licencia

Este proyecto está bajo la Licencia MIT. Ver el archivo `LICENSE` para más detalles.

---

## 📧 Contacto

**Rafael Rojas** - [@RafaelRojasCov](https://github.com/RafaelRojasCov)

**Link del Proyecto**: [https://github.com/RafaelRojasCov/Clocker](https://github.com/RafaelRojasCov/Clocker)

**Demo en Vivo**: [https://rafaelrojascov.github.io/pomofocus-clone](https://rafaelrojascov.github.io/pomofocus-clone)

---

<div align="center">

**¡Si te gusta este proyecto, dale una ⭐ en GitHub!**

Hecho con ❤️ por [Rafael Rojas](https://github.com/RafaelRojasCov)

</div>
>>>>>>> main
