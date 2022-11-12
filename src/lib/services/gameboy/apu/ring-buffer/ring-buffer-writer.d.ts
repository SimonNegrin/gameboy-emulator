declare type ArrayBufferClassTypes = typeof Uint8Array | typeof Uint16Array | typeof Uint32Array | typeof Float32Array;
export declare class RingBufferWriter<BufferClassType extends ArrayBufferClassTypes> {
    private static WritePointerByteSize;
    private static ReadPointerByteSize;
    private static SizeOfPointers;
    private capacity;
    private sharedBuffer;
    private writePointer;
    private readPointer;
    private storage;
    static GetSharedArrayBufferForCapacity(capacity: number, bufferType: ArrayBufferClassTypes): SharedArrayBuffer;
    constructor(sharedArrayBuffer: SharedArrayBuffer, BufferClass: BufferClassType);
    push(elements: InstanceType<BufferClassType>): number;
    availableWrite(): number;
    private _availableWrite;
    private copy;
}
export {};
