import "dotenv/config";
import { drizzle } from "drizzle-orm/node-postgres";
import { userTable } from "./db/schema.js";

const db = drizzle(process.env.DATABASE_URL!);

async function main() {
  const users: (typeof userTable.$inferInsert)[] = [
    {
      name: "Jash",
      age: 72,
      email: "jashdpatel2511@gmail.com",
    },
    {
      name: "Pujan",
      age: 19,
      email: "pujankhunt.work@gmail.com"
    },
    {
      name: "Tanishq",
      age: 5,
      email: "tanishqjain@gmail.com"
    },
    {
      name: "Shiva",
      age: 18,
      email: "guptashiva222@gmail.com"
    },
    {
      name: "Kartavya",
      age: 19,
      email: "kartavya0037@gmail.com"
    }
  ];

  await db.insert(userTable).values(users);
  console.log("New Users Created.");

  const allUsers: (typeof userTable.$inferSelect)[] = await db.select().from(userTable);
  console.log("All Users: ", allUsers);

  


}

main();
