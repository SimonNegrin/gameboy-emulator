import { writable } from "svelte/store"
import Connection from './Connection'

const PACKET_GAMEPAD_CONNECTED    = 1
const PACKET_GAMEPAD_DISCONNECTED = 2
const PACKET_GAMEPAD_STATE        = 3

// export const emuId = window.crypto.randomUUID()
export const emuId = '1'
export const gamepadConnected = writable(false)
export const gamepadState = writable({
  up          : false,
  bottom      : false,
  left        : false,
  right       : false,
  actionA     : false,
  actionB     : false,
  start       : false,
  select      : false,
})

const packetRouter = {
  [PACKET_GAMEPAD_CONNECTED]    : () => gamepadConnected.set(true),
  [PACKET_GAMEPAD_DISCONNECTED] : () => gamepadConnected.set(false),
  [PACKET_GAMEPAD_STATE]        : data => updateGamepadState(data),
}

const connection = createConnection(emuId)
connection.start()

// @ts-ignore
connection.addEventListener('message', async ({ detail }) => {
  const data = new Uint8Array(await detail.arrayBuffer())
  if (data[0] in packetRouter) {
    packetRouter[data[0]](data)
  }
})

function createConnection(emuId) {
  const url = new URL(`/emulator/${emuId}`, import.meta.env.VITE_REAL_TIME_SERVICE)
  return new Connection(url.toString())
}

function updateGamepadState(data) {
  const byte = data[1]
  gamepadState.set({
    up          : Boolean(byte & 1 << 7),
    bottom      : Boolean(byte & 1 << 6),
    left        : Boolean(byte & 1 << 5),
    right       : Boolean(byte & 1 << 4),
    actionA     : Boolean(byte & 1 << 3),
    actionB     : Boolean(byte & 1 << 2),
    start       : Boolean(byte & 1 << 1),
    select      : Boolean(byte & 1),
  })
}
