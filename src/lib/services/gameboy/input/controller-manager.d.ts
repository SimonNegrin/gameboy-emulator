export declare enum Xbox360ControllerButtons {
    A = 0,
    B = 1,
    X = 2,
    Y = 3,
    LeftBumper = 4,
    RightBumper = 5,
    LeftTrigger = 6,
    RightTrigger = 7,
    Select = 8,
    Start = 9,
    L3 = 10,
    R3 = 11,
    DpadUp = 12,
    DpadDown = 13,
    DpadLeft = 14,
    DpadRight = 15
}
export declare class ControllerManager {
    controller: number;
    left: number;
    right: number;
    up: number;
    down: number;
    select: Xbox360ControllerButtons;
    start: Xbox360ControllerButtons;
    b: Xbox360ControllerButtons;
    a: Xbox360ControllerButtons;
    queryButtons(): void;
}
export declare const controllerManager: ControllerManager;
