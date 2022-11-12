export declare class Sound4 {
    private frequencyTimer;
    private frequencyPeriod;
    private lengthTimer;
    private enveloper;
    private volume;
    private linearFeedbackShift;
    tick(cycles: number): void;
    getFrequencyPeriod(): number;
    playSound(): void;
    clockLength(): void;
    clockVolume(): void;
    stepLinearFeedbackShift(): void;
    getSample(): number;
}
