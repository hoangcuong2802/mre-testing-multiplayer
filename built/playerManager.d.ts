/*!
 * Copyright (c) Ben Garfield. All rights reserved.
 * Licensed under the MIT License.
 */
import * as MRE from '@microsoft/mixed-reality-extension-sdk';
import { Player } from './player';
export default class PlayerManager {
    connectedUsers: MRE.User[];
    currentMod: MRE.Guid;
    playerList: Player[];
    private assets;
    userJoined(user: MRE.User): void;
    userLeft(user: MRE.User): void;
    isMod(user: MRE.User): boolean;
    private checkForMod;
    private createModPopup;
}
//# sourceMappingURL=playerManager.d.ts.map