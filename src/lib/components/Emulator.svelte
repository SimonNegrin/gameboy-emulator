<script>

  import { onMount } from 'svelte'
  import { Gameboy } from 'gameboy-emulator'

  const gameboy = new Gameboy()

  let canvasEl

  onMount(async () => {
    const context = canvasEl.getContext('2d')
    
    gameboy.onFrameFinished(imageData => {
      context.putImageData(imageData, 0, 0)
    })

    gameboy.loadGame(await getRom())
    gameboy.apu.enableSound()
    gameboy.run()
  })

  async function getRom() {
    const response = await fetch(import.meta.env.VITE_ROM)
    return response.arrayBuffer()
  }

</script>

<canvas
  bind:this={canvasEl}
  width="160"
  height="144"
  ></canvas>

<style>

  canvas {
    image-rendering: pixelated;
    width: 500px;
  }

</style>


