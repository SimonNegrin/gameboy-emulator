export declare class Sound3 {
    private frequencyTimer;
    private frequencyPeriod;
    private lengthTimer;
    private readonly waveTableMemoryAddress;
    private waveTablePosition;
    tick(cycles: number): void;
    playSound(): void;
    clockLength(): void;
    private shifts;
    getSample(): number;
    private getFrequencyPeriod;
}
