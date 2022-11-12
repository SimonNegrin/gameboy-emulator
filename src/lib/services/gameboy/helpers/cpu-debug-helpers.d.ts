import { CPU } from "@/cpu/cpu";
export declare const instructionCache: string[];
export declare const registerStateCache: string[];
export declare function updateInstructionCache(instruction: string, programCounterVal: number, af: number, bc: number, de: number, hl: number, sp: number): void;
export declare function updateRegisterStateCache(cpu: CPU): void;
