import { Mod } from "../../+models/mod";
import { ModsContext } from "./mods.state";

export enum ActionType {
    SET_ACTIVE_MOD = 'set_active_mod',
    ADD_MOD = 'add_mod',
    UPDATE_MOD = 'update_mod',
    REMOVE_MOD = 'remove_mod',
}

export type Action =
    { type: ActionType.SET_ACTIVE_MOD, modIndex: number }
    | { type: ActionType.ADD_MOD, mod: Mod }
    | { type: ActionType.UPDATE_MOD, modIndex: number, mod: Mod }
    | { type: ActionType.REMOVE_MOD, modIndex: number };

export const reducer = (state: ModsContext, action: Action): ModsContext => {
    switch (action.type) {
        case ActionType.SET_ACTIVE_MOD:
            return { ...state, activeMod: action.modIndex };
        case ActionType.ADD_MOD:
            state.mods.push(action.mod);
            return state;
        case ActionType.UPDATE_MOD:
            state.mods[action.modIndex] = action.mod;
            return state;
        case ActionType.REMOVE_MOD:
            state.mods.splice(action.modIndex, 1);
            return state;
        default:
            throw new Error('Action not found - ModsReducer');
    }
};