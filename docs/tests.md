# Tests

## Table of Contents <!-- omit in toc -->

- [Running Tests](#running-tests)
- [Tests in Docker](#tests-in-docker)
  - [For relational database](#for-relational-database)

## Running Tests

```bash
npm run test
```

## Tests in Docker

### For relational database

```bash
docker compose -f docker-compose.ci.yaml --env-file .env.example -p ci up --build --exit-code-from api && docker compose -p ci rm -svf
```

---

Previous: [File uploading](file-uploading.md)

Next: [Benchmarking](benchmarking.md)
