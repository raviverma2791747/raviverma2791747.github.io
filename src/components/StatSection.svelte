<script>
  import { stat_store } from "../helper/store";
</script>

<section class="bg-secondary">
  <div class="max-w-7xl mx-auto py-10 px-4 7xl:px-0">
    <div class="grid grid-cols-2 lg:grid-cols-4 gap-8">

      {#each $stat_store as stat}
        <div
          class="text-white p-8 border-2   border-accent-500 rounded-tr-3xl"
          class:border-dashed={!stat.solid}
          >
          <h1 class="text-4xl font-bold">{stat.count}</h1>
          <p class="text-xl">{stat.unit}</p>
        </div>
      {/each}
    </div>
  </div>
</section>
