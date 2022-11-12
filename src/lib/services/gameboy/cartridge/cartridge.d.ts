import { CartridgeType } from "./cartridge-type.enum";
export declare class Cartridge {
    static EntryPointOffset: number;
    static TypesWithBatterySave: CartridgeType[];
    protected gameDataView: DataView;
    protected gameBytes: Uint8Array;
    constructor(gameDataView: DataView);
    readByte(address: number): number;
    readSignedByte(address: number): number;
    readWord(address: number): number;
    writeByte(address: number, value: number): void;
    writeWord(address: number, value: number): void;
    get title(): string;
    get typeName(): string;
    get type(): CartridgeType;
    get romSize(): number;
    get ramSize(): number;
    get versionNumber(): number;
    get hasSaveableRam(): boolean;
}
