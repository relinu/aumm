import React, { useReducer } from 'react';
import { Mod } from '../../+models/mod';
import { reducer, Action } from './mods.reducer';

export interface ModsContext {
    activeMod: number;
    mods: Mod[];
}

export interface ModsStore {
    state: ModsContext;
    dispatch?: React.Dispatch<Action>;
}

const modsDefaultState: ModsContext = {
    activeMod: 0, mods: []
};
export const modsContext = React.createContext<ModsStore>({ state: modsDefaultState });

interface ModsProviderProps {
    children: React.ReactNode
}

export const ModsProvider = ({ children }: ModsProviderProps) => {
    const [state, dispatch] = useReducer(reducer, modsDefaultState);
    return <modsContext.Provider value={{ state, dispatch }} children={children} />;
};