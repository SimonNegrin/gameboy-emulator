import { SingleByteMemoryRegister } from "@/memory/memory-register";
import { LcdStatusMode } from "@/gpu/registers/lcd-status-mode.enum";
declare class LcdStatusRegister implements SingleByteMemoryRegister {
    offset: number;
    name: string;
    get value(): number;
    set value(byte: number);
    get mode(): LcdStatusMode;
    set mode(newMode: LcdStatusMode);
    get isLineYCompareMatching(): boolean;
    set isLineYCompareMatching(isMatching: boolean);
    get isHBlankInterruptSelected(): number;
    get isLineYMatchingInterruptSelected(): number;
}
export declare const lcdStatusRegister: LcdStatusRegister;
export {};
