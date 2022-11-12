import { SingleByteMemoryRegister } from "../../memory/memory-register";
export declare class LengthAndDutyCycleRegister implements SingleByteMemoryRegister {
    offset: number;
    name: string;
    constructor(offset: number, name: string);
    get value(): number;
    get waveformDutyCycle(): number;
    get soundLength(): number;
}
export declare const sound1LengthAndDutyCycleRegister: LengthAndDutyCycleRegister;
export declare const sound2LengthAndDutyCycleRegister: LengthAndDutyCycleRegister;
