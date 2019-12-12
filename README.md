# rm

> Buscador de productos vuejs consulta api laravel

## Build Setup

``` bash
# install dependencies
npm install
#En caso de problemas con las dependencias ejecutar solo para windows
npm install --no-bin-links

#error en npm en windows, ejecutar comando en powershell y cerrar consola
[Environment]::SetEnvironmentVariable("Path", "$env:Path;%USERPROFILE%\AppData\Roaming\npm\", "User")

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

# build for production and view the bundle analyzer report
npm run build --report
```
#En caso de tener problemas en windows con webpack ejecutar
npm remove webpack-dev-server
npm add webpack-dev-server@2.9.1 --dev

For a detailed explanation on how things work, check out the [guide](http://vuejs-templates.github.io/webpack/) and [docs for vue-loader](http://vuejs.github.io/vue-loader).
