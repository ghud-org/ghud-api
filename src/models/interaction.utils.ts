import {
  isMissingDescription,
  isMissingHours,
  isMissingId,
  isMissingUnits,
} from "../validators/is-missing-property";
import {
  IsMissingRequiredPropertyConfig,
  ValidateInteractionConfig,
  ValidatedInteractionType,
} from "./interaction";

const isMissingRequiredProperty = (
  config: IsMissingRequiredPropertyConfig
): boolean => {
  const { input } = config;
  if (
    isMissingId(input) ||
    isMissingDescription(input) ||
    isMissingUnits(input) ||
    isMissingHours(input)
  )
    return true;
  return false;
};

export const validateInteraction = (
  config: ValidateInteractionConfig
): ValidatedInteractionType => {
  const { interaction } = config;
  if (isMissingRequiredProperty({ input: interaction }))
    return { ...interaction, validated: false };
  return { ...interaction, validated: true };
};
