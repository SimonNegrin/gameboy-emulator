import { SingleByteMemoryRegister } from "@/memory/memory-register";
declare class DmaTransferRegister implements SingleByteMemoryRegister {
    offset: number;
    name: string;
    get value(): number;
}
export declare const dmaTransferRegister: DmaTransferRegister;
export {};
