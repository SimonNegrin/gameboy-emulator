<script>

  import { onMount } from 'svelte'
  import { toCanvas } from 'qrcode'
  import { emuId } from '../services/realTime'

  let canvasEl

  onMount(() => {
    const url = new URL('/gamepad', import.meta.env.VITE_REAL_TIME_SERVICE)
    url.searchParams.set('emuId', emuId)
    console.log(`Gamepad url: ${url.toString()}`)
    toCanvas(canvasEl, url.toString())
  })

</script>

<canvas
  bind:this={canvasEl}
  ></canvas>