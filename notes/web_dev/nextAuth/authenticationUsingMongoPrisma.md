---
title: "mongo and prisma and next-auth"
---

# mongo, prisma, next-auth authentication

1. `npm i -D prisma`
2. `npx prisma init`
3. set datasource db provider to mongodb
4. `npm i @prisma/client`
5. create a file: `lib/prisadb.ts`

```
import { PrismaClient } from '@prisma/client';

const client = global.prismadb || new PrismaClient();

if (process.env.NODE_ENV === 'development') { // or maybe!!!! 'production' ...?
  global.prismadb = client;
}

export default client;
```

6. create `global.d.ts`:

```
import { PrismaClient } from "@prisma/client";

declare global {
  namespace globalThis {
    var prismadb: PrismaClient;
  }
}
```

7. set up mongodb in atlas, make a cluster, save your username and pass somewhere, allow all IP addresses, click connect w/ vsc and use that URL, but append /Cluster0 to the end and input your username and password into the url 

8. in the .env file, have your `DATABASE_URL` set to the cluster url in mongodb atlas. Then set the schema field to that var.

9. write the models in the schema file.

```
model User {
    id String @id @default(auto()) @map("_id") @db.ObjectId
    name String
    email String @unique
    hashedPassword String
}
```
10. `npm i next-auth`, `npm i bcrypt`, and make the `app/api/auth/[...nextauth]/route.ts` file:

```
import authOptions from '../../../../auth';
import NextAuth from 'next-auth/next';

const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };
```
*Note: the authOptions should be here, but due to an error in next-auth for next js 14, they need to be in a separate file called `auth.ts` in the root dir. Move them to here in the future if this gets fixed and don't use the auth.ts file:*

```
import prismadb from "@/lib/prismadb";
import Credentials from "next-auth/providers/credentials";
import { PrismaAdapter } from "@next-auth/prisma-adapter";
import { compare } from "bcrypt";
import { AuthOptions } from "next-auth";

const authOptions: AuthOptions = {
  providers: [
    Credentials({
      id: "credentials",
      name: "Credentials",
      credentials: {
        email: {
          label: "Email", 
          type: "email",
          placeholder: "Email",
        },
        password: {
          label: "Password",
          type: "password",
          placeholder: "Password",
        },
      },
      async authorize(credentials) {
        // If the email or password is empty, it throws an error. 
        if (!credentials?.email || !credentials?.password) {
          throw new Error("Email and password are required");
        }

        const user = await prismadb.user.findUnique({
          where: {
            email: credentials.email,
          },
        });

        if (!user || !user.hashedPassword) {
          throw new Error("Email does not exist");
        }

        const isCorrectPassword = await compare(
          credentials.password, // this is coming from the form that the user filled in
          user.hashedPassword as string // this is coming from the database
        );
        if (!isCorrectPassword) {
          throw new Error("Invalid password");
        }

        return user;
      },
    }),
  ],
  pages: {
    signIn: "/auth",
  },
  adapter: PrismaAdapter(prismadb),
  session: {
    strategy: "jwt",
  },
  jwt: {
    secret: process.env.NEXTAUTH_JWT_SECRET,
  },
  secret: process.env.NEXTAUTH_SECRET,
};

export default authOptions;
```

11. define a route for registering `app/api/register/route.ts`:

```
import bcrypt from 'bcrypt';
import {NextResponse } from 'next/server';
import prismadb from '@/lib/prismadb';

export const POST = async (req: Request) => {

    try {
        // Define three vars extracted from req.body
        const {email, name, password} = await req.json();

        // Check to see if there is already an email registered for the email provided by the user.
        const existingUser = await prismadb.user.findUnique({
            where: {
                email: email
            }
        });

        if(existingUser){
            return NextResponse.json({error:'Email already registered :('})
        }

        // Hash the user's password.
        const hashedPassword = await bcrypt.hash(password, 12);

        // Save the hashed password into a new user model.
        const user = await prismadb.user.create({
            data: {
                email,
                name,
                hashedPassword,
                image: '',
                emailVerified: new Date()
            }
        });

        return NextResponse.json(user);

    } catch (error) {
        console.log(error);
        return NextResponse.json(error);
    }
}
```

12. in `app/auth/page.tsx` define functions that will register or sign in the user:

```
  const register = async (email: string, password: string) => {
    try {
      await axios.post("/api/register", {
        username,
        email,
        password,
      });
      
      signin();
    } catch (error) {
      console.error(error);
    }
  };

    const signin = async (email: string, password: string) => {
    try {
      const loginResult = await signIn("credentials", {
        email: email,
        password: password,
        redirect: false,
      });
        
      if (loginResult?.ok) {
        router.push("/");
      } else {
        setErrMssg("Login failed");
      }
    } catch (error) {
      console.error("Error during sign-in:", error);
      setErrMssg("An error occurred during sign-in");
    }
  };
```