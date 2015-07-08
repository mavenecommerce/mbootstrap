<a href="http://mavenecommerce.com/">![mavenecommerce](http://www.mavenecommerce.com/wp-content/themes/maven/images/logo.png)</a>

# Magento-Bootstrap responsive theme

Magento-Bootstrap theme it is package fully based on Twitter Bootstrap 3 framework.

## Assets

* Bootstrap SASS v3.3.4
* HTML5 support
* Microdata support (schema.org)
* Composer installer
* Gulp js/css builder

### Requirements

1. Composer  — Open https://getcomposer.org/doc/00-intro.md and install Composer to your system
2. Node.js   — Open http://nodejs.org and install latest Node.js version
3. Gulp      — Open http://gulpjs.com/ and install latest Gulp version

You can check if all of this installed by commands:
```
$ composer -V && node -v && gulp -v
Composer version 1.0-dev (d1a9cfbd634d3b9e3350a77189de9c6b20737111) 2015-07-02 09:36:31
v0.12.3
[16:35:34] CLI version 3.9.0
[16:35:34] Local version 3.9.0
```

## How to install
### Step 1. Install theme as Composer module

Create (or edit) `composer.json` file in your project folder, near `magento/` folder. You need add next lines to your composer.json:
```
"repositories": [
    {
        "type": "vcs",
        "url": "git@github.com:mavenecommerce/mbootstrap.git"
    }
],
"require": {
    "mavenecommerce/mbootstrap": "dev-mbootstrap_sass_composer"
},
"extra": {
    "magento-root-dir": "magento/"
}
```

You need add `repository`, `require` and path to your magento folder `extra.magento-root-dir`.

Or do it via commad line interface:
```
$ composer config repositories.mbootstrap vcs git@github.com:mavenecommerce/mbootstrap.git
$ composer require mavenecommerce/mbootstrap:dev-mbootstrap_sass_composer
```

So you will get something like that:
```
{
    "name": "mavenecommerce/mbootstrap-example",
    "description": "Mavenecommerce MBootstrap Theme Example",
    "minimum-stability": "stable",
    "license": "proprietary",
    "authors": [
        {
            "name": "Oleksii Filippovych",
            "email": "a.filippovich@mavenecommerce.com",
            "role": "Developer"
        }
    ],
    "repositories": {
        "mbootstrap": {
            "type": "vcs",
            "url": "git@github.com:mavenecommerce/mbootstrap.git"
        }
    },
    "require": {
        "mavenecommerce/mbootstrap": "dev-mbootstrap_sass_composer"
    },
    "extra": {
        "magento-root-dir": "magento"
    }
}
```

If you don't use command line and just edit `composer.json` than run `$ composer install` (if you run it in first time) or `$ composer update --no-plugins` for update your dependies.

### Step 2.1 Prepare Gulp build environment

Go to your project folder and create `project_folder/node_modules/` folder. You get:
```
.
├── composer.json
├── composer.lock
├── magento         — Magento folder
├── node_modules    - npm node_modules/ folder
└── vendor          - Composer modules
```

The open `magento/` folder and create symlink by command

```$ ln -s ../node_modules node_modules```

It is need for Gulp builder.
After that just run `$ npm install` in your `magento/` folder to install Gulp dependies. All Gulp dependies should be instaled to `project_folder/node_modules/` folder, example:
```
.
├── composer.json
├── composer.lock
├── magento
│   ├── ...
│   ├── gulpconfig.js -> ../vendor/mavenecommerce/mbootstrap/gulpconfig.js
│   ├── gulpfile.js -> ../vendor/mavenecommerce/mbootstrap/gulpfile.js
│   ├── ...
│   ├── node_modules -> ../node_modules
│   ├── package.json -> ../vendor/mavenecommerce/mbootstrap/package.json
│   └── ...
├── node_modules
│   ├── del
│   ├── gulp
│   ├── gulp-autoprefixer
│   ├── gulp-bless
│   ├── gulp-cache
│   ├── gulp-concat
│   ├── gulp-imagemin
│   ├── gulp-load-plugins
│   ├── gulp-minify-css
│   ├── gulp-rename
│   ├── gulp-sass
│   ├── gulp-sourcemaps
│   ├── gulp-uglify
│   └── vinyl-paths
└── vendor
```

note: *if you know how to make it easier share with us please :)*

### Step 2.2 Build MBootstrap theme resources (JS/CSS)

Go to `project_folder/magento/` and run `$ gulp`:
```
$ gulp
[15:28:37] Using gulpfile /path_to_project_folder/vendor/mavenecommerce/mbootstrap/gulpfile.js
[15:28:37] Starting 'build-base-scripts'...
[15:28:38] Finished 'build-base-scripts' after 348 ms
[15:28:38] Starting 'build-base'...
[15:28:38] Finished 'build-base' after 17 μs
[15:28:38] Starting 'build-mbootstrap-scripts'...
[15:28:38] Finished 'build-mbootstrap-scripts' after 13 ms
[15:28:38] Starting 'build-mbootstrap-styles-clean'...
[15:28:38] Finished 'build-mbootstrap-styles-clean' after 1.36 ms
[15:28:38] Starting 'build-mbootstrap-styles'...
[15:28:39] Starting 'build-mbootstrap-images'...
[15:28:39] Finished 'build-mbootstrap-images' after 759 ms
[15:28:47] Finished 'build-mbootstrap-styles' after 9.31 s
[15:28:47] Starting 'build-mbootstrap-styles-ie9'...
[15:28:47] Finished 'build-mbootstrap-styles-ie9' after 129 ms
[15:28:47] Starting 'build-mbootstrap'...
[15:28:47] Finished 'build-mbootstrap' after 4.4 μs
[15:28:47] Starting 'build'...
[15:28:47] Finished 'build' after 2.82 μs
[15:28:47] Starting 'default'...
[15:28:47] Finished 'default' after 2.59 μs
```

### Step 3. Update Magento configuration

Go to `Admin Panel -> System -> Configuration -> Developer` and open **Template Settings** Tab.

Set **Allow Symlinks** to **Yes** and Save.

Go to `Admin Panel -> System -> Configuration -> Design` and open **Package** Tab.

Set **Current Package Name** with **mbootstrap** value and Save. Open **Theme** Tab and check **Default** option value — it should be empty or **default** value and Save.

PS: rebuild cache if enable via `Admin Panel -> System -> Cache Management`. **Select All** and select *Refresh* or *Disable* action.
