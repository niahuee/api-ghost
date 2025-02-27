import * as Dialog from "@radix-ui/react-dialog";
import { Cross2Icon } from "@radix-ui/react-icons";
import { useDrawerContext } from "../../contexts/DrawerContext";
import classes from "./style.module.scss";
import ActionButton from "../ActionButton";
import dictionary from "../../dictionary";
import { Box } from "@radix-ui/themes";

const Drawer = () => {
  const { isOpen, closeDrawer, drawerContent, title } = useDrawerContext();

  return (
    <Dialog.Root open={isOpen} onOpenChange={closeDrawer}>
      <Dialog.Portal>
        <Dialog.Overlay className={classes.overlay} />
        <Dialog.Content className={classes.content}>
          <Dialog.Title className={classes.title}>{title}</Dialog.Title>
          <Dialog.Description className={classes.srOnly}>
            {title}
          </Dialog.Description>
          <Dialog.Close asChild>
            <Box className={classes.close} aria-label={dictionary.close}>
              <ActionButton icon={Cross2Icon} />
            </Box>
          </Dialog.Close>
          {drawerContent && drawerContent()}
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
};

export default Drawer;
