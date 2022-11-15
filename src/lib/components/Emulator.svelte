<script>

  import { Gameboy } from '../services/gameboy/gameboy.js'
  import { onMount, onDestroy } from 'svelte'
  import { gamepadState } from '../services/realTime'

  export let romFile

  const gameboy = new Gameboy()

  let canvasEl

  $: updateGameboyInput($gamepadState)

  onMount(() => {
    const context = canvasEl.getContext('2d')
    
    gameboy.onFrameFinished(imageData => {
      context.putImageData(imageData, 0, 0)
    })

    gameboy.loadGame(romFile)
    // gameboy.apu.enableSound()
    gameboy.run()
  })

  onDestroy(() => {
    gameboy.stop()
  })

  function updateGameboyInput(gamepadState) {
    gameboy.input.isPressingUp = gamepadState.up
    gameboy.input.isPressingDown = gamepadState.down
    gameboy.input.isPressingLeft = gamepadState.left
    gameboy.input.isPressingRight = gamepadState.right
    gameboy.input.isPressingSelect = gamepadState.select
    gameboy.input.isPressingStart = gamepadState.start
    gameboy.input.isPressingA = gamepadState.actionA
    gameboy.input.isPressingB = gamepadState.actionB
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


