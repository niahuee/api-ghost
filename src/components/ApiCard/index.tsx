import { useState } from "react";
import { Box, Card, Flex, Text, Heading } from "@radix-ui/themes";

import classes from "./style.module.scss";
import { mapCodeToColor, mapMethodToColor } from "../../utils";
import { HttpMethod } from "../../types/mock";
import { Badge, BadgeType } from "../Badge";
import Switch from "../Switch";

interface ApiCardProps {
  title: string;
  url: string;
  method: HttpMethod;
  statusCode: number;
}

const ApiCard = ({ title, url, method, statusCode }: ApiCardProps) => {
  const [enabled, setEnabled] = useState(false);

  const badgeColor = mapCodeToColor(statusCode);
  const methodColor = mapMethodToColor(method);

  return (
    <Card className={classes.card}>
      <Flex justify="between" align="center" className={classes.card__group}>
        <Flex align="center" gap="3" className={classes.card__group__part}>
          <Switch
            checked={enabled}
            onChange={() => {
              setEnabled(!enabled);
            }}
          />
          <Heading as="h3" size="3">
            {title}
          </Heading>
        </Flex>
        <Flex className={classes.card__group__part}>
          <Text>Icon</Text>
        </Flex>
      </Flex>

      <Flex className={classes.card__group}>
        <Text as="p" className={classes.card__text}>
          {url}
        </Text>
      </Flex>

      <Box className={classes.card__group__part}>
        <Box className={classes.card__item}>
          <Text className={classes.card__item__title}>Method:</Text>
          <Badge
            color={methodColor}
            value={method}
            type={BadgeType.STATIC}
            width={80}
          />
        </Box>
        <Box className={classes.card__item}>
          <Text className={classes.card__item__title}>Code:</Text>
          <Badge color={badgeColor} value={statusCode} />
        </Box>
      </Box>
    </Card>
  );
};

export default ApiCard;
