// load all the urls
const YAML = require('yaml')
const fs = require('fs')
const path = require('path')

const redirectFile = fs.readFileSync(path.join(__dirname,"redirect.yaml"), 'utf-8')
const redirects = YAML.parse(redirectFile)


// genrate the web
const templateHTML = fs.readFileSync(path.join(__dirname,"template.html"), 'utf-8')

// loop
for (let [slug, url] of Object.entries(redirects)){
    console.log("Genrating HTML page for ", slug)

    const html = templateHTML.replaceAll('https://example.com',url)
    

    //create folder path
    const folderPath = path.join(__dirname, 'out' , slug)
    fs.mkdirSync(folderPath, { recursive: true })

    //create an index.html in slug 
    fs.writeFileSync(path.join(folderPath, 'index.html'),html)
}