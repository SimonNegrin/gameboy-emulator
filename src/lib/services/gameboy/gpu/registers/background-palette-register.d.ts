import { SingleByteMemoryRegister } from "@/memory/memory-register";
declare class BackgroundPaletteRegister implements SingleByteMemoryRegister {
    offset: number;
    name: string;
    get value(): number;
    set value(byte: number);
    get backgroundPalette(): number[];
}
export declare const backgroundPaletteRegister: BackgroundPaletteRegister;
export {};
