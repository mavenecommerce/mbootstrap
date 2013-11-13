<a href="http://www.ecomdev.org/services/magento-development?utm_source=github&utm_medium=logo&utm_campaign=github">![EcomDev](http://www.ecomdev.org/wp-content/themes/ecomdev/images/logo.png)</a>

# Magento-Bootstrap theme

Magento-Bootstrap theme it is package fully based on Twitter Bootstrap 3 framework.

## Status:

Current version: Beta

## Assets

* Bootstrap v3.0.0
* HTML5 support
* Microdata support (schema.org)

## How to install

Open our [wiki](https://github.com/EcomDev/mbootstrap/wiki) and read [How to install theme via modman?](https://github.com/EcomDev/mbootstrap/wiki/How-to-install-theme-via-modman%3F) please.

## How to use

Really it is very-very easy to use :)

Develop process as usual for Magento theme (more about front-end develope for Magento you can see on [Designer's Guide To Magento](http://www.magentocommerce.com/design_guide/articles/working-with-magento-themes))

### Create your theme based on Magento-Bootstrap theme

You need create custom theme based on Magento-Bootstrap theme.
After `git clone` command you will have next folder hierarchy:

```
.
├── app
│   └── design
│       └── frontend
│           └── mbootstrap
│               ├── default
│               ├── advanced    -- example theme with LESS compile
│               └── simple      -- example theme with http://getbootstrap.com/customize css file
├── skin
│   └── frontend
│       └── mbootstrap
│           ├── default
│           ├── advanced
│           └── simple
```

So you need create new theme in **bootstrap** package

**Example**
```
.
├── app
│   └── design
│       └── frontend
│           └── mbootstrap
│               ├── default
│               └── custom-theme
├── skin
│   └── frontend
│       └── mbootstrap
│           ├── default
│           └── custom-theme
```

That's it!
Now you can develope your custom theme based on Magento-Bootstrap theme

(i) don`t forget enter your just created theme name (in example it is *custom-theme*)
at Admin Panel (System -> Configuration -> General -> Design tab -> Themes section -> Default field)

## Skin folder structure description

Open *magento/skin/frontend/mbootstrap/default* path

```
.
├── Makefile              -- Script file with *compile* less to css and *watch* file system changes commands. Open it and read *How to use*
├── bootstrap             -- Bootstrap framework source files
├── css                   -- Theme css files compile there
├── images
├── js
├── less                  -- Theme less files
└── watcher.js            -- More powerful watch program for OSX (with lessc, watchr, growl). Open it and read *Requirements* for use

```

## Developer tools

Magento-Bootstrap theme contains also developers tools:
* run *less to css* compile
* run file system watching program and compile *less to css* automatically

For more information go to *magento/skin/frontend/mbootstrap/default/* folder and read *Makefile* file (or watcher.js file for Mac OS X users)

### Requirements

1. Node.js                              -- Open http://nodejs.org and install latest Node.js version
2. Bootstrap framework install          -- Open *magento/skin/frontend/default/bootstrap* and run `$ npm install` command in terminal
3. modman (Module Manager)              -- Open https://github.com/colinmollenhour/modman and install it

