<script>
  import Emulator from "./lib/components/Emulator.svelte"
  import Qr from "./lib/components/Qr.svelte"
  import RomDrop from './lib/components/RomDrop.svelte'
  import { gamepadConnected } from "./lib/services/realTime"

  let romFile

  const onFile = ({ detail: file }) => {
    romFile = file
  }

</script>

{#if !romFile}
  <RomDrop on:file={onFile} />
{:else if $gamepadConnected}
  <Emulator {romFile} />
{:else}
  <Qr />
{/if}
