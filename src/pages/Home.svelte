<script>
  import Header from "../components/Header.svelte";
  import Promo from "../components/Promo.svelte";
  import Welcome from "../components/Welcome.svelte";
  import Footer from "../components/Footer.svelte";
  import CharityList from "../components/CharityList.svelte";
  import { charities } from "../data/charities.js";

  let title = "Charity";
</script>

<style>

</style>

<Header />
<Welcome />
<CharityList {charities} />
<Promo />
<Footer />
