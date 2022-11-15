<script>

  import { onMount } from 'svelte'
  import { toCanvas } from 'qrcode'
  import { emuId } from '../services/realTime'

  let canvasEl

  onMount(() => {
    const url = new URL(import.meta.env.VITE_GAMEPAD)
    url.searchParams.set('emuId', emuId)
    toCanvas(canvasEl, url.toString(), {
      width: 300,
      height: 300,
    })
    console.log(`Gamepad url: ${url}`)
  })

</script>

<canvas
  bind:this={canvasEl}
  ></canvas>