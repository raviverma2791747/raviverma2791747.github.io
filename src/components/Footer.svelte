<script>
  import LinkedinIcon from "./svg/LinkedinIcon.svelte";
  import GithubIcon from "./svg/GithubIcon.svelte";
  import TwitterIcon from "./svg/TwitterIcon.svelte";
</script>

<footer class="bg-secondary">
  <div class="flex items-center justify-center py-10 border-b border-gray-300 px-4 7xl:px-0">
    <div
      class="flex flex-col items-center justify-center rounded-full border border-dashed text-white h-64 w-64"
    >
      <h1 class="text-3xl font-semibold">Lets Connect!</h1>
      <p class="mb-4">ravivermaj488[at]gmail.com</p>
      <div class="flex gap-4">
        <a class="h-6 w-6" href="/">
          <LinkedinIcon />
        </a>
        <a class="h-6 w-6" href="/">
          <GithubIcon />
        </a>
        <a class="h-6 w-6" href="/">
          <TwitterIcon />
        </a>
      </div>
    </div>
  </div>
  <div class="text-white text-center p-2 text-sm">
    <p>&copy; 2023 Ravi Verma | All Rights Reserved</p>
  </div>
</footer>
