#/bin/bash

for tool in rollup webpack; do
    (cd $tool; npm install; npm run build)
    gzip -c $tool-bundle.js > $tool-bundle.js.gz 
done