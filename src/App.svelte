<script>
  import Emulator from "./lib/components/Emulator.svelte"
  import Qr from "./lib/components/Qr.svelte"
  import { gamepadConnected } from "./lib/services/realTime"

</script>

{#if $gamepadConnected}
  <Emulator />
{:else}
  <Qr />
{/if}
