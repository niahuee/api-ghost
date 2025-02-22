import { HttpMethod } from "../types/mock";
import { Colors } from "../types/types";

export const mapCodeToColor = (code: number): Colors => {
  const badgeRanges: [number, number, Colors][] = [
    [200, 299, Colors.Teal],
    [300, 399, Colors.Purple],
    [400, 499, Colors.Amber],
    [500, Infinity, Colors.Pink],
  ];

  for (const [min, max, badge] of badgeRanges) {
    if (code >= min && code <= max) return badge;
  }

  return Colors.Red;
};

export const mapMethodToColor = (method: HttpMethod): Colors => {
  switch (method) {
    case HttpMethod.GET:
      return Colors.Blue;

    case HttpMethod.POST:
      return Colors.Green;

    case HttpMethod.PUT:
      return Colors.Orange;

    case HttpMethod.PATCH:
      return Colors.Coral;

    case HttpMethod.DELETE:
      return Colors.Red;
  }
};
