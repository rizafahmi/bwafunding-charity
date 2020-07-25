<script>
  import CharityList from "../components/CharityList.svelte";
  import { charities } from "../data/charities.js";

  let title = "Charity";
</script>

<style>
h1 {
  font-size: 3em;
  color: #e2071c;
}
</style>
<div>
  <h1>{title}</h1>
  <CharityList {charities} />
</div>