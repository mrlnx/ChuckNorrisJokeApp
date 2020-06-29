const localStorage = window.localStorage;

/*
    setItem
*/

export const storeItem = (storeId: string, storeValue: string): void => {
    localStorage.setItem(storeId, storeValue);
};

/**
 * getItem
 */

export const getStoredItem = (storeId: string): string => {
    return localStorage.getItem(storeId);
};

/**
 * removeItem
 */

export const removeStoredItem = (storeId: string): void => {
    localStorage.removeItem(storeId);
};
