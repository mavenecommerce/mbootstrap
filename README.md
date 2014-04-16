<a href="http://mavenecommerce.com/services/">![mavenecommerce](http://mavenecommerce.com/wp-content/uploads/2014/03/logo.gif)</a>

# Magento-Bootstrap responsive theme

Magento-Bootstrap theme it is package fully based on Twitter Bootstrap 3 framework.

## Status:

Current version: Beta

## Assets

* Bootstrap v3.0.0
* HTML5 support
* Microdata support (schema.org)

## How to install

Open our [wiki](https://github.com/mavenecommerce/mbootstrap/wiki) and read [How to install theme via modman?](https://github.com/mavenecommerce/mbootstrap/wiki/How-to-install-theme-via-modman%3F) please.

## How to use

Really it is very-very easy to use :)

Develop process as usual for Magento theme (more about front-end develop for Magento you can see on [Designer's Guide To Magento](http://www.magentocommerce.com/design_guide/articles/working-with-magento-themes))

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

So you need create new theme in **mbootstrap** package

**Example**
```
.
├── app
│   └── design
│       └── frontend
│           └── mbootstrap
│               ├── default
│               └── custom-theme    -- your Custom theme templates files folder
├── skin
│   └── frontend
│       └── mbootstrap
│           ├── default
│           └── custom-theme        -- your Custom theme css/images files
```

That's it!
Now you can develop your custom theme based on Magento-Bootstrap theme

(i) don`t forget enter your just created theme name (in example it is *custom-theme*)
at Admin Panel (System -> Configuration -> General -> Design tab -> Themes section -> Default field)

## Skin folder structure description

Open *magento/skin/frontend/mbootstrap/default* path

```
.
├── bootstrap             -- Bootstrap framework source files
├── css                   -- Theme css files compile there
├── images
├── js
├── Gruntfile.js          -- Script file with *compile* less to css, minify css files and uglify js files, *watch* file system changes commands. Use `$ grunt` to compile or `$ grunt watch` to watch files for changes
├── less                  -- Theme less files
└── package.json

```

## Developer tools

Magento-Bootstrap theme contains also developers tools. You can use Grunt to compile files.

For more information go to *magento/skin/frontend/mbootstrap/default/* folder and read *Gruntfile.js* file

### Requirements

1. Node.js                              -- Open http://nodejs.org and install latest Node.js version
2. Bootstrap framework install          -- Open *magento/skin/frontend/default/mbootstrap* and run `$ npm install` command in terminal
3. modman (Module Manager)              -- Open https://github.com/colinmollenhour/modman and install it

