<script>
  export let charities;
</script>

<div>
  <h2>Daftar Charity</h2>
  {#if charities !== undefined}
    <ul>
      {#each charities as charity}
        <li>{charity.title} - {charity.category}</li>
      {/each}
    </ul>
  {:else}
    <h5>Data belum tersedia</h5>
  {/if}
</div>
