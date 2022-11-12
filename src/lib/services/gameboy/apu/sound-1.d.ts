export declare class Sound1 {
    private dutyCycles;
    private positionInDutyCycle;
    private frequencyTimer;
    private frequencyPeriod;
    private lengthTimer;
    private enveloper;
    private volume;
    private isSweepEnabled;
    private shadowFrequency;
    private sweepTimer;
    tick(cycles: number): void;
    playSound(): void;
    clockLength(): void;
    clockVolume(): void;
    clockSweep(): void;
    private resetSweepTimer;
    private calculateNewSweepFrequency;
    getSample(): number;
    private getFrequencyPeriod;
}
