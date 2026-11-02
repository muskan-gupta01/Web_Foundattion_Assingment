# Assignment 45 – Comparison Note for localStorage and sessionStorage

## 1. Introduction

Web Storage is a feature of JavaScript that allows websites to store data in the browser. It helps save information on the client side without using a server.

There are two types of Web Storage:

1. localStorage
2. sessionStorage

## 2. localStorage

localStorage stores data in the browser with no automatic expiration time. The data remains saved even after closing and reopening the browser.

### Example:

```javascript
localStorage.setItem("name", "Muskan");

let username = localStorage.getItem("name");

console.log(username);
```

### Removing Data:

```javascript
localStorage.removeItem("name");
```

## 3. sessionStorage

sessionStorage stores data only for the current browser tab session. When the tab or window session ends, its data is cleared.

### Example:

```javascript
sessionStorage.setItem("course", "BCA AI");

let courseName = sessionStorage.getItem("course");

console.log(courseName);
```

### Removing Data:

```javascript
sessionStorage.removeItem("course");
```

## 4. Difference Between localStorage and sessionStorage

| Basis            | localStorage                        | sessionStorage                            |
| ---------------- | ----------------------------------- | ----------------------------------------- |
| Storage Duration | Data remains until manually deleted | Data remains until the tab session ends   |
| Capacity         | Generally around 5 MB               | Generally around 5 MB                     |
| Browser Closing  | Data remains saved                  | Data is cleared when the tab session ends |
| Access           | Same origin across browser tabs     | Same origin within the same tab           |
| Use              | Saving user preferences             | Temporary session data                    |
| Data Type        | Stores strings                      | Stores strings                            |

## 5. Common Storage Methods

Both localStorage and sessionStorage provide these methods:

* setItem() – Stores data.
* getItem() – Retrieves stored data.
* removeItem() – Removes a specific item.
* clear() – Removes all stored data.
* key() – Returns the key at a given index.

## 6. Practical Uses

### Uses of localStorage:

* Saving website theme preferences.
* Remembering language settings.
* Saving shopping cart information.
* Storing user preferences.

### Uses of sessionStorage:

* Temporary form data.
* Maintaining temporary session information.
* Storing data during a checkout process.
* Temporary navigation information.

## 7. Conclusion

localStorage and sessionStorage are useful client-side storage mechanisms in JavaScript.

localStorage is suitable for data that needs to remain available after closing the browser, whereas sessionStorage is useful for temporary data during a browser tab session.

Both storage methods store data as strings and are easy to use through JavaScript.
