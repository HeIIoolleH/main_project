export const parserController = async <T>(func: () => Promise<T>) => {
  try {
    return await func();
  } catch (e: any) {
    throw e;
  }
};
