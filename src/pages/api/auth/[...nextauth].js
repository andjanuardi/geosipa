import NextAuth from "next-auth";

import CredentialsProvider from "next-auth/providers/credentials";

export const authOptions = {
  providers: [
    CredentialsProvider({
      async authorize(credentials, req) {
        const user = await fetch(
          process.env.NEXTAUTH_URL + "/api/auth/getUser",
          {
            method: "POST",
            body: JSON.stringify({
              user: credentials.user,
              pass: credentials.pass,
            }),
          }
        )
          .then((res) => res.json())
          .then((data) => {
            if (data.length > 0) {
              return data[0];
            } else {
              return null;
            }
          })
          .catch((err) => {
            console.log(err);

            return null;
          });

        if (credentials.user === user.user && credentials.pass === user.pass) {
          return { name: user };
        } else {
          return null;
        }
      },
    }),
  ],
};
export default NextAuth(authOptions);
