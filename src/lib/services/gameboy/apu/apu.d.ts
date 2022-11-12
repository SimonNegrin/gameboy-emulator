export declare class APU {
    private static FrameSequencerHertz;
    private readonly FrameSequencerInterval;
    private audioContext;
    private frameSequencerCycleCounter;
    private cyclesPerSample;
    private sampleCycleCounter;
    private ringBufferPlayer;
    private sound1;
    private sound2;
    private sound3;
    private sound4;
    private _isAudioEnabled;
    constructor();
    get isAudioEnabled(): boolean;
    enableSound(): void;
    disableSound(): void;
    tick(cycles: number): void;
    private sampleChannels;
    private frameSequencerStep;
    private advanceFrameSequencer;
    private clockLength;
    private clockSweep;
    private clockVolume;
}
