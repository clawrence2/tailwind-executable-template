# Tailwind Installation with No Node or NPM

## Install
```
#download the executable
curl -LO https://github.com/tailwindlabs/tailwindcss/releases/download/v3.4.13/tailwindcss-linux-x64

#change permissions to make it executable
chmod +x tailwindcss-linux-x64

#rename it tailwindcss
mv tailwindcss-linux-x64 tailwindcss 
```

## Configure 
```
#create tailwind.config.js file
./tailwindcss init

#create an input.css file and an output.css file in yoru root directory (do this manually)
```

## Start a watcher

```
#start a watcher
./tailwindcss -i input.css -o output.css --watch

#compile and minify your css for production
./tailwindcss -i input.css -o output.css --minify


```

