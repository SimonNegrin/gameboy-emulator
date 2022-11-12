export declare class CpuRegister {
    name: string;
    offset: number;
    code: number;
    protected dataView: DataView;
    protected readonly byteSize: 1 | 2;
    constructor(name: string, offset: number, data: ArrayBuffer, code: CpuRegister.Code | CpuRegister.PairCode, byteSize?: 1 | 2);
    get value(): number;
    set value(newValue: number);
}
export declare namespace CpuRegister {
    enum Code {
        A = 7,
        B = 0,
        C = 1,
        D = 2,
        E = 3,
        H = 4,
        L = 5
    }
    enum PairCode {
        BC = 0,
        DE = 1,
        HL = 2,
        AF = 3,
        SP = 3
    }
}
