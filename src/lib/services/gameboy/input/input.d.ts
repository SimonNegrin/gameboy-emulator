export declare class Input {
    isPressingUp: boolean;
    isPressingDown: boolean;
    isPressingLeft: boolean;
    isPressingRight: boolean;
    isPressingSelect: boolean;
    isPressingStart: boolean;
    isPressingA: boolean;
    isPressingB: boolean;
    private isPollingDirections;
    private isPollingButtons;
    setInputToCheck(byte: number): void;
    reportInput(): number;
}
export declare const input: Input;
