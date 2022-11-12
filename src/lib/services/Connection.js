
export default class Connection extends EventTarget {

  #connRetryTime = 1500
  #isStarted = false
  #serviceUrl
  #ws

  constructor(serviceUrl) {
    super()
    this.#serviceUrl = serviceUrl
  }

  start() {
    if (this.#isStarted) {
      return
    }
    this.#isStarted = true
    this.#connect()
  }

  #connect() {
    if (this.#ws) {
      return
    }
    this.#ws = new WebSocket(this.#serviceUrl)
    this.#ws.addEventListener('close', () => this.#onClose())
    this.#ws.addEventListener('open', () => this.#onOpen())
    this.#ws.addEventListener('message', event => this.#onMessage(event))
  }

  #onOpen() {
    console.log('Connection has been established')
  }

  #onClose() {
    console.log(`Connection has been closed, retry connect in ${this.#connRetryTime}ms`)
    this.#ws = undefined
    setTimeout(() => this.#connect(), this.#connRetryTime)
  }

  #onMessage({ data }) {
    this.dispatchEvent(new CustomEvent('message', {
      detail: data
    }))
  }

}
