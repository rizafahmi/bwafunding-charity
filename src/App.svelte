<script>
  import router from "page";
  import Home from "./pages/Home.svelte";
  import About from "./pages/About.svelte";
  import Contact from "./pages/Contact.svelte";
  import Donation from "./pages/Donation.svelte";
  import NotFound from "./pages/NotFound.svelte";

  let page, params;

  router("/", () => (page = Home));
  router("/about", () => (page = About));
  router("/contact", () => (page = Contact));
  router(
    "/donation/:id",
    (ctx, next) => {
      params = ctx.params;
      next();
    },
    () => (page = Donation)
  );
  router("/*", () => (page = NotFound));


  router.start();
</script>

<svelte:component this={page} {params} />
