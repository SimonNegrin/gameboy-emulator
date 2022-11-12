import { SingleByteMemoryRegister } from "@/memory/memory-register";
export declare class Sound3LengthRegister implements SingleByteMemoryRegister {
    offset: number;
    name: string;
    get value(): number;
}
export declare const sound3LengthRegister: Sound3LengthRegister;
