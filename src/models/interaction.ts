import { ValidatedFlagType } from "../modifiers/validation";
import { PeopleType } from "./people";

export type InteractionType = {
  id: string;
  description: string;
  units: number;
  hours: number;
  people?: PeopleType;
};

export type IsMissingRequiredPropertyConfig = {
  input: object;
};

export type ValidateInteractionConfig = {
  interaction: InteractionType;
};

export type ValidatedInteractionType = InteractionType & ValidatedFlagType;
