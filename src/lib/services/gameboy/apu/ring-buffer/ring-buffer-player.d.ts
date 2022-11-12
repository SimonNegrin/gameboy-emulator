export declare class RingBufferPlayer {
    private audioRingBufferWriter?;
    private parameterRingBufferWriter?;
    private ringBufferPlayerNode?;
    private sampleBuffer;
    private sampleBufferIndex;
    private parameterRawStorage;
    private parameterByteArray;
    private parameterDataView;
    /**
     * @constructor
     * @param {AudioContext} audioContext - Audio context to use for playing audio
     * @param {number} sampleBufferLength - Number of samples to record before sending them to the ring buffer
     */
    constructor(audioContext: AudioContext, sampleBufferLength: number);
    writeSample(sample: number): void;
    writeParameter(index: number, value: number): boolean;
    private getModuleFile;
}
