import { SingleByteMemoryRegister } from "../../../memory/memory-register";
export declare class StereoSelectors implements SingleByteMemoryRegister {
    offset: number;
    name: string;
    get value(): number;
    get isSound4ModeOutputToSO2(): boolean;
    get isSound3ModeOutputToSO2(): boolean;
    get isSound2ModeOutputToSO2(): boolean;
    get isSound1ModeOutputToSO2(): boolean;
    get isSound4ModeOutputToSO1(): boolean;
    get isSound3ModeOutputToSO1(): boolean;
    get isSound2ModeOutputToSO1(): boolean;
    get isSound1ModeOutputToSO1(): boolean;
}
