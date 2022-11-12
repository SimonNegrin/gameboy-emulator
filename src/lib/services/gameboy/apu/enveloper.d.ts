import { EnvelopeControlRegister } from "@/apu/registers/envelope-control-registers";
export declare class Enveloper {
    private envelopePeriodTimer;
    initializeTimer(value: number): void;
    clockVolume(currentVolume: number, envelopeRegister: EnvelopeControlRegister): number;
}
