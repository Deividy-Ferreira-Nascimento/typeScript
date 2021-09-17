import { Request, Response } from "express";
import createUser from "./services/CreateUser";
export function helloWorld(req: Request, res: Response) {
  const user = createUser({
    email: "meuemail@gmail.com",
    password: "123",
    techs: [
        "ReactJS",
        "Node.js",
        "React Native",
        { title:'JavaScript', experience: 100 }
    ],
  });

  console.log(user);

  return res.json({ message: "Hello World" });
}
