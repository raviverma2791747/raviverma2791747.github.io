<script>
  import ArrowRightIcon from "./svg/ArrowRightIcon.svelte";

  let arrs = [
    {
      title: "Portfolio",
    },
    {
      title: "Portfolio",
    },
    {
      title: "Portfolio",
    },
    {
      title: "Portfolio",
    },
    {
      title: "Portfolio",
    },
    {
      title: "Portfolio",
    },
    {
      title: "Portfolio",
    },
    {
      title: "Portfolio",
    },
  ];

  let active_tab = 0;

  let tabs = ["Personal Project", "Client Project", "All Work"];
</script>

<section class="bg-primary-500">
  <div class="max-w-7xl mx-auto pt-10 pb-16 px-4 7xl:px-0">
    <h1 class="text-white text-3xl font-semibold mb-8">Portfolio</h1>
    <div class="flex mb-5">
      <button
        class:bg-accent-500={active_tab == 0}
        class:bg-primary-400={active_tab != 0}
        on:click={() => (active_tab = 0)}
        class=" text-white px-6 py-2 rounded-tl-lg rounded-bl-lg"
      >
        All Work
      </button>
      <button
        class:bg-accent-500={active_tab == 1}
        class:bg-primary-400={active_tab != 1}
        on:click={() => (active_tab = 1)}
        class=" text-white px-6 py-2"
      >
        Personal Project
      </button>
      <button
        class:bg-accent-500={active_tab == 2}
        class:bg-primary-400={active_tab != 2}
        on:click={() => (active_tab = 2)}
        class=" text-white px-6 py-2 rounded-tr-lg rounded-br-lg"
      >
        Client Project
      </button>
    </div>
    <div class="grid grid-cols-2 lg:grid-cols-4 gap-4">
      {#each arrs as arr}
        <div class="aspect-square bg-white rounded-lg cursor-pointer relative">
          <div
            class="p-4 opacity-100 hover:opacity-100 bg-accent-500 absolute top-0 left-0 w-full h-full rounded-lg flex items-center"
          >
            <div>
              <h2 class="text-white lg:text-xl font-semibold">
                Application Development
              </h2>
              <p class="text-white lg:text-sm">Ravi Verma</p>
              <p class="text-white lg:text-sm mb-6">Lorem ipsum dolor sit amet</p>
              <a href="/" class="bg-white inline-flex gap-2 text-black text-sm lg:px-8 lg:py-2"
                >View Project <ArrowRightIcon/></a
              >
            </div>
          </div>
        </div>
      {/each}
    </div>
  </div>
</section>
