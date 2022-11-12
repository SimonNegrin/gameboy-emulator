import { SingleByteMemoryRegister } from "../../../memory/memory-register";
declare class SoundsOnRegister implements SingleByteMemoryRegister {
    offset: number;
    name: string;
    get value(): number;
    set value(byte: number);
    get isAllSoundOn(): boolean;
    get isSound4On(): boolean;
    get isSound3On(): boolean;
    get isSound2On(): boolean;
    get isSound1On(): boolean;
    set isSound1On(isOn: boolean);
    set isSound2On(isOn: boolean);
    set isSound3On(isOn: boolean);
    set isSound4On(isOn: boolean);
}
export declare const soundsOnRegister: SoundsOnRegister;
export {};
