import { CpuRegister } from "@/cpu/internal-registers/cpu-register";
export declare class CpuFlagRegisterPair extends CpuRegister {
    get value(): number;
    set value(newValue: number);
}
