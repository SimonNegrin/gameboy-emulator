import { EnhancedImageData } from "@/helpers/enhanced-image-data";
export declare class GPU {
    static ScreenWidth: number;
    static ScreenHeight: number;
    private static HeightIncludingOffscreen;
    private static CyclesPerHBlank;
    private static CyclesPerScanlineOam;
    private static CyclesPerScanlineVram;
    private static CyclesPerScanline;
    private static CyclesPerVBlank;
    private static ScanlinesPerFrame;
    static CyclesPerFrame: number;
    screen: EnhancedImageData;
    private cycleCounter;
    private windowLinesDrawn;
    colors: {
        red: number;
        green: number;
        blue: number;
    }[];
    constructor();
    tick(cycles: number): void;
    drawScanline(): void;
    drawBackgroundLine(): number[];
    private drawWindowLine;
    drawSpriteLine(backgroundLineValues: number[], windowLineValues: number[]): void;
    private getTileIndexFromPixelLocation;
    private getUpperLeftPixelLocationOfTile;
    private getPixelInTileLine;
}
