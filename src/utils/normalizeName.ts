export const normalizeName = (name: string) => {
  return name.trim().toLocaleLowerCase().replaceAll(" ", "-");
};
