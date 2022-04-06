"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Player = void 0;
class Player {
    constructor(id, name) {
        this.score = 0;
        this.answered = false;
        this.answer = null;
        this.timeToAnswer = 0;
        this.id = id;
        this.name = name;
    }
}
exports.Player = Player;
//# sourceMappingURL=player.js.map