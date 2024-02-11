<script>
  import CloseIcon from "../svg/CloseIcon.svelte";

  let class_ = "";
  //@ts-nocheck
  let dialog;
  export let open;

  export { class_ as class };

  $: if (dialog && open) dialog.showModal();
</script>

<dialog
  bind:this={dialog}
  on:close={() => (open = false)}
  on:click|self={() => dialog.close()}
  on:keydown={(e) => {
    if (e.key === "Escape") dialog.close();
  }}
  class="border-none p-0 rounded-lg   max-w-[32rem]" 
>
  <div class={class_}>
    <div class="flex">
      <button
        class="text-white ms-auto"
        on:click={() => dialog.close()}
        type="button"
      >
        <CloseIcon />
      </button>
    </div>
    <slot />
  </div>
</dialog>

<style>
  dialog::backdrop {
    background: rgba(0, 0, 0, 0.3);
  }

  dialog[open] {
    background: transparent;
    animation: zoom 0.3s cubic-bezier(0.34, 1.56, 0.64, 1);
  }
  @keyframes zoom {
    from {
      transform: scale(0.95);
    }
    to {
      transform: scale(1);
    }
  }
  dialog[open]::backdrop {
    animation: fade 0.2s ease-out;
  }
  @keyframes fade {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }
</style>
