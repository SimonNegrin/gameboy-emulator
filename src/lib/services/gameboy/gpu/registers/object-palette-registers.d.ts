import { SingleByteMemoryRegister } from "@/memory/memory-register";
export declare class ObjectPaletteRegister implements SingleByteMemoryRegister {
    static StartOffset: number;
    offset: number;
    name: string;
    constructor(index: number);
    get value(): number;
    set value(byte: number);
    get palette(): number[];
}
export declare const objectPaletteRegisters: ObjectPaletteRegister[];
