<script>
  import { createEventDispatcher } from 'svelte'

  let dragenter = false

  const dispatch = createEventDispatcher()

  const onDragenter = () => {
    dragenter = true
  }
  
  const onDragleave = () => {
    dragenter = false
  }

  const onDrop = (event) => {
    if (!event.dataTransfer?.items.length) {
      return
    }
    const [item] = event.dataTransfer.items
    const file = item.getAsFile()
    
    if (!file.name.endsWith('.gb')) {
      return
    }
    dispatch('file', file)
  }

</script>

<div
  class="rom-drop"
  class:dragenter
  on:dragover|preventDefault
  on:dragenter={onDragenter}
  on:dragleave={onDragleave}
  on:drop|preventDefault={onDrop}
  >
  <span>Drop a Gameboy ROM file</span>
</div>

<style lang="scss">

  .rom-drop {
    width: 400px;
    height: 400px;
    border: 2px dashed #aaa;
    border-radius: 20px;
    display: grid;
    place-content: center;

    &.dragenter {
      background-color: #444;
    }
  }

</style>
