# Installation

NestJS Boilerplate supports [TypeORM](https://www.npmjs.com/package/typeorm) for working with databases. By default, TypeORM uses [PostgreSQL](https://www.postgresql.org/) as the main database, but you can use any relational database.

---

## Table of Contents <!-- omit in toc -->

- [Comfortable development (PostgreSQL + TypeORM)](#comfortable-development-postgresql--typeorm)
- [Quick run (PostgreSQL + TypeORM)](#quick-run-postgresql--typeorm)
  - [Video guideline](#video-guideline)
- [Links](#links)

---

## Comfortable development (PostgreSQL + TypeORM)

1. Go to folder, and copy `.env.example` as `.env`.

   ```bash
   cd my-app/
   cp .env.example .env
   ```

1. Change `DATABASE_HOST=postgres` to `DATABASE_HOST=localhost`

   Change `MAIL_HOST=maildev` to `MAIL_HOST=localhost`

1. Run additional container:

   ```bash
   docker compose up -d postgres adminer maildev
   ```

1. Install dependency

   ```bash
   npm install
   ```

1. Run app configuration

   > You should run this command only the first time on initialization of your project, all next time skip it.

   ```bash
   npm run app:config
   ```

1. Run migrations

   ```bash
   npm run migration:run
   ```

1. Run seeds

   ```bash
   npm run seed:run:relational
   ```

1. Run app in dev mode

   ```bash
   npm run start:dev
   ```

1. Open <http://localhost:8000>

---

## Quick run (PostgreSQL + TypeORM)

If you want quick run your app, you can use following commands:

1. Go to folder, and copy `.env.example` as `.env`.

   ```bash
   cd my-app/
   cp .env.example .env
   ```

1. Run containers

   ```bash
   docker compose up -d
   ```

1. For check status run

   ```bash
   docker compose logs
   ```

1. Open <http://localhost:8000>

### Video guideline

<https://user-images.githubusercontent.com/6001723/235758846-d7d97de8-dea9-46d8-ae12-8cc6b76df03d.mp4>

---

## Links

- Swagger (API docs): <http://localhost:8000/docs>
- Adminer (client for DB): <http://localhost:8080>
- Maildev: <http://localhost:1080>

---

Next: [Working with database](database.md)
