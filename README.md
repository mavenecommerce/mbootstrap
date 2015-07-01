<a href="http://mavenecommerce.com/">![mavenecommerce](http://www.mavenecommerce.com/wp-content/themes/maven/images/logo.png)</a>

# Magento-Bootstrap responsive theme

Magento-Bootstrap theme it is package fully based on Twitter Bootstrap 3 framework.

## Assets

* Bootstrap SASS v3.3.4
* HTML5 support
* Microdata support (schema.org)
* Gulp js/css builder

## How to install

Open our [wiki](https://github.com/mavenecommerce/mbootstrap/wiki) and read [How to install theme via modman?](https://github.com/mavenecommerce/mbootstrap/wiki/How-to-install-theme-via-modman%3F) please.

## How to use

Develop process as usual for Magento theme (more about front-end develop for Magento you can see on [Designer's Guide To Magento](http://info2.magento.com/rs/magentoenterprise/images/MagentoDesignGuide.pdf))

### Create your theme based on Magento-Bootstrap theme

You need create custom theme based on Magento-Bootstrap theme. After `git clone` command you will have next folder hierarchy:

```
.
├── app
│   └── design
│       └── frontend
│           └── mbootstrap
│               ├── default     — regular example with CSS/JS builder
│               ├── advanced    — example theme with SASS builder compile
│               └── simple      — example theme with http://getbootstrap.com/customize css file
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
│               └── custom-theme    — your Custom theme templates files folder
├── skin
│   └── frontend
│       └── mbootstrap
│           ├── default
│           └── custom-theme        — your Custom theme css/images files
```

That's it! Now you can develop your custom theme based on Magento-Bootstrap theme

(i) don`t forget enter your just created theme name (in example it is *custom-theme*) at Admin Panel (System -> Configuration -> General -> Design tab -> Themes section -> Default field)

## Skin folder structure description

Open *magento/skin/frontend/mbootstrap/default* path

```
.
├── bootstrap             — Bootstrap framework source files
├── build/css             — Theme css files compile there
├── images
├── js
├── gulpfile.js           — Script file with *compile* less to css, minify css files and uglify js files, *watch* file system changes commands. Use `$ grunt` to compile or `$ grunt watch` to watch files for changes
├── scss                  — Theme SASS files
└── package.json

```

## Developer tools

Magento-Bootstrap theme contains also developers tools. You can use Gulp to compile files.

For more information go to *magento/skin/frontend/mbootstrap/default/* folder and read *gulpfile.js* file

### Requirements

1. Modman (Module Manager)              — Open https://github.com/colinmollenhour/modman and install it
2. Node.js                              — Open http://nodejs.org and install latest Node.js version
3. Gulp                                 — Open http://gulpjs.com/ and install latest Gulp version
4. Magento-Bootstrap theme builder      — Open *magento/skin/frontend/default/mbootstrap* and run `$ npm install` command in terminal

