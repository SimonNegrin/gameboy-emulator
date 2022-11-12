import { SingleByteMemoryRegister } from "@/memory/memory-register";
export declare class WindowXRegister implements SingleByteMemoryRegister {
    offset: number;
    name: string;
    get value(): number;
    set value(byte: number);
}
export declare const windowXRegister: WindowXRegister;
