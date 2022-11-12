import { SingleByteMemoryRegister } from "../../../memory/memory-register";
export declare class OutputLevelRegister implements SingleByteMemoryRegister {
    offset: number;
    name: string;
    get value(): number;
    get isVInSynthesizingWithSO2(): boolean;
    get SO2OutputLevel(): number;
    get isVInSynthesizingWithSO1(): boolean;
    get SO1OutputLevel(): number;
}
