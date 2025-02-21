import { BadgeType } from "../components/Badge";

export const mapCodeToColor = (code: number): BadgeType => {
  const badgeRanges: [number, number, BadgeType][] = [
    [200, 299, BadgeType.GREEN],
    [300, 399, BadgeType.BLUE],
    [400, 499, BadgeType.ORANGE],
    [500, Infinity, BadgeType.RED],
  ];

  for (const [min, max, badge] of badgeRanges) {
    if (code >= min && code <= max) return badge;
  }

  return BadgeType.RED;
};

