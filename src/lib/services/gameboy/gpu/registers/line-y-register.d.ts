import { SingleByteMemoryRegister } from "@/memory/memory-register";
export declare class LineYRegister implements SingleByteMemoryRegister {
    offset: number;
    name: string;
    get value(): number;
    set value(byte: number);
}
export declare const lineYRegister: LineYRegister;
