<script>
  import WhatsappIcon from "./svg/WhatsappIcon.svelte";
  import { social_store } from "../helper/store";
  import EnvelopeIcon from "./svg/EnvelopeIcon.svelte";

  export let form;
</script>

<section id="contact" class="bg-primary-500">
  <div class="max-w-7xl mx-auto py-20 px-4 7xl:px-0">
    <div class="grid grid-cols-1 lg:grid-cols-2 gap-8">
      <div class="col-span-1">
        <h1 class="text-white text-3xl font-semibold">Contact</h1>
        <p class="text-white text-sm mb-8">
          If you have any questions, please feel free to contact me.

        </p>
        <div class="flex gap-4 mb-4">
          <div>
            <div
              class="h-10 w-10 rounded-full flex justify-center items-center bg-accent-500 text-white"
            >
              <WhatsappIcon />
            </div>
          </div>
          <div class="grow">
            <p class="text-gray-500 text-sm">Message Me</p>
            <p class="text-white">{$social_store.phone}</p>
          </div>
        </div>
        <div class="flex gap-4 mb-4">
          <div>
            <div class="h-10 w-10 rounded-full flex justify-center items-center text-white  bg-accent-500">
              <EnvelopeIcon/>
            </div>
          </div>
          <div class="grow">
            <p class="text-gray-500 text-sm">Email</p>
            <p class="text-white">{$social_store.email}</p>
          </div>
        </div>
        <!-- <div class="flex gap-4 mb-4">
          <div>
            <div class="h-10 w-10 rounded-full bg-accent-500"></div>
          </div>
          <div class="grow">
            <p class="text-gray-500 text-sm">Address</p>
            <p class="text-white">info@coder.com</p>
          </div>
        </div> -->
      </div>
      <div class="col-span-1">
        <h1 class="text-white text-3xl font-semibold mb-8">Drop a Line</h1>
        <form method="POST">
          <div class="grid grid-cols-2 mb-8 gap-6">
            <div>
              <input
                name="name"
                placeholder="Name"
                type="text"
                class="border border-gray-500 rounded bg-primary-500 text-white w-full p-4 outline-none focus:border-accent-500 focus:border-2"
                required
              />
            </div>
            <div>
              <input
                name="email"
                placeholder="Email"
                type="email"
                class="border border-gray-500 rounded bg-primary-500 text-white w-full p-4 outline-none focus:border-accent-500 focus:border-2"
                required
              />
            </div>
          </div>
          <div class="mb-6">
            <textarea
              name="message"
              placeholder="Message"
              class="border border-gray-500 rounded bg-primary-500 text-white w-full p-4 outline-none focus:border-accent-500 focus:border-2"
            />
          </div>
          <button type="submit" class="bg-accent-500 text-white px-10 py-3 rounded mt-4">
            Submit
          </button>
        </form>
      </div>
    </div>
  </div>
</section>
