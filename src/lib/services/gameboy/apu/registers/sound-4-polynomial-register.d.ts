import { SingleByteMemoryRegister } from "../../memory/memory-register";
declare class Sound4PolynomialRegister implements SingleByteMemoryRegister {
    offset: number;
    name: string;
    private divisors;
    get value(): number;
    get clockShift(): number;
    get counterWidth(): 7 | 15;
    get dividingRatio(): number;
    get divisor(): number;
    get frequency(): number;
}
export declare const sound4PolynomialRegister: Sound4PolynomialRegister;
export {};
