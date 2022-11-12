import { writable } from "svelte/store"

export const emuId = window.crypto.randomUUID()
export const gamepadConnected = writable(false)

