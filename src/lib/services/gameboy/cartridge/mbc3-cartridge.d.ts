import { Cartridge } from "@/cartridge/cartridge";
export declare class Mbc3Cartridge extends Cartridge {
    private romBank;
    private isRamAndRtcEnabled;
    private ramBankOrRtcSelection;
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
    private isRamAndTimerGate;
    private isRomBank;
    private isRamBankNumberOrRtcRegisterSelect;
    private isLatchClockData;
    private isRamBankOrRtcRegister;
}
