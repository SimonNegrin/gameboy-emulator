import { EnhancedImageData } from "@/helpers/enhanced-image-data";
export declare function backgroundTilesToImageData(): ImageData;
export declare function drawSpriteTileAt(imageData: EnhancedImageData, x: number, y: number, charData: Uint8Array, tileStart: number, palette: number[]): void;
export declare function drawOam(): ImageData;
export declare function drawOamToBackground(): ImageData;
export declare function characterImageData(): ImageData;
