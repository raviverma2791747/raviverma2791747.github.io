<script>
  import { inview } from "svelte-inview";

  let isInView;
</script>

<div
  use:inview={{ unobserveOnEnter: true, rootMargin: "-20%" }}
  on:change={({ detail }) => {
    isInView = detail.inView;
  }}
>
  {#if isInView}
   <slot/>
  {/if}
</div>

