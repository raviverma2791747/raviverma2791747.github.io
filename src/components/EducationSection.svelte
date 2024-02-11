<script>
  import { education_store } from "../helper/store";
  import AnimatedComponent from "./AnimatedComponent.svelte";

  let innnerWidth;

  let MAX_EDUCATION_ROW = 4;
  $: {
    if (innnerWidth < 1024) {
      MAX_EDUCATION_ROW = 2;
    } else {
      MAX_EDUCATION_ROW = 4;
    }
  }
</script>

<svelte:window bind:innerWidth={innnerWidth} />

<section class="bg-secondary py-8">
  <div class="max-w-7xl mx-auto px-4 7xl:px-0">
    <h1 class="text-white text-3xl font-semibold mb-8">My Education</h1>
    <AnimatedComponent>
      <div class="grid grid-cols-2 lg:grid-cols-4 gap-y-4">
        {#each $education_store as education, index}
          <div class="flex flex-col h-[30rem]  lg:h-80">
            {#if index % 2 == 0}
              <div
                class="h-[40%] border-l border-accent-500 p-4 relative animate-flip-up animate-once"
              >
                <div class="w-4/5">
                  <div>
                    <h2 class="text-white text-xl lg:text-2xl font-semibold">
                      {education.title}
                    </h2>
                    {#if education.specialization}
                      <p class="text-white text-sm">
                        {education.specialization}
                      </p>
                    {/if}
                    <p class="text-white text-sm">
                      {education.company} - {education.location}
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
            <div
              class="h-[20%] flex items-center animate-fade-right animate-once"
            >
              <div class="w-4/5 flex">
                <div
                  class=" text-white flex items-center font-semibold text-xs lg:text-lg ps-4 bg-accent-500 h-8 grow"
                >
                  {education.date}
                </div>
                <div class="triangle-right"></div>
              </div>
              {#if $education_store.length === 1}{:else if (index + 1) % MAX_EDUCATION_ROW == 0}{:else if index === $education_store.length - 1}{:else}
                <div class="bg-accent-500 h-[1px] w-1/5"></div>
              {/if}
            </div>
            {#if index % 2 == 1}
              <div
                class="h-[40%] border-l border-accent-500 p-4 relative animate-flip-down animate-once"
              >
                <h2 class="text-white text-xl lg:text-2xl font-semibold">
                  {education.title}
                </h2>
                {#if education.specialization}
                  <p class="text-white text-sm">{education.specialization}</p>
                {/if}
                <p class="text-white text-sm">
                  {education.company} - {education.location}
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
    </AnimatedComponent>
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
