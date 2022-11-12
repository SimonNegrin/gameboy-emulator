import { SingleByteMemoryRegister } from "@/memory/memory-register";
interface InterruptFlags {
    isVerticalBlanking: boolean;
    isLCDStatus: boolean;
    isTimerOverflow: boolean;
    isSerialTransferCompletion: boolean;
    isP10P13NegativeEdge: boolean;
}
declare class InterruptRequestRegister implements SingleByteMemoryRegister {
    offset: number;
    name: string;
    get value(): number;
    set value(byte: number);
    triggerVBlankInterruptRequest(): void;
    triggerLcdStatusInterruptRequest(): void;
    triggerTimerInterruptRequest(): void;
    clearVBlankInterruptRequest(): void;
    clearLcdStatusInterruptRequest(): void;
    clearTimerOverflowInterruptRequest(): void;
    clearSerialTransferInterruptRequest(): void;
    clearP10P13NegativeEdgeInterruptRequest(): void;
    getInterruptFlags(flagValue: number): InterruptFlags;
}
export declare const interruptRequestRegister: InterruptRequestRegister;
export {};
