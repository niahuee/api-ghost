import { Box } from "@radix-ui/themes";
import { Cross2Icon } from "@radix-ui/react-icons";
import { DangerButton, SecondaryButton } from "../Button";
import { DialogType } from "./types";
import { ReactNode } from "react";
import * as RadixDialog from "@radix-ui/react-dialog";
import ActionButton from "../ActionButton";
import classes from "./style.module.scss";
import dictionary from "../../dictionary";

interface DialogProps {
  trigger: ReactNode;
  title: string;
  description: string;
  onConfirm: () => void;
  titleConfirm?: string;
  type?: DialogType;
}

export const Dialog = ({
  trigger,
  title,
  description,
  onConfirm,
  type,
  titleConfirm = dictionary.continue,
}: DialogProps) => (
  <RadixDialog.Root>
    <RadixDialog.Trigger asChild>{trigger}</RadixDialog.Trigger>
    <RadixDialog.Portal>
      <RadixDialog.Overlay className={classes.overlay} />
      <RadixDialog.Content className={classes.content}>
        <RadixDialog.Title className={classes.title}>{title}</RadixDialog.Title>
        <RadixDialog.Description className={classes.description}>
          {description}
        </RadixDialog.Description>

        <Box className={classes.footer}>
          <RadixDialog.Close asChild>
            <SecondaryButton title={dictionary.cancel} />
          </RadixDialog.Close>
          {type === DialogType.DANGER && (
            <DangerButton onClick={onConfirm} title={titleConfirm} />
          )}
        </Box>

        <RadixDialog.Close asChild>
          <Box className={classes.close}>
            <ActionButton icon={Cross2Icon} />
          </Box>
        </RadixDialog.Close>
      </RadixDialog.Content>
    </RadixDialog.Portal>
  </RadixDialog.Root>
);
