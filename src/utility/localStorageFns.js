export const getItemFromStorage = (name) => localStorage?.getItem(name)

export const getParsedItemFromStorage = (name) => JSON.parse(localStorage?.getItem(name))

export const setItemInStorage = (name, item) => localStorage?.setItem(name, JSON.stringify(item))

export const removeItemFromStorage = (name) => localStorage?.removeItem(name)