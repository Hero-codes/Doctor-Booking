import { component$ } from "@builder.io/qwik";
import type { DocumentHead, RequestHandler } from "@builder.io/qwik-city";

export const onPost: RequestHandler = ({ json, cookie }) => {
  cookie.set("token", "POST ROUTE")
  json(200, { message: 'Hello, POST request here' });
};

export const onGet: RequestHandler = ({ json, cookie }) => {
  cookie.set("token", "GET ROUTE")
  json(200, { message: 'Hello World' });
};

export default component$(() => {
  return (
    <div>
      Hey There
    </div>
  );
});

export const head: DocumentHead = {
  title: "Welcome to Qwik",
  meta: [
    {
      name: "description",
      content: "Qwik site description",
    },
  ],
};
