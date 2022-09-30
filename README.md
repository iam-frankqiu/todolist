- npm install
- Install postgresql on local machine (or you can use docker compose, I don’t mind at all 😉)
    - create new db, user, permission etc.
- Replace db credentials in local.env and make sure Nest.js + MikroOrm can connect to your local db
- Research on MikroOrm doc on how to run schema refresh or migration (for this mini project, schema refresh is fine). Apply the db schema generation/refresh then you can start development and testing
- Optionally you can use db tools like DBeaver to connect to your local db and check the actual tables in the db
- Hint: (check package.json for details)
    - Use this to run MikroOrm schema generator’s refresh with local.env vars, this is enough for local dev/testing for this mini project, and we don’t need anything related to db migrations.
    
    ```bash
    npm run synchronize:local
    ```
    
    - Use this to start Nest.js with local.env vars


    ## Question

Background/Motivation

For the take home mini project we are just looking for writing a GraphQL CRUD with relations under Nest.js, GQL, MikroOrm. We want to see how you learn MikroOrm in short time and figure out the best practices using it.

Note: you need to write in GraphQL, NOT REST. (Hint: use `nest g resource` to generate GraphQL scaffoldings (graphql code first) )

So the actual question is pretty at high level and we need a very free-form answer in code:

- Create ToDoList and ToDoItem resources (entities). ToDoList should have 1-to-Many ToDoItems. And ToDoItems have Many-to-1 relation to ToDoList. ToDoItem should have a description field/column. ToDoList should have a title field/column.
- Generate the resources and create CRUD endpoints for BOTH ToDoList and ToDoItem. We will also check your naming conventions. CRUD examples: create, update (by id), delete (by id), find (by id), findAll.

Hint:

- I highly recommend you to go through MikroOrm official documentations at high level, but thoroughly, to get its ideas.