---
layout: page
title: Getting started
permalink: /getting-started/
---

You can edit `getting-started.md` to change this page. Jekyll understands many
formats, including markdown and HTML. To change the [home page]({{ "/"
| prepend:site.baseurl }}), edit `index.html`.

You can add additional pages by copying the `new-page.html` template and edit
the `published` attribute in the front matter:

```
---
layout: default
title: Your new page
permalink: /new-page/
published: true
---
```


## SASS/SCSS

Jekyll uses [SASS/SCSS](http://sass-lang.com/) to create CSS. You can add your
own styles to `_sass/_custom.scss`.

Not familiar with SCSS? No problem, you can just write CSS to `assets/css/custom.css`


## Javascript

The index page loads `assets/js/index.js`. Other pages don’t load anything by
default. You can add the `javascript` to a page’s front matter to load a specific
file, e.g.

```
---
layout: page
title: Getting started
javascript: getting-started.js
---
```

Will load `assets/js/getting-started.js`.


## Helpful resources

If you have trouble, start with the [Jekyll
documentation](https://jekyllrb.com/docs/home/) which is the main technology
behind this project.
