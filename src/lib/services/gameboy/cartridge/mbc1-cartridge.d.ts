import { Cartridge } from "@/cartridge/cartridge";
export declare class Mbc1Cartridge extends Cartridge {
    private isRamEnabled;
    private bank1;
    private bank2;
    private mode;
    private ramData;
    private ramDataView;
    private ramBytes;
    private writeTimeout;
    onSramWrite?: Function;
    constructor(gameDataView: DataView);
    setRam(sramArrayBuffer: ArrayBuffer): void;
    dumpRam(): ArrayBuffer;
    writeByte(address: number, value: number): void;
    writeWord(address: number, value: number): void;
    readByte(address: number): number;
    readSignedByte(address: number): number;
    readWord(address: number): number;
    private read;
    private write;
    private isRamGate;
    private isBank1;
    private isBank2;
    private isMode;
    private isRam;
}
