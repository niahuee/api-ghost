import Badge from "../../../components/Badge/Badge";
import { Column } from "../../../components/Table";
import dictionary from "../../../dictionary";
import { Mock } from "../../../types/mock";
import { mapCodeToColor } from "../../../utils";

export const columns: Column<Mock>[] = [
  { key: "action", header: "", render: (row) => row.isActive },
  { key: "name", header: dictionary.name },
  { key: "url", header: dictionary.url },
  { key: "http.method", header: dictionary.method, width: 50 },
  {
    key: "http.code",
    header: dictionary.code,
    render: (row) => {
      const type = mapCodeToColor(row.http.code);
      return <Badge type={type} value={row.http.code} />;
    },
    width: 60,
  },
  {
    key: "Actions",
    header: dictionary.action,
    render: () => "Action",
    width: 100,
  },
];

