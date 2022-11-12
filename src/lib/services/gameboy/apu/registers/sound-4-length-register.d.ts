import { SingleByteMemoryRegister } from "@/memory/memory-register";
export declare class Sound4LengthRegister implements SingleByteMemoryRegister {
    offset: number;
    name: string;
    get value(): number;
    get soundLength(): number;
}
export declare const sound4LengthRegister: Sound4LengthRegister;
