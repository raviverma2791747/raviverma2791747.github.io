<script>
  let experiences = [
    {
      title: "Software Engineer",
      company: "Google",
      location: "Mountain View, CA",
      date: "2018 - Present",
    },
    {
      title: "Software Engineer",
      company: "Google",
      location: "Mountain View, CA",
      date: "2018 - Present",
    },
    {
      title: "Software Engineer",
      company: "Google",
      location: "Mountain View, CA",
      date: "2018 - Present",
    },
    {
      title: "Software Engineer",
      company: "Google",
      location: "Mountain View, CA",
      date: "2018 - Present",
    },
  ];
  const MAX_EXPERIENCE_ROW = 4;
</script>

<section class="bg-secondary py-8">
  <div class="max-w-7xl mx-auto px-4 7xl:px-0" >
    <h1 class="text-white text-3xl font-semibold mb-8">My Experience</h1>
    <div class="grid grid-cols-2 lg:grid-cols-4 gap-y-4">
      {#each experiences as experience, index}
        <div class="flex flex-col h-80">
          {#if index % 2 == 0}
            <div class="h-[40%] border-l border-accent-500 p-4 relative">
              <div class="w-4/5">
                <div>
                  <h2 class="text-white text-2xl font-semibold">
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
                class=" text-white flex items-center font-semibold text-lg ps-4 bg-accent-500 h-8 grow"
              >
                {experience.date}
              </div>
              <div class="triangle-right"></div>
            </div>
            {#if (index == 0 && experiences.length != 1) || (experiences.length - 1 != index && index % (MAX_EXPERIENCE_ROW - 1) != 0)}
              <div class="bg-accent-500 h-[1px] w-1/5"></div>
            {/if}
          </div>
          {#if index % 2 == 1}
            <div class="h-[40%] border-l border-accent-500 p-4 relative">
              <h2 class="text-white text-2xl font-semibold">
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
</style>
