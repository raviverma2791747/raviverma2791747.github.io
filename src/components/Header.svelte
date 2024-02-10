<script>
  import CloseIcon from "./svg/CloseIcon.svelte";
  import HamburgermenuIcon from "./svg/HamburgermenuiIcon.svelte";
  import { person_info_store } from "../helper/store";

  let isMenuOpen = false;

  let nav = [
    {
      title: "About Me",
      link: "#about",
    },
    {
      title: "Services",
      link: "#services",
    },
    {
      title: "Portfolio",
      link: "#portfolio",
    },
    {
      title: "Contact",
      link: "#contact",
    },
  ];
</script>

<header class="bg-primary-500 text-white">
  <div
    class="max-w-7xl mx-auto flex items-center gap-8 py-4 lg:py-8 px-4 7xl:px-0"
  >
    <a href="/" class="block text-accent-500 text-2xl font-semibold mr-auto"
      >{$person_info_store.name}</a
    >
    <nav class="lg:flex items-center gap-8 hidden">
      {#each nav as item}
        <a href={item.link}>{item.title}</a>
      {/each}
    </nav>
    <!-- <button class="bg-accent-500 text-white px-4 py-2 rounded"
      >Download CV</button
    > -->
    <button
      on:click={() => (isMenuOpen = !isMenuOpen)}
      class="text-accent-500 lg:hidden"><HamburgermenuIcon /></button
    >
  </div>
</header>

{#if isMenuOpen}
  <div class="fixed top-0 left-0 bg-accent-500 z-50 h-screen w-screen">
    <div
      class="absolute top-0 right-0 p-4 text-white cursor-pointer"
      on:click={() => (isMenuOpen = false)}
    >
      <CloseIcon />
    </div>
    <nav
      class="flex flex-col items-center gap-8 justify-center h-full text-white text-lg"
    >
      {#each nav as item}
        <a on:click={() => (isMenuOpen = false)} href={item.link}
          >{item.title}</a
        >
      {/each}
    </nav>
  </div>
{/if}
