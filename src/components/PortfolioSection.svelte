<script>
  import { certificates_store, projects_store } from "../helper/store";
  import LearnnMoreModal from "./PortfolioSection/LearnnMoreModal.svelte";
  import ArrowRightIcon from "./svg/ArrowRightIcon.svelte";

  let active_tab = 0;

  let tabs = ["Projects", "Certificates"];

  let modalOpen = false;
  let modalDataIdx = -1;
</script>

<section id="portfolio" class="bg-primary-500">
  <div class="max-w-7xl mx-auto pt-10 pb-16 px-4 7xl:px-0">
    <h1 class="text-white text-3xl font-semibold mb-8">Portfolio</h1>
    <div class="flex mb-5">
      <button
        class:bg-accent-500={active_tab == 0}
        class:bg-primary-400={active_tab != 0}
        on:click={() => (active_tab = 0)}
        class=" text-white px-2 lg:px-6 py-2 rounded-tl-lg rounded-bl-lg"
      >
        Projects
      </button>
      <button
        class:bg-accent-500={active_tab == 1}
        class:bg-primary-400={active_tab != 1}
        on:click={() => (active_tab = 1)}
        class=" text-white px-2 lg:px-6 py-2 rounded-tr-lg rounded-br-lg"
      >
        Certificates
      </button>
    </div>
    <div
      class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4"
    >
      {#if active_tab == 0}
        {#each $projects_store as project, index}
          <div
            class="aspect-[4/3] sm:aspect-square bg-white rounded-lg cursor-pointer relative hover:animate-fade hover:animate-once hover:animate-duration-1000"
          >
            <img
              src={project.img}
              alt={project.title}
              class="w-full h-full object-cover rounded-lg"
            />

            <div
              class="p-4 opacity-0 hover:opacity-100 bg-accent-500 absolute top-0 left-0 w-full h-full rounded-lg flex flex-col"
            >
              <h2 class="text-white lg:text-xl font-semibold">
                {project.title}
              </h2>
              <p class="text-white lg:text-sm">{project.tech.join(", ")}</p>
              <p class="text-white lg:text-sm mb-6 line-clamp-2">
                {project.desc}
              </p>
              <div class="flex gap-2 mt-auto">
                <button
                  class="bg-white inline-flex gap-2 text-black text-sm px-2 py-2 items-center"
                  on:click={() => {
                    modalDataIdx = index;
                    modalOpen = true;
                  }}>Learn More</button
                >
                <a
                  href={project.url}
                  class="bg-white inline-flex gap-2 text-black text-sm px-2 py-2 items-center"
                  target="_blank">View Project <ArrowRightIcon /></a
                >
              </div>
            </div>
          </div>
        {/each}
      {:else if active_tab == 1}
        {#each $certificates_store as certificate, index}
          <div class="aspect-[4/3] sm:aspect-square rounded-lg cursor-pointer">
            <!-- <img
              src={certificate.img}
              alt={certificate.title}
              class="w-full h-full object-cover rounded-lg"
            /> -->

            <div
              class="p-4 bg-accent-500 w-full h-full rounded-lg flex flex-col"
            >
              <h2 class="text-white lg:text-xl font-semibold mb-2">
                {certificate.title}
              </h2>
              <p class="text-accent-500 w-fit font-semibold text-sm bg-white rounded-full p-1 px-2 mt-auto">
                {certificate.type}
              </p>
              <p class="text-white ">{certificate.org}</p>
              <p class="text-white ">
                {certificate.date}
              </p>
              <div class="flex gap-2 mt-2">
                <!-- <button
                  class="bg-white inline-flex gap-2 text-black text-sm px-2 py-2 items-center"
                  on:click={() => {
                    modalDataIdx = index;
                    modalOpen = true;
                  }}>Learn More</button
                > -->
                {#if certificate.url}
                <a
                  href={certificate.url}
                  class="bg-white inline-flex gap-2 text-black text-sm px-2 py-2 items-center"
                  target="_blank">Verify <ArrowRightIcon /></a
                >
                {/if}
              </div>
            </div>
          </div>
        {/each}
      {/if}
    </div>
  </div>
</section>

<LearnnMoreModal
  class="p-6 bg-secondary shadow-lg rounded-lg"
  bind:open={modalOpen}
>
  {#if modalDataIdx != -1}
    <div class="bg-secondary text-white">
      <h1 class="text-2xl mb-4">{$projects_store[modalDataIdx].title}</h1>
      <div class=" bg-white rounded-lg cursor-pointer">
        <img
          src={$projects_store[modalDataIdx].img}
          alt={$projects_store[modalDataIdx].title}
          class="w-full h-full object-cover rounded-lg mb-4"
        />
      </div>
      <p class="mb-4">{$projects_store[modalDataIdx].desc}</p>
      <p class="flex gap-2 mb-4 flex-wrap">
        {#each $projects_store[modalDataIdx].tech as tech}
          <span class="inline-block bg-accent-500 px-2 py-1 rounded-full"
            >{tech}</span
          >
        {/each}
      </p>
      <a
        href={$projects_store[modalDataIdx].url}
        class="bg-white inline-flex gap-2 text-black text-sm px-2 py-2 items-center"
        target="_blank">View Project <ArrowRightIcon /></a
      >
    </div>
  {:else}{/if}
</LearnnMoreModal>
