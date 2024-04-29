import { filament } from "../models/filamentModel";

export class FilamentState {
  public filaments: filament[] = [];
}

export enum filamentActionType {
  loadFilaments = "loadFilaments",
  addFilament = "addFilament",
  removeFilament = "removeFilament",
  updateFilament = "updateFilament",
  clearFilament = "clearFilament",
}

export interface FilamentAction {
  type: filamentActionType;
  payload?: any;
}

export function loadFilament(newFilament: filament): FilamentAction {
  return {
    type: filamentActionType.loadFilaments,
    payload: newFilament,
  };
}
export function addFilament(newFilament: filament): FilamentAction {
  return {
    type: filamentActionType.addFilament,
    payload: newFilament,
  };
}
export function updateFilament(updateFilament: filament): FilamentAction {
  return {
    type: filamentActionType.updateFilament,
    payload: updateFilament,
  };
}
export function clearFilament(): FilamentAction {
  return {
    type: filamentActionType.updateFilament,
  };
}

export const FilamentReducer = (
  currentState: FilamentState = new FilamentState(),
  action: FilamentAction
): FilamentState => {
  const newState: FilamentState = { ...currentState };
  switch (action.type) {
    case filamentActionType.loadFilaments:
      newState.filaments = action.payload;
      break;
    case filamentActionType.addFilament:
      newState.filaments.push(action.payload);
      break;
    case filamentActionType.removeFilament:
      newState.filaments = [...newState.filaments].filter(
        (item) => item.id !== action.payload
      );
      break;
    case filamentActionType.updateFilament:
      newState.filaments = newState.filaments.map((filament) => {
        if (filament.id === action.payload.id) {
          return { ...filament, ...action.payload.changes };
        } else {
          return filament;
        }
      });
      break;
    case filamentActionType.clearFilament:
      newState.filaments = [];
      break;
  }
  return newState;
};
