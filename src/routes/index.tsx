import { component$ } from "@builder.io/qwik";
import type { DocumentHead } from "@builder.io/qwik-city";

export default component$(() => {
  return (
    <div>

    </div>
  );
});

export const head: DocumentHead = {
  title: "MediCure",
  meta: [
    {
      name: "description",
      content: "Qwik site description",
    },
  ],
};
