import React, { createContext } from "react";

const PageContext = createContext({
  page: 1,
  setPage: () => {},
});

export default PageContext;
