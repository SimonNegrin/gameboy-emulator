import { SingleByteMemoryRegister } from "../../memory/memory-register";
export declare class EnvelopeControlRegister implements SingleByteMemoryRegister {
    offset: number;
    name: string;
    constructor(offset: number, name: string);
    get value(): number;
    get initialVolume(): number;
    get isEnvelopeRising(): boolean;
    get lengthOfEnvelopeStep(): number;
}
export declare const sound1EnvelopeControlRegister: EnvelopeControlRegister;
export declare const sound2EnvelopeControlRegister: EnvelopeControlRegister;
export declare const sound4EnvelopeControlRegister: EnvelopeControlRegister;
