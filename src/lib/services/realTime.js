import { writable } from "svelte/store"
import Connection from './Connection'

// export const emuId = window.crypto.randomUUID()
export const emuId = '1'
export const gamepadConnected = writable(false)
export const gamepadState = writable({
  joystickDir : null,
  actionA     : false,
  actionB     : false,
  start       : false,
  select      : false,
})

const connection = createConnection(emuId)
connection.start()

connection.addEventListener('message', data => {
  console.log({ data })
})

function createConnection(emuId) {
  const url = new URL(`/emulator/${emuId}`, import.meta.env.VITE_REAL_TIME_SERVICE)
  return new Connection(url.toString())
}
