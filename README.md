# Notes-App

Notes App is command driven application used to add/Delete/Update/Read Notes. It stores the data in JSON file.

## Yargs

> Yargs is used to **parse** the command line arguments.

### Installation

```sh
$ cd Notes-App
$ npm install
$ node app
```

## Scripts

> Add Note

```sh
$ node app add --title=<title> --body=<title description>

```

> Delete Note

```sh
$ node app delete --title=<title>
```

> List All the Notes

```sh
$ node app list

title          body
-------------  -------------------------
Shopping List  Need to buy a Mac Desktop
Create an App  Create a node js app
```

> Update the Note Description

```sh
$ node app update --title=<note title> --body=<note description>

```

### To **Inspect** the code

```sh
$ node inspect app
```

> Go to chrome Browser.
> type chrome://inspect
