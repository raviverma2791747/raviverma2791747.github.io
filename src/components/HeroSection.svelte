<script>
  import GithubIcon from "./svg/GithubIcon.svelte";
  import LinkedinIcon from "./svg/LinkedinIcon.svelte";
  import TwitterIcon from "./svg/TwitterIcon.svelte";
</script>

<section class="relative bg-primary-500 lg:h-[calc(100vh-104px)] ">
  <div class="max-w-7xl mx-auto h-full px-4 7xl:px-0">
    <div class="grid grid-cols-1  lg:grid-cols-2 h-full">
      <div class="flex flex-col justify-center py-10 pr-6 lg:pr-0">
        <div class="block bg-accent-600 text-white w-fit py-2 px-4 mb-2">
          Welcome! I'M
        </div>
        <h1 class="text-white text-4xl font-semibold mb-2">Ravi Verma</h1>
        <p class="text-white text-lg mb-6">Software Engineer</p>
        <p class="text-white text-sm">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum a eum
          officiis nesciunt, praesentium ipsam! Ad asperiores modi ea, quaerat
          illo harum necessitatibus at iusto totam voluptate autem laborum
          nobis.
        </p>
      </div>
      <div class="relative self-end h-full">
        <!-- <div
          class="z-10 absolute top-[50%] translate-y-[-50%] left-[50%] translate-x-[-50%] rounded-full bg-accent-500 w-64 h-64"
        ></div> -->
        <div class="aspect-auto h-full">
          <img class=" h-full mx-auto" alt="img" src="assets/images/img.png" />
        </div>
      </div>
    </div>
  </div>
  <div
    class="flex flex-col gap-6 pr-4 absolute top-[50%] translate-y-[-50%] right-0 text-accent-500"
  >
    <p class="font-semibold text-lg [writing-mode:vertical-lr]">
      FOLLOW ME ON:
    </p>
    <a href="https://www.linkedin.com/in/reachravi/" target="_blank">
      <LinkedinIcon />
    </a>
    <a href="https://github.com/raviverma2791747" target="_blank">
      <GithubIcon />
    </a>
    <a href="https://github.com/raviverma2791747" target="_blank">
      <TwitterIcon />
    </a>
  </div>
</section>
