import { SingleByteMemoryRegister } from "../../memory/memory-register";
export declare class Sound3OutputLevelRegister implements SingleByteMemoryRegister {
    offset: number;
    name: string;
    get value(): number;
    get outputLevel(): number;
}
export declare const sound3OutputLevelRegister: Sound3OutputLevelRegister;
