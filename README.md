# SlideJS

## Demo [at Codepen](http://codepen.io/qingguoing/pen/dYoQgy)

if the website is based on the jquery library, you can use this plugin "jquery-slide.js" and make the images slided.
this plugin is so simple and easy, and you can see 'his brother', [a native javascript file](https://github.com/qingguoing/SlideJS)

To be placed into the initiation code, and then passed to the relevant configuration objects, you can pass parameters are:

- speed `{number}` the speed of each sliding image, default 100ms
- second `{number}` the interval between this image and the next image, default 3000ms
- showMarker `{boolean}` whether to display the current image tag value, default false
- marker `{boolean}` tag is `ol li`, default false
- showController `{boolean}` about whether to display control marks, default false
- setClass `{object}`
  - marker `{string}` mark CSS classes, separated by a space between a plurality of classes
  - active `{string}` marker of current active image
  - unactive `{string}` remaining markers of inactive images
  - controllerPrev `{string}` class of left control
  - controllerNext `{string}` class of right control

Lisence
===
MIT
