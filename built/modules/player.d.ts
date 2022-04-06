/*!
 * Copyright (c) Ben Garfield. All rights reserved.
 * Licensed under the MIT License.
 */
import * as MRE from '@microsoft/mixed-reality-extension-sdk';
export interface PlayerLike {
    id: MRE.Guid;
    name: string;
    score: number;
    answered: boolean;
    answer: number;
    timeToAnswer: number;
    screen: MRE.Actor;
}
export declare class Player implements PlayerLike {
    id: MRE.Guid;
    name: string;
    score: number;
    answered: boolean;
    answer: number;
    timeToAnswer: number;
    screen: MRE.Actor;
    color: MRE.Color3;
    constructor(id: MRE.Guid, name: string);
}
//# sourceMappingURL=player.d.ts.map