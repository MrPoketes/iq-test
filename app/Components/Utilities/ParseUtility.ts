const parse = (pathName: string) => {
  const path = pathName.split("/");
  const pathLength = path.length;
  const lastPath = path[pathLength - 1];
  return lastPath;
};

export const ParseUtility = { parse };
