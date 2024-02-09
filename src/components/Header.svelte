<script>
  import HamburgermenuIcon from "./svg/HamburgermenuiIcon.svelte";
</script>

<header class="bg-primary-500 text-white">
  <div
    class="max-w-7xl mx-auto flex items-center gap-8 py-4 lg:py-8 px-4 7xl:px-0"
  >
    <a href="/" class="block text-accent-500 text-2xl font-semibold mr-auto"
      >Ravi Verma</a
    >
    <nav class="lg:flex items-center gap-8 hidden">
      <a href="#about">About Me</a>
      <a href="#services">Services</a>
      <a href="#portfolio">Portfolio</a>
      <a href="#contact">Contact</a>
    </nav>
    <!-- <button class="bg-accent-500 text-white px-4 py-2 rounded"
      >Download CV</button
    > -->
    <button class="text-accent-500 lg:hidden"><HamburgermenuIcon /></button>
  </div>
</header>

<div class="fixed top-0 left-0 bg-accent-500 z-50 h-screen w-screen">
  <nav class="flex flex-col items-center gap-8 justify-center h-full text-white text-lg">
    <a href="#about">About Me</a>
    <a href="#services">Services</a>
    <a href="#portfolio">Portfolio</a>
    <a href="#contact">Contact</a>
  </nav>
</div>
