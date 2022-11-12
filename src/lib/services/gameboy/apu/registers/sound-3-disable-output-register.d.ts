import { SingleByteMemoryRegister } from "../../memory/memory-register";
export declare class Sound3DisableOutputRegister implements SingleByteMemoryRegister {
    offset: number;
    name: string;
    get value(): number;
    get isOutputEnabled(): boolean;
    set isOutputEnabled(value: boolean);
}
export declare const sound3DisableOutputRegister: Sound3DisableOutputRegister;
