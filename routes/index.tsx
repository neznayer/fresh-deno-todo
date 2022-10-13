import NavBar from "../components/NavBar.tsx";
import { HandlerContext, Handlers, PageProps } from "$fresh/server.ts";
import { todos } from "../utils/todos.ts";
import { Todo } from "../utils/types.ts";

export const handler: Handlers<any> = {
  async GET(_, ctx) {
    console.log(Deno.env.get("MONGO_URI"));
    return await ctx.render(todos);
  },
};

export default function Home() {
  return <div></div>;
}
