import { useState } from "react";
import { Card, Text, Switch, Group, ActionIcon } from "@mantine/core";
import { IconPencil, IconTrash, IconCopy } from "@tabler/icons-react";

import classes from "./style.module.scss";
import { mapCodeToColor, mapMethodToColor } from "../../utils";
import { HttpMethod } from "../../types/mock";
import { Badge, BadgeType } from "../Badge";

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
      <Group className={classes.card__group}>
        <Group className={classes.card__group__part}>
          <Switch checked={enabled} onChange={() => setEnabled(!enabled)} />
          <Text>{title}</Text>
        </Group>
        <Group className={classes.card__group__part}>
          <ActionIcon variant="subtle" color="gray">
            <IconPencil size={16} />
          </ActionIcon>
          <ActionIcon variant="subtle" color="gray">
            <IconCopy size={16} />
          </ActionIcon>
          <ActionIcon variant="subtle" color="red">
            <IconTrash size={16} />
          </ActionIcon>
        </Group>
      </Group>

      <Group className={classes.card__group}>
        <Group className={classes.card__group__part}>
          <Text className={classes.card__text}>{url}</Text>
        </Group>
      </Group>
      <Group className={classes.card__group}>
        <Group className={classes.card__group__part}>
          <Group className={classes.card__item}>
            <Text className={classes.card__item__title}>Method:</Text>

            <Badge
              color={methodColor}
              value={method}
              type={BadgeType.STATIC}
              width={80}
            />
          </Group>
          <Group className={classes.card__item}>
            <Text className={classes.card__item__title}>Code: </Text>
            <Badge color={badgeColor} value={statusCode} />
          </Group>
        </Group>
      </Group>
    </Card>
  );
};

export default ApiCard;
