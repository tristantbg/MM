<?php if(!defined('KIRBY')) exit ?>

title: Home
files: true
pages: false
deletable: false
preview: false
fields:
  featuredimages:
    label: Featured images
    type: builder
    fieldsets:
      image:
        label: Image
        entry: >
          <img src="{{_fileUrl}}/content/1-home/{{imagefile}}" height=120px/></br>
          <br>{{imagefile}}
        fields:
          imagefile:
            label: Featured image
            type: selector
            mode:  single
            types:
                - image