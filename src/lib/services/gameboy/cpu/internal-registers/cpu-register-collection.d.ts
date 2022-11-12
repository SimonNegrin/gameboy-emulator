import { CpuRegister } from "@/cpu/internal-registers/cpu-register";
import { CpuFlagRegister } from "@/cpu/internal-registers/cpu-flag-register";
export declare class CpuRegisterCollection {
    private registersBuffer;
    private registersView;
    baseRegisters: CpuRegister[];
    registerPairs: CpuRegister[];
    F: CpuFlagRegister;
    A: CpuRegister;
    C: CpuRegister;
    B: CpuRegister;
    E: CpuRegister;
    D: CpuRegister;
    L: CpuRegister;
    H: CpuRegister;
    AF: CpuRegister;
    BC: CpuRegister;
    DE: CpuRegister;
    HL: CpuRegister;
    programCounter: CpuRegister;
    stackPointer: CpuRegister;
    constructor();
    get flags(): CpuFlagRegister;
    reset(): void;
}
