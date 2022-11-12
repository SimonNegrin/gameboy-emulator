import { SingleByteMemoryRegister } from "../../memory/memory-register";
export declare class HighOrderFrequencyRegister implements SingleByteMemoryRegister {
    offset: number;
    name: string;
    constructor(offset: number, name: string);
    get value(): number;
    get highOrderFrequencyRegister(): number;
    get isInitialize(): boolean;
    set isInitialize(value: boolean);
    get isContinuousSelection(): boolean;
    get highOrderFrequencyData(): number;
}
export declare const sound1HighOrderFrequencyRegister: HighOrderFrequencyRegister;
export declare const sound2HighOrderFrequencyRegister: HighOrderFrequencyRegister;
export declare const sound3HighOrderFrequencyRegister: HighOrderFrequencyRegister;
