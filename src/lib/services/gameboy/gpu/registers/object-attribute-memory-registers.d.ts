import { MultiByteMemoryRegister } from "@/memory/memory-register";
export declare class ObjectAttributeMemoryRegister implements MultiByteMemoryRegister {
    static StartOffset: number;
    static EndOffset: number;
    static BytesPerRegister: number;
    offset: number;
    name: string;
    constructor(index: number);
    getValueAt(index: number): number;
    get yPosition(): number;
    get xPosition(): number;
    get characterCode(): number;
    get paletteNumber(): number;
    get isFlippedHorizontal(): boolean;
    get isFlippedVertical(): boolean;
    get isBehindBackground(): boolean;
}
export declare const objectAttributeMemoryRegisters: ObjectAttributeMemoryRegister[];
