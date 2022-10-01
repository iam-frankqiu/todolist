# Nest ToDoList

## Techniques

- Nest
- Typescript
- postgresql
- MikroOrm

## Getting started
- Install postgresql on local machine (or you can use docker compose)
```
yarn
```

- Use this to run MikroOrm schema generator’s refresh with local.env vars, this is enough for local dev/testing for this project, and we don’t need anything related to db migrations.
```bash
yarn synchronize:local
```

- Use this to start Nest.js with local.env vars
```
yarn start:local
```