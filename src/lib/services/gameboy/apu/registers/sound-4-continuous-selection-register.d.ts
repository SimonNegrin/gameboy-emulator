import { SingleByteMemoryRegister } from "@/memory/memory-register";
export declare class Sound4ContinuousSelectionRegister implements SingleByteMemoryRegister {
    offset: number;
    name: string;
    get value(): number;
    get isInitialize(): boolean;
    set isInitialize(value: boolean);
    get isContinuousSelection(): boolean;
}
export declare const sound4ContinuousSelectionRegister: Sound4ContinuousSelectionRegister;
