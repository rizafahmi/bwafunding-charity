<script>
  import CharityList from "../components/CharityList.svelte";
  import Header from "../components/Header.svelte";
  import Welcome from "../components/Welcome.svelte";
  import Promo from "../components/Promo.svelte";
  import Footer from "../components/Footer.svelte";

  import { charities } from "../data/charities.js";

  let title = "Charity";
</script>

<Header />
<Welcome />
<CharityList {charities} />
<Promo />
<Footer />
