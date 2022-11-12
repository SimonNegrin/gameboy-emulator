import { Mbc1Cartridge } from "@/cartridge/mbc1-cartridge";
import { Cartridge } from "@/cartridge/cartridge";
import { Mbc3Cartridge } from "@/cartridge/mbc3-cartridge";
export declare class CartridgeLoader {
    static TypeOffset: number;
    static FromArrayBuffer(gameData: ArrayBuffer): Cartridge | Mbc1Cartridge | Mbc3Cartridge;
}
