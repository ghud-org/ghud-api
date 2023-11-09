const isMissingProperty =
  (property: string | number) =>
  (input: object): boolean => {
    if (!input.hasOwnProperty(property)) return true;
    return false;
  };

export const isMissingId = isMissingProperty("id");
export const isMissingDescription = isMissingProperty("description");
export const isMissingUnits = isMissingProperty("units");
export const isMissingHours = isMissingProperty("hours");
