#
# About
# --------------------------------------------------
# This script allow you compile your *.less files into .css file

#
# Requirements
# --------------------------------------------------
# You need open Bootstrap framework folder (magento/skin/frontend/bootstrap/default/bootstrap/) and install modules (run "$ npm install" command in terminal)
# For more info how do that read "Compiling CSS and JavaScript" on https://github.com/twitter/bootstrap page please

#
# How to use
# --------------------------------------------------
# Run
# $ make                    -- Compile less to css file
# $ make theme-css          -- Compile less to css file
# $ make watch              -- Run folder watching only
# $ make all                -- Compile css file anr run folder watching.
# $ make watch-osx          -- Run folder watching only (extended for OSX). See watch.conf for more infomation
# $ make all-osx            -- Compile css file anr run folder watching (extended for OSX). See watch.conf for more infomation

#
# Defaults
# --------------------------------------------------
THEME_LESS 		= ./less/styles.less
THEME_CSS		= css/styles.css
THEME_LESS_DIR	= less

DATE 			= $(shell date +%H:%M:%S)
CHECK 			= \033[32m✔\033[39m

#
# Build CSS
# ------------------------- 

build: theme-css

#
# CSS COMPILE
# ------------------------- 

theme-css:
	@printf "Compile theme less files..."
	@mkdir -p css
	@../default/bootstrap/node_modules/.bin/recess --compile --compress ${THEME_LESS} > ${THEME_CSS}
	@printf "\rCompile theme less files...             ${CHECK} Done | ${DATE}\n"
	
#
# WATCH LESS FILES
# ------------------------- 

watch:
	clear;
	@echo "Watching theme less files..."
	@../default/bootstrap/node_modules/.bin/recess --compile --compress ${THEME_LESS}:${THEME_CSS} --watch THEME_LESS_DIR


#
# WATCH LESS FILES (For OSX)
# See watch.conf for more infomation
# ------------------------- 

watch-osx:
	clear;
	@echo "Watching theme less files..."
	node watcher.js


#
# CSS COMPILE AND WATCH LESS FILES
# ------------------------- 

all: theme-css watch

all-osx: theme-css watch-osx
