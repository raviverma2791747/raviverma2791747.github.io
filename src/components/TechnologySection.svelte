<script>
  import AngularIcon from "./svg/AngularIcon.svelte";
  import AwsIcon from "./svg/AwsIcon.svelte";
  import BootstrapIcon from "./svg/BootstrapIcon.svelte";
  import CplusplusIcon from "./svg/CplusplusIcon.svelte";
  import ExpressIcon from "./svg/ExpressIcon.svelte";
  import FlutterIcon from "./svg/FlutterIcon.svelte";
  import HtmlIcon from "./svg/HtmlIcon.svelte";
  import JavascriptIcon from "./svg/JavascriptIcon.svelte";
  import MongodbIcon from "./svg/MongodbIcon.svelte";
  import NextIcon from "./svg/NextIcon.svelte";
  import NodeIcon from "./svg/NodeIcon.svelte";
  import PythonIcon from "./svg/PythonIcon.svelte";
  import ReactIcon from "./svg/ReactIcon.svelte";
  import SvelteIcon from "./svg/SvelteIcon.svelte";
  import TailwindIcon from "./svg/Tailwindicon.svelte";
  import VscodeIcon from "./svg/VscodeIcon.svelte";
  import CssIcon from "./svg/CssIcon.svelte";
  import DjangoIcon from "./svg/DjangoIcon.svelte";
  import PostgresIcon from "./svg/PostgresIcon.svelte";
</script>

<section id="skill" class="bg-primary-500">
  <div class="max-w-7xl mx-auto pt-10 pb-10 px-4 7xl:px-0">
    <h1 class="text-white text-3xl font-semibold mb-8">
      Skills & Technologies
    </h1>

    <div class="mb-8">
      <h2 class="text-white text-2xl font-semibold mb-4">Languages</h2>
      <div class="flex flex-wrap gap-8">
        <PythonIcon class="h-16 hover:scale-110" />
        <CplusplusIcon class="h-16 hover:scale-110" />
        <JavascriptIcon class="h-16 hover:scale-110" />
        <HtmlIcon class="h-16 hover:scale-110" />
        <CssIcon class="h-16 hover:scale-110" />
      </div>
    </div>

    <div class="mb-8">
      <h2 class="text-white text-2xl font-semibold mb-4">
        Frontend Frameworks
      </h2>
      <div class="flex flex-wrap gap-8">
        <ReactIcon class="h-16 hover:scale-110" />
        <BootstrapIcon class="h-16 hover:scale-110" />
        <TailwindIcon class="h-16 hover:scale-110" />
        <NextIcon class="h-16 hover:scale-110" />
        <SvelteIcon class="h-16 hover:scale-110" />
        <AngularIcon class="h-16 hover:scale-110" />
        <FlutterIcon class="h-16 hover:scale-110" />
      </div>
    </div>

    <div class="mb-8">
      <h2 class="text-white text-2xl font-semibold mb-4">
        Backend Frameworks & Tools
      </h2>
      <div class="flex flex-wrap gap-8">
        <ExpressIcon class="h-16 hover:scale-110" />
        <DjangoIcon class="h-16 hover:scale-110" />
        <NodeIcon class="h-16 hover:scale-110" />
        <AwsIcon class="h-16 hover:scale-110" />
      </div>
    </div>

    <div class="mb-8">
      <h2 class="text-white text-2xl font-semibold mb-4">Databases</h2>
      <div class="flex flex-wrap gap-8">
        <MongodbIcon class="h-16 hover:scale-110" />
        <PostgresIcon class="h-16 hover:scale-110" />
      </div>
    </div>

    <div class="mb-8">
        <h2 class="text-white text-2xl font-semibold mb-4">Tools</h2>
        <div class="flex flex-wrap gap-8">
          <VscodeIcon class="h-16 hover:scale-110" />
        </div>
      </div>
  </div>
</section>
