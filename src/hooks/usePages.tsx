import { GhostApiPages } from "../constants/constants";
import dictionary from "../dictionary";
import Mocks from "../modules/Mocks";

export const usePages = () => {
  const defaultPage = GhostApiPages.Mocks;

  const pages = [
    {
      label: dictionary.mocks,
      value: GhostApiPages.Mocks,
      content: <Mocks />,
    },
  ];

  return { pages, defaultPage };
};
