export const persistLocalStorage = (key: string, value: string) => {
  localStorage.setItem(key, JSON.stringify(value))
}

export const clearLocalStorage = (key: string) => {
  localStorage.removeItem(key);
}