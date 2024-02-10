<script>
  import { services_store } from "../helper/store";
  import AnimatedComponent from "./AnimatedComponent.svelte";
</script>

<section id="services" class="bg-secondary">
  <div class="max-w-7xl mx-auto py-10 px-4 7xl:px-0">
    <h1 class="text-white text-3xl font-semibold mb-8">Services</h1>
    <AnimatedComponent>
      <div class="grid grid-cols-1 sm:grid-cols-2  lg:grid-cols-4 gap-4">
        {#each $services_store as service}
          <div
            class="bg-primary-500 p-8 rounded-lg hover:scale-105 cursor-pointer flex flex-col items-start animate-rotate-y"
          >
            <h1 class="text-white text-xl font-semibold mb-4">
              {service.title}
            </h1>
            <p class="text-white mb-4">{service.desc}</p>
            <p class="text-white text-2xl font-bold mt-auto">{service.price}</p>
            <p class="text-white mb-4">{service.price_desc}</p>
            <a
              href="#contact"
              class="text-white bg-accent-500 px-4 py-2 rounded-full">Contact</a
            >
          </div>
        {/each}
      </div>
    </AnimatedComponent>
  </div>
</section>
