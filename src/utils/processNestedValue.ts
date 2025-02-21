export const processNestedValue = <T extends object>(
  obj: T,
  path: string
): unknown =>
  path.split(".").reduce<unknown>((acc, key) => {
    if (acc && typeof acc === "object" && key in acc) {
      return (acc as Record<string, unknown>)[key];
    }
    return undefined;
  }, obj);

