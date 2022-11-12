export declare class Sound2 {
    private dutyCycles;
    private positionInDutyCycle;
    private frequencyTimer;
    private frequencyPeriod;
    private lengthTimer;
    private enveloper;
    private volume;
    tick(cycles: number): void;
    playSound(): void;
    clockLength(): void;
    clockVolume(): void;
    getSample(): number;
    private getFrequencyPeriod;
}
