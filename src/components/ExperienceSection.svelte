<script>
  import { experience_store } from "../helper/store";

  let innnerWidth;

  let MAX_EXPERIENCE_ROW = 4;
  $: {
    if (innnerWidth < 1024) {
      MAX_EXPERIENCE_ROW = 2;
    } else {
      MAX_EXPERIENCE_ROW = 4;
    }
  }
</script>

<svelte:window bind:innerWidth={innnerWidth} />

<section class="bg-secondary py-8">
  <div class="max-w-7xl mx-auto px-4 7xl:px-0">
    <h1 class="text-white text-3xl font-semibold mb-8">My Experience</h1>
    <div class="grid grid-cols-2 lg:grid-cols-4 gap-y-4">
      {#each $experience_store as experience, index}
        <div class="flex flex-col h-96 lg:h-80">
          {#if index % 2 == 0}
            <div class="h-[40%] border-l border-accent-500 p-4 relative">
              <div class="w-4/5">
                <div>
                  <h2 class="text-white text-xl lg:text-2xl font-semibold">
                    {experience.title}
                  </h2>
                  <p class="text-white text-sm">
                    {experience.company} - {experience.location}
                  </p>
                </div>
              </div>

              <div
                class="bg-accent-500 absolute top-0 left-0 translate-x-[-50%] h-2 w-2 rounded-full"
              ></div>
              <div
                class="bg-accent-500 absolute bottom-0 left-0 translate-x-[-50%] h-2 w-2 rounded-full"
              ></div>
            </div>
          {:else}
            <div class="h-[40%]"></div>
          {/if}
          <div class="h-[20%] flex items-center">
            <div class="w-4/5 flex">
              <div
                class=" text-white flex items-center font-semibold text-xs lg:text-lg ps-4 bg-accent-500 h-8 grow"
              >
                {experience.date}
              </div>
              <div class="triangle-right"></div>
            </div>
            {#if $experience_store.length === 1}{:else if (index + 1) % MAX_EXPERIENCE_ROW == 0}{:else if index === $experience_store.length - 1}{:else}
              <div class="bg-accent-500 h-[1px] w-1/5"></div>
            {/if}
          </div>
          {#if index % 2 == 1}
            <div class="h-[40%] border-l border-accent-500 p-4 relative">
              <h2 class="text-white text-xl lg:text-2xl font-semibold">
                {experience.title}
              </h2>
              <p class="text-white text-sm">
                {experience.company} - {experience.location}
              </p>
              <div
                class="bg-accent-500 absolute top-0 left-0 translate-x-[-50%] h-2 w-2 rounded-full"
              ></div>
              <div
                class="bg-accent-500 absolute bottom-0 left-0 translate-x-[-50%] h-2 w-2 rounded-full"
              ></div>
            </div>
          {:else}
            <div class="h-[40%]"></div>
          {/if}
        </div>
      {/each}
    </div>
  </div>
</section>

<style>
  .triangle-right {
    width: 0px;
    height: 0px;
    border-top: 16px solid transparent;
    border-left: 32px solid #d6223b;
    border-bottom: 16px solid transparent;
  }

  /* @media (max-width: 768px) {
    .triangle-right {
      width: 0px;
    height: 0px;
    border-top: 20px solid transparent;
    border-left: 40px solid #d6223b;
    border-bottom: 20px solid transparent;
    }
  } */
</style>
