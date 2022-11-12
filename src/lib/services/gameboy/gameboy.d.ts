import { GPU } from "@/gpu/gpu";
import { CPU } from "@/cpu/cpu";
import { APU } from "@/apu/apu";
export declare class Gameboy {
    cpu: CPU;
    gpu: GPU;
    apu: APU;
    memory: import("@/memory/memory").Memory;
    private frameFinishedCallback?;
    fps: number;
    input: import("@/input/input").Input;
    controllerManager: import("@/input/controller-manager").ControllerManager;
    keyboardManager: import("@/input/keyboard-manager").KeyboardManager;
    private maxFps;
    private interval;
    private cycles;
    private previousTime;
    private isRunning;
    run(): void;
    stop(): void;
    private runFrame;
    onFrameFinished(callback: Function): void;
    loadGame(arrayBuffer: ArrayBuffer): void;
    setCartridgeSaveRam(sramArrayBuffer: ArrayBuffer): void;
    getCartridgeSaveRam(): ArrayBuffer | undefined;
    setOnWriteToCartridgeRam(onSramWrite: Function): void;
    get cartridge(): import("./cartridge/cartridge").Cartridge | undefined;
}
