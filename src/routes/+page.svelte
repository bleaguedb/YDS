<script>
  import Team from "../components/Top/Team.svelte";
  import init, {greet} from "../rust/hello-wasm/pkg/hello_wasm.js";
  import {onMount} from "svelte";

  onMount(async()=>{

    await init()
      .then(() => {
        greet("WebAssembly")
      });
    });
</script>

<Team/>