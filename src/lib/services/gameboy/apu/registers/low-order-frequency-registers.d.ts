import { SingleByteMemoryRegister } from "../../memory/memory-register";
export declare class LowOrderFrequencyRegisters implements SingleByteMemoryRegister {
    offset: number;
    name: string;
    constructor(offset: number, name: string);
    get value(): number;
}
export declare const sound1LowOrderFrequencyRegister: LowOrderFrequencyRegisters;
export declare const sound2LowOrderFrequencyRegister: LowOrderFrequencyRegisters;
export declare const sound3LowOrderFrequencyRegister: LowOrderFrequencyRegisters;
