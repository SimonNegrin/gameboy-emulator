import { SingleByteMemoryRegister } from "@/memory/memory-register";
declare class LcdControlRegister implements SingleByteMemoryRegister {
    offset: number;
    name: string;
    get value(): number;
    set value(byte: number);
    get isBackgroundDisplayOn(): boolean;
    get isObjOn(): boolean;
    get objectHeight(): 8 | 16;
    get backgroundCodeArea(): number;
    get backgroundCharacterData(): number;
    get windowCharacterData(): number;
    get isWindowingOn(): boolean;
    get windowCodeArea(): number;
    get windowTileMapStartAddress(): 38912 | 39936;
    get backgroundTileMapStartAddress(): 38912 | 39936;
    get backgroundCharacterDataStartAddress(): 32768 | 34816;
    get isLCDControllerOperating(): boolean;
}
export declare const lcdControlRegister: LcdControlRegister;
export {};
