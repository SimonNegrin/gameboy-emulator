import { Cartridge } from "@/cartridge/cartridge";
export declare class Memory {
    cartridge?: Cartridge;
    insertCartridge(cartridge: Cartridge): void;
    get memoryBytes(): Uint8Array;
    reset(): void;
    readByte(address: number): number;
    readSignedByte(address: number): number;
    readWord(address: number): number;
    writeByte(address: number, value: number): void;
    writeWord(address: number, value: number): void;
}
export declare const memory: Memory;
