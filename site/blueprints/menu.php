<?php if(!defined('KIRBY')) exit ?>

title: Page
pages: false
files: false
fields:
  title:
    label: Title
    type:  text
  menu:
    label: Menu
    type: radio
    options:
      top: top
      bottom: bottom
  text:
    label: Text
    type:  textarea