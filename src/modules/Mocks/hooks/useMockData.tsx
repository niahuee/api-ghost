import { useMemo } from "react";
import { HttpMethod, Mock } from "../../../types/mock";

export const mockData: Mock[] = [
  {
    id: "1",
    name: "Get User Data",
    url: "/api/user",
    http: {
      method: HttpMethod.GET,
      code: 203,
    },
    delay: 100,
    isActive: true,
    group: "Users",
    response: {
      type: "json",
      body: JSON.stringify({
        id: 1,
        name: "Alice Johnson",
        email: "alice@example.com",
      }),
    },
  },
  {
    id: "2",
    name: "Create Order",
    url: "https://dev.fetchdatacommon.com/posts",
    http: {
      method: HttpMethod.POST,
      code: 302,
    },
    delay: 200,
    isActive: true,
    group: "Orders",
    response: {
      type: "json",
      body: JSON.stringify({ orderId: 123, status: "created" }),
    },
  },
  {
    id: "3",
    name: "Delete Product",
    url: "https://dev.fetchdatacommon.com/postshttps://dev.fetchdatacommon.com/postshttps://dev.fetchdatacommon.com/posts",
    http: {
      method: HttpMethod.DELETE,
      code: 404,
    },
    delay: 300,
    isActive: false,
    group: "Products",
    response: {
      type: "json",
      body: "",
    },
  },
  {
    id: "5",
    name: "Delete Product",
    url: "/api/product/456",
    http: {
      method: HttpMethod.DELETE,
      code: 505,
    },
    delay: 300,
    isActive: false,
    group: "Products",
    response: {
      type: "json",
      body: "",
    },
  },
];

export const useMockData = (searchQuery: string = "") => {
  const filteredData = useMemo(() => {
    return mockData.filter((mock) =>
      mock.name.toLowerCase().includes(searchQuery.toLowerCase())
    );
  }, [searchQuery]);

  return { data: filteredData };
};
