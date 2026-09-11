import { bohoAuth } from "bohoauth";

export const boho = bohoAuth({
  password: process.env.BOHO_PASSWORD!,
  secret: process.env.BOHO_PASSWORD!,
  expiresIn: "1h",
  middleware: {
    loginPath: "/login",
    protectedPaths: ["/todos"],
    redirectPath: "/home",
  },
});