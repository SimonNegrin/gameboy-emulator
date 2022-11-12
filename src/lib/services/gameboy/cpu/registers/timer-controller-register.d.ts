import { SingleByteMemoryRegister } from "@/memory/memory-register";
declare class TimerControllerRegister implements SingleByteMemoryRegister {
    offset: number;
    name: string;
    private inputClockSpeedValueToCycles;
    get value(): number;
    set value(byte: number);
    get inputClockSpeed(): number;
    get cyclesForTimerUpdate(): number;
    get isTimerOn(): boolean;
}
export declare const timerControllerRegister: TimerControllerRegister;
export {};
