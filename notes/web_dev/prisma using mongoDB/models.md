---
title: "models"
---

# Models (prisma using mongoDB format)

In `schema.prisma` you create models.

Every model must start with an ID!

Here is an example model:

    model User {
        // This line is required in every model!
        id String @id @default(auto()) @map("_id") @db.ObjectId
        name String
        // ? means it is optional
        image String?
        // @unique ensures it is unique
        email String? @unique
        emailVerified DateTime?
        hashedPassword String?
        // @default sets the default value, now() sets it to the current time.
        createdAt DateTime @default(now())
        // @updatedAt sets it to the time when it was last updated
        updatedAt DateTime @updatedAt

        favoriteIds String[] @db.ObjectId

*@db.ObjectId: This is a Prisma-specific annotation indicating the type of data stored in the field. In MongoDB, an ObjectId is a 12-byte unique identifier, often used as a primary key. This annotation tells Prisma that each string in the favoriteIds array should be treated as a MongoDB ObjectId.*

## push

once you write your models in the schema.prisma file run:

    npx prisma db push