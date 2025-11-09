# mensajeria-app

Aplicación de mensajería en tiempo real construida con NestJS (backend) y React + Vite (frontend).

Soporta WebSockets mediante Socket.IO, autenticación con JWT y persistencia en PostgreSQL.

## Tabla de contenidos

- [Descripción](#descripción)
- [Stack tecnológico](#stack-tecnológico)
- [Arquitectura](#arquitectura)
- [Características](#características)
- [Requisitos](#requisitos)
- [Instalación y desarrollo (local)](#instalación-y-desarrollo-local)
	- [Base de datos (opcional: Docker)](#base-de-datos-opcional-docker)
	- [Backend (NestJS)](#backend-nestjs)
	- [Frontend (React + Vite)](#frontend-react--vite)
- [Entorno / Variables de ejemplo](#entorno--variables-de-ejemplo)
- [WebSockets y autenticación](#websockets-y-autenticación)
- [Tests y lint](#tests-y-lint)
- [Despliegue](#despliegue)
- [Contribuir](#contribuir)
- [Licencia](#licencia)

## Descripción

Proyecto de ejemplo/mini-aplicación de mensajería en tiempo real pensado para aprendizaje y como base para ampliaciones. Incluye:

- API REST y WebSockets en el backend (NestJS).
- Cliente en React (Vite) que se conecta via Socket.IO.
- Persistencia en PostgreSQL (TypeORM).
- Autenticación por JWT (registro / login).

## Stack tecnológico

- Backend: NestJS, TypeScript, TypeORM, Socket.IO, Passport + JWT
- Frontend: React, Vite
- Base de datos: PostgreSQL
- Contenedores: Docker (Dockerfiles incluidos para backend/database)

## Arquitectura

El proyecto está dividido en dos carpetas principales:

- `backend/` — API REST, gateway de WebSockets y lógica del servidor.
- `frontend/` — Aplicación React que consume la API y se conecta por WebSockets.
- `database/` — Dockerfile e inicialización (scripts SQL) para la base de datos.

Ambos proyectos pueden ejecutarse localmente de forma independiente durante el desarrollo.

## Características

- Registro y login de usuarios con JWT.
- Envío y recepción de mensajes en tiempo real por Socket.IO.
- Persistencia de usuarios (y mensajes, si se extiende) en PostgreSQL.

## Requisitos

- Node.js >= 18
- npm o pnpm
- Docker (opcional, para ejecutar PostgreSQL en contenedor)

## Instalación y desarrollo (local)

Sigue estos pasos para arrancar la aplicación en desarrollo.

### Base de datos (opcional: Docker)

Si prefieres no instalar PostgreSQL localmente, puedes lanzar un contenedor con la base de datos y ejecutar el script de inicialización incluido:

```bash
# Desde la raíz del proyecto
docker run --name mensajeria-db -e POSTGRES_PASSWORD=postgres -e POSTGRES_USER=postgres -e POSTGRES_DB=mensajeria -p 5432:5432 -v "$PWD/database/init:/docker-entrypoint-initdb.d" -d postgres:15
```

El directorio `database/init` contiene `init.sql` que se ejecutará al primer arranque y puede crear tablas/seed inicial.

> Nota: ajusta las credenciales y el número de versión de Postgres según tus necesidades.

### Backend (NestJS)

1. Entra en la carpeta `backend`:

```bash
cd backend
```

2. Instala dependencias:

```bash
npm install
```

3. Crea un archivo `.env` (ver sección de ejemplo abajo) y configura la conexión a la base de datos y el `JWT_SECRET`.

4. Ejecuta en modo desarrollo (hot reload):

```bash
npm run start:dev
```

Scripts útiles (desde `backend`):

- `npm run start:dev` — arrancar en desarrollo
- `npm run start:prod` — arrancar la versión compilada
- `npm run build` — compilar TypeScript a `dist`
- `npm run test` — ejecutar tests (Jest)

### Frontend (React + Vite)

1. Entra en la carpeta `frontend`:

```bash
cd frontend
```

2. Instala dependencias:

```bash
npm install
```

3. Ejecuta la app en modo desarrollo:

```bash
npm run dev
```

Por defecto Vite levantará la app en `http://localhost:5173` (u otro puerto si 5173 está ocupado).

## Entorno / Variables de ejemplo

Backend (`backend/.env`):

```env
# Database
DB_HOST=localhost
DB_PORT=5432
DB_USER=postgres
DB_PASSWORD=postgres
DB_NAME=mensajeria

# JWT
JWT_SECRET=tu_secreto_super_seguro
JWT_EXPIRATION=3600s

# App
PORT=3000
```

Frontend (`frontend/.env` o configuración en `src/api/api.js`):

```env
VITE_API_URL=http://localhost:3000
VITE_SOCKET_URL=http://localhost:3000
```

En el frontend se usan variables que comienzan por `VITE_` para que Vite las exponga en tiempo de build/ejecución.

## WebSockets y autenticación

La app usa Socket.IO en el backend (`@nestjs/platform-socket.io`).

- Autenticación: la API REST expone endpoints de login/registro que devuelven un JWT. Ese token se envía desde el cliente en el header `Authorization: Bearer <token>` para las llamadas HTTP.
- Socket.IO: para autenticar el socket, puedes enviar el token al conectarte (por ejemplo, usando la opción `auth` del cliente Socket.IO):

```js
// ejemplo cliente
import { io } from 'socket.io-client'

const socket = io(import.meta.env.VITE_SOCKET_URL, {
	auth: { token: 'Bearer <jwt>' }
})
```

El servidor debe validar el token en el guard/estrategia del gateway. Revisa `backend/src/auth` y `backend/src` para ver la implementación actual.

Eventos comunes (ejemplos, ajustar según la implementación real):

- `message` — envío/recepción de mensajes
- `join` / `leave` — entrar/salir de salas

## Tests y lint

Backend (desde `backend`):

```bash
npm run test
npm run lint
```

Frontend (desde `frontend`):

```bash
npm run lint
```

## Despliegue

Opciones comunes:

- Construir y desplegar el backend compilado (`npm run build` y `npm run start:prod`).
- Construir el frontend con `npm run build` y servir `dist` desde un CDN o servidor estático.
- Usar Docker para orquestar la base de datos y la aplicación (añadir `docker-compose.yml` si se desea simplificar).

## Contribuir

1. Haz fork del repositorio.
2. Crea una rama feature/bugfix: `git checkout -b feature/mi-cambio`.
3. Añade pruebas y asegúrate de que `npm run lint` y `npm run test` pasan.
4. Abre un pull request describiendo tu cambio.

## Licencia

Este repositorio no incluye una licencia explícita (ver `backend/package.json` que marca `UNLICENSED`). Añade un fichero `LICENSE` si quieres permitir contribuciones externas con una licencia concreta.

---

Si quieres, puedo también:

- Añadir un archivo `.env.example` en `backend` y `frontend` con las variables mostradas arriba.
- Crear un `docker-compose.yml` para levantar backend, frontend y postgres para desarrollo.

Di qué prefieres y lo añado.