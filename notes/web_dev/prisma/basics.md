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
3. `npm install @prisma/client` and make a new dir called `lib`