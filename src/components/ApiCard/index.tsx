import { useState } from "react";
import { Box, Card, Flex, Text, Heading } from "@radix-ui/themes";

import classes from "./style.module.scss";
import { mapCodeToColor, mapMethodToColor } from "../../utils";
import { Mock } from "../../types/mock";
import { Badge, BadgeType } from "../Badge";
import Switch from "../Switch";
import { Pencil1Icon, CopyIcon, TrashIcon } from "@radix-ui/react-icons";
import ActionButton from "../ActionButton";
import { Dialog, DialogType } from "../Dialog";
import dictionary from "../../dictionary";

interface ApiCardProps {
  mock: Mock;
  onEdit: (mock: Mock) => void;
  onCopy: (mock: Mock) => void;
  onDelete: (mock: Mock) => void;
}

const ApiCard = ({ mock, onEdit, onCopy, onDelete }: ApiCardProps) => {
  const [enabled, setEnabled] = useState(false);

  const badgeColor = mapCodeToColor(mock.http.code);
  const methodColor = mapMethodToColor(mock.http.method);

  const handleEdit = () => {
    onEdit(mock);
  };

  const handleCopy = () => {
    onCopy(mock);
  };

  const handleDelete = () => {
    onDelete(mock);
  };

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
          <Heading as="h3" className={classes.card__title}>
            {mock.name}
          </Heading>
        </Flex>
        <Flex className={classes.card__actions}>
          <ActionButton icon={Pencil1Icon} onClick={handleEdit} />
          <ActionButton icon={CopyIcon} onClick={handleCopy} />

          <Dialog
            title={dictionary.dialog.deleteMock.title}
            description={dictionary.dialog.deleteMock.description}
            trigger={<ActionButton icon={TrashIcon} />}
            onConfirm={handleDelete}
            type={DialogType.DANGER}
            titleConfirm={dictionary.delete}
          />
        </Flex>
      </Flex>

      <Flex className={classes.card__group}>
        <Text as="p" className={classes.card__text}>
          {mock.url}
        </Text>
      </Flex>

      <Box className={classes.card__group__part}>
        <Box className={classes.card__item}>
          <Text className={classes.card__item__title}>Method:</Text>
          <Badge
            color={methodColor}
            value={mock.http.method}
            type={BadgeType.STATIC}
            width={80}
          />
        </Box>
        <Box className={classes.card__item}>
          <Text className={classes.card__item__title}>Code:</Text>
          <Badge color={badgeColor} value={mock.http.code} />
        </Box>
      </Box>
    </Card>
  );
};

export default ApiCard;
