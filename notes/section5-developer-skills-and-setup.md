# Developer skills and editor setup

##Installing Prettier extension
Preferences/Settings/Default Formatter (in the search)/esbenp.prettier-vscode

Configuration file in the current project folder:
Create a file .prettierrc
Inside of it:

```

{
    "singleQuote": true
    "arrowParens": "avoid"
}

```

##Shortcut console.log
In the VSCode:
Code/Preferences/User Snippets/New Global Snippets file.../(Give it a name, for example, 'elaine', then it will become 'elaine.code-snippets')
In the file:
(Uncomment the lines of 'Print to console:{}')

Change:

```
'prefix': 'log'
```

to:

```
'prefix': 'cl'
```

Change:

```
"body": [
    "console.log('$1');",
    "$2"
],
```

to:

```
"body": ["console.log();"],
```

## Installing Live Server extension

## Live Server with Node.js

Download node (way of running js outside of the browser)
Terminal/New Terminal
(Command K to clear the window)
node -v
If it was already installed, you'll see a number. 
Install live-server writing:
sudo npm install live-server -g
(sudo in the beginning only if using Mac)
Enter password
Write 'live-server', enter, reload the page as soon as it opens and it's done.

## DEBUGGING

Prompt always returns strings

### console.table 
Useful when we have a big object, easier to check the values
````
console.table(); 
````

