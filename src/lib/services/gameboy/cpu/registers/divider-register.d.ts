import { SingleByteMemoryRegister } from "@/memory/memory-register";
export declare class DividerRegister implements SingleByteMemoryRegister {
    offset: number;
    name: string;
    setValueFromCpuDivider(value: number): void;
    get value(): number;
    set value(byte: number);
}
export declare const dividerRegister: DividerRegister;
