# Theme

### Prerequisites

What things you need to install the software and how to install them


```
Node Js
```

### Frame work Used

```
Vuejs
```

### Installing

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build
```

### Anytime If you want to setup new Vuejs prokect Just follow below steps

``` bash
# install global vue cli
npm install -g vue-cli

# initialize simple webpack development environment
vue init webpack-simple <project name>

# enter into project directory
cd <project name>

# install dependencies
npm install

# run dev server
npm run dev

```

## Directory Structure
```
│   App.vue
│   main.js
│
├───assets
│       logo.png
│
├───router
│       index.js
│
└───theme
    │   index.vue
    │
    ├───components
    │       about.vue
    │       banner.vue
    │       btn-with-file.vue
    │       btn-with-link.vue
    │       btn-with-text.vue
    │       contact.vue
    │       custom.vue
    │       exhibitor.vue
    │       faq.vue
    │       gallery.vue
    │       layout.vue
    │       navbar.vue
    │       networking.vue
    │       schedule.vue
    │       speaker.vue
    │       sponsor.vue
    │       text.vue
    │       venue.vue
    │
    ├───fonts
    │       AdventPro-Regular.ttf
    │       Lato-Bold.ttf
    │       Lato-Regular.ttf
    │
    └───image
            banner.jpg
            logo.png
            para.jpg
```

### Breaking down File structure :

```
│   main.js
```
The file is same as customiser's main file it also includes all the global components and and router file.

---

```
│   App.vue
```

It vue's init file, which contains router view. so According to router file the view will be displayed.

---

```
├───router
│       index.js
```

So this a saperate router file which will be included into main.js file. It uses vue-router library for routing.

For more reference refer : [Vue-router](https://github.com/vuejs/vue-router)

---

```
└───theme
    │   index.vue
    │
    ├───components
    │       about.vue
    │       banner.vue
    │       btn-with-file.vue
    │       btn-with-link.vue
    │       btn-with-text.vue
    │       contact.vue
    │       custom.vue
    │       exhibitor.vue
    │       faq.vue
    │       gallery.vue
    │       layout.vue
    │       navbar.vue
    │       networking.vue
    │       schedule.vue
    │       speaker.vue
    │       sponsor.vue
    │       text.vue
    │       venue.vue
    │
    ├───fonts
    │       AdventPro-Regular.ttf
    │       Lato-Bold.ttf
    │       Lato-Regular.ttf
    │
    └───image
            banner.jpg
            logo.png
            para.jpg
```
Theme directory has all the required files of the theme. The first most main file is index.vue

```
index.vue
```

there are 4 main component first is for navbar, second is for banner, third is for sections and forth is for main sections.

The data are passed through props.

For more details about props : [Props](https://vuejs.org/v2/guide/components.html#Props)

Methods :

```
get_cont( )
```
This method is called after created lifecycle of component. The response data will be assigned to "data" object.

Socket Method :

```
connect( )
```
This method is used to connect with socket. It checks router parameter if route parameter id = custom then it will get connected to socket.

```
change_section( )
```
This method is called whenever we drag and drop section in customizer.

```
toggle_section( )
```
This method is called whenever we toggle show hide button in customizer section tab.

---

```
├───components
```

This directory contains all the theme section's component.

All components are getting data from parent component means from Index.vue through props.

The props will be stored into data object. Because Props are not editable.

Common component socket methods

```
font( )
```

This method is triggered whenever we make changes in font from customizer. All this socket method checks for section name to identify current sections.

---

```
header( )
```

This method is triggered whenever we make changes in header name or section name from customizer.

---

```
add_element( )
```
This method is triggered whenever we make changes in add element section from customizer. New element get pushed into object and changes will be reflected in theme.

---

```
text_ele( ), btn_with_text_ele( ), btn_with_file_ele( ), btn_with_link_ele( )
```
This methods are used to handle changes in elements, added from add element section of cutomizer.

---

```
remove_ele( )
```

This method gets triggered when we remove element from customizer. It just slice out element from object and changes get reflected on theme.

---

```
layoutUpdate( )
```

This method gets triggered when we change layout from customizer.

---

```
banner.vue
```

Socket Method :

```
content( )
```

This method gets triggered when we make changes in customizer banner content section of a perticular banner. It identifies banner as per the banner index.

---

```
custom.vue
```

This is the custom page file. It has all the custom elements like section-with-people, section-with-btn-text etc.

Same as other component data is passed through props.

---

## Plugins Used :

* Scroller : [vue-scrollto](https://rigor789.github.io/vue-scrollto/#/)

* Parallax : [vue-parallaxy](https://github.com/apertureless/vue-parallax)

* Carousel (slick) : [vue-slick](https://github.com/staskjs/vue-slick)

* Banner slider : [vue-swipe](https://github.com/ElemeFE/vue-swipe)

* Gallery : [lightbox2](http://lokeshdhakar.com/projects/lightbox2/)

* Google Map : [vue2-google-maps](https:// www.npmjs.com/package/vue2-google-maps)

---

### Single Page work remaining :

* footer section ( Design not ready )
* load more intergration as per customizer
* Layout ( partially done only in about page just for testing )
* Backend integration
* Navbar section name change integration

### Multi page Work

* All section should have one for loop to include different other section. Like add element.

* Example :
```
main section
|__ sub section list
        section 1
        section 2
        section 3
```
so the loop of sub section would be integrated in main section.

* Navbar changes ( different nav bar for multiple page, we can use show hide )

* chnages in the section should be done using section index or id.



