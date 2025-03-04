const dictionary = {
  name: "Name",
  enterName: "Enter Name:",
  enterURL: "Enter Name:",
  url: "Url",
  method: "HTTP Method",
  statusCode: "Status Code",
  status: "Status",
  code: "Code",
  delay: "Delay (ms)",
  active: "Active",
  disabled: "Disabled",
  action: "Action",
  mocks: "Mocks",
  settings: "Settings",
  tabs: "Api Ghost Tabs",
  addMock: "Add Mock",
  editMock: "Edit Mock",
  createGroup: "Create Group",
  createMock: "Create Mock",
  cancel: "Cancel",
  continue: "Continue",
  delete: "Delete",
  dialog: {
    deleteMock: {
      title: "Delete Mock",
      description: "Are you sure you want to delete this mock?",
    },
  },
  close: "Close",
  empty: {
    search: {
      title: "No results found",
      description: "Try adjusting your search to find what you need.",
    },
    mocks: {
      title: "No items yet",
      description: "Add your first mock to get started.",
    },
  },
  selectOption: "Select an option",
  validations: {
    name: "Name is required",
    url: "URL is required",
    method: "Method is required",
    code: {
      format: "Code should be a number",
      required: "Code is required",
    },
    delay: {
      format: "Delay must be a positive number",
      required: "Delay is required",
    },
    response: "Response body is required",
    status: "Status is required",
    invalidJson: "Invalid JSON format",
  },
};

export default dictionary;
