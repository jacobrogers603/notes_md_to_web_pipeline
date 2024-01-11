---
title: "basics of next auth"
---



# Next Auth Basics

1. `npm install next-auth`
2. make the path: `api/auth/[...nextauth]` and put `route.ts`.
3. here put:

    import NextAuth from "next-auth";

    const handler = NextAuth({
        // your code
    });

    export { handler as GET, handler as POST };
  
# bcrypt

It is a good idea to use bcrypt as well with next auth

1. `npm install bcrypt`
2. `npm install  -D @types/bcrypt`