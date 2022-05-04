export const getItem = (itemName: string) => {
  const item = localStorage.getItem(itemName);
  if (!item) return null;

  return JSON.parse(item);
};

export const setItem = <T>(itemName: string, item: T): void => {
  const formattedItem = JSON.stringify(item);
  localStorage.setItem(itemName, formattedItem);
};

export const removeItem = (itemName: string): void => {
  localStorage.removeItem(itemName);
};
