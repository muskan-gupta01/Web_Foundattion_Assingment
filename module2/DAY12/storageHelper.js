// Reusable Storage Helper Module

function saveData(key, value, storageType = "local") {
    const storage = storageType === "session"
        ? sessionStorage
        : localStorage;

    storage.setItem(key, JSON.stringify(value));

    console.log("Data saved successfully!");
}

function getData(key, storageType = "local") {
    const storage = storageType === "session"
        ? sessionStorage
        : localStorage;

    const data = storage.getItem(key);

    return data ? JSON.parse(data) : null;
}

function removeData(key, storageType = "local") {
    const storage = storageType === "session"
        ? sessionStorage
        : localStorage;

    storage.removeItem(key);

    console.log("Data removed successfully!");
}

function clearStorage(storageType = "local") {
    const storage = storageType === "session"
        ? sessionStorage
        : localStorage;

    storage.clear();

    console.log("Storage cleared successfully!");
}

export {
    saveData,
    getData,
    removeData,
    clearStorage
};