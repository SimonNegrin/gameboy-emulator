import { CpuRegister } from "@/cpu/internal-registers/cpu-register";
export declare class CpuFlagRegister extends CpuRegister {
    get Z(): number;
    set Z(newValue: number);
    get isResultZero(): boolean;
    set isResultZero(newValue: boolean);
    get N(): number;
    set N(newValue: number);
    get isSubtraction(): boolean;
    set isSubtraction(newValue: boolean);
    get H(): number;
    set H(newValue: number);
    get isHalfCarry(): boolean;
    set isHalfCarry(newValue: boolean);
    get CY(): number;
    set CY(newValue: number);
    get isCarry(): boolean;
    set isCarry(newValue: boolean);
}
