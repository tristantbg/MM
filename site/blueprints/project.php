<?php if(!defined('KIRBY')) exit ?>

title: Project
files: true
pages: false
fields:
  title:
    label: Title
    type:  text
    width: 1/2
  subtitle:
    label: Subtitle
    type:  text
    width: 1/2
  date:
    label: Year
    type:  date
    format: YYYY
    width: 1/3
  director:
    label: Director
    type:  text
    width: 1/3
  featuredimage:
    label: Image
    type: selector
    mode:  single
    width: 1/3
    types:
        - image
  medias:
    label: Medias
    type: builder
    fieldsets:
      image:
        label: Image
        entry: >
          <img src="{{_fileUrl}}{{imagefile}}" height=120px/></br>
          <br>{{imagefile}}
        fields:
          imagefile:
            label: Image
            type: selector
            mode:  single
            types:
                - image
      video:
        entry: >
          Link : {{url}}
        label: Video
        fields:
          placeholder:
            label: Placeholder image
            type: selector
            mode:  single
            types:
                - image
          url:
            label: Link URL
            help: Youtube or Vimeo URL
            type: text