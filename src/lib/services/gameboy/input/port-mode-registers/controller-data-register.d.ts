import { SingleByteMemoryRegister } from "@/memory/memory-register";
declare class ControllerDataRegister implements SingleByteMemoryRegister {
    offset: number;
    name: string;
    get value(): number;
    get isPollingDirections(): number;
    get isPollingButtons(): number;
}
export declare const controllerDataRegister: ControllerDataRegister;
export {};
