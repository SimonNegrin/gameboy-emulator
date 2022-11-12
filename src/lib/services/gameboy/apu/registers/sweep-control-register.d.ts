import { SingleByteMemoryRegister } from "../../memory/memory-register";
export declare class SweepControlRegister implements SingleByteMemoryRegister {
    offset: number;
    name: string;
    get value(): number;
    get sweepTime(): number;
    get sweepTimeInSeconds(): number;
    get isSweepIncrease(): boolean;
    get sweepAmount(): number;
}
export declare const sweepControlRegister: SweepControlRegister;
