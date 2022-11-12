import { SingleByteMemoryRegister } from "@/memory/memory-register";
declare class InterruptEnableRegister implements SingleByteMemoryRegister {
    offset: number;
    name: string;
    get value(): number;
    set value(byte: number);
}
export declare const interruptEnableRegister: InterruptEnableRegister;
export {};
