---
title: "prisma basics"
---

# prisma basics

## Schema

A schema, in the context of databases, is a way to organize and structure data. It defines how data is stored, arranged, and managed within a database. A schema typically includes:

1. **Tables**: Define where and how data is stored, with rows and columns.
2. **Fields/Columns**: Specify types of data (like text, numbers, dates) and their constraints.
3. **Relationships**: Show how tables are linked to each other.
4. **Constraints**: Rules to ensure data integrity (e.g., primary keys, foreign keys).
5. **Indexes**: Improve search performance on the database.

In programming, a schema can also refer to a formal way to describe the shape and structure of JSON or XML data, like JSON Schema or XML Schema.

## starting steps

1. npx prisma init

you will have this:

    generator client {
    provider = "prisma-client-js"
    }

    datasource db {
    provider = "postgresql"
    url      = env("DATABASE_URL")
    }

2. Change the provider to mongodb or whatever you're using
3. `npm install @prisma/client` and make a new dir called `lib` and create a new file there `prismadb.ts`
4. In that file put:

    import { PrismaClient } from "@prisma/client";

    const client = global.prismadb || new PrismaClient();

    if (process.env.NODE_ENV === 'production'){
        global.prismadb = client;
    }

    export default client;


5. create a new file in the root dir `global.d.ts` and put: 

    import {PrismaClient} from '@prisma/client';

    declare global {
        namespace globalThis {
            var prismadb: PrismaClient
        }
    }

*We do steps 4 and 5 because of nextJS hot reloading (on every code change our code updates and re-runs). Without the above code there would be a bunch of prisma instances made, this stops that because global files do not reload.*

6. atlas

use mongodb.com atlas to make a db

**when connecting to the db select the VSC option to get the DATABASE_URL you need for the `.env` file** *make sure to replace the `password` with your password in the url and to put the name of the database on the end of the url* 