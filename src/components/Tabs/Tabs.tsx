import { Tabs as RadixTabs } from "radix-ui";
import { TabItem } from "./types";
import classes from "./style.module.scss";

interface TabsProps {
  defaultValue: string;
  tabs: TabItem[];
  ariaLabel?: string;
}

export const Tabs = ({ defaultValue, tabs, ariaLabel }: TabsProps) => {
  return (
    <RadixTabs.Root defaultValue={defaultValue}>
      <RadixTabs.List className={classes.tabs} aria-label={ariaLabel}>
        {tabs.map((tab) => (
          <RadixTabs.Trigger
            key={tab.value}
            className={classes.tab}
            value={tab.value}
          >
            {tab.label}
          </RadixTabs.Trigger>
        ))}
      </RadixTabs.List>

      {tabs.map((tab) => (
        <RadixTabs.Content
          key={tab.value}
          className={classes.TabsContent}
          value={tab.value}
        >
          {tab.content}
        </RadixTabs.Content>
      ))}
    </RadixTabs.Root>
  );
};
