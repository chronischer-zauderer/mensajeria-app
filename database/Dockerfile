FROM postgres:16-alpine

# Variables de entorno para inicialización
ENV POSTGRES_USER=admin
ENV POSTGRES_PASSWORD=admin123@
ENV POSTGRES_DB=msbd

# Copia scripts SQL de inicialización (opcional)
COPY ./init/ /docker-entrypoint-initdb.d/

EXPOSE 5433
