<script>
  import router from "page";
  import { page, params } from "./stores/pages";
  import Home from "./pages/Home.svelte";
  import About from "./pages/About.svelte";
  import Contact from "./pages/Contact.svelte";
  import Donation from "./pages/Donation.svelte";
  import NotFound from "./pages/NotFound.svelte";
  import Success from "./pages/Success.svelte";
  import Failure from "./pages/Failure.svelte";

  export let ready;

  router("/", () => ($page = Home));
  router("/about", () => ($page = About));
  router("/contact", () => ($page = Contact));
  router("/success", () => ($page = Success));
  router("/error", () => ($page = Failure));
  router(
    "/donation/:id",
    (ctx, next) => {
      $params = ctx.params;
      next();
    },
    () => ($page = Donation)
  );
  router("/*", () => ($page = NotFound));

  router.start();
</script>

<svelte:component this={$page} {ready} />
