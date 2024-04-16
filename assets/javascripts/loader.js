// ┌───────────────────────────────────────────────────────────────┐
// │ Contents of loader.js                                         │
// ├───────────────────────────────────────────────────────────────┘
// │
// ├──┐KATEX
// │  └── LOADER AND CONFIGURATION
// ├──┐TABLESORT
// │  └── LOADER
// ├──┐MERMAID
// │  ├── CONFIGURATION
// │  └── LOADER
// ├── COPY PASTE HACK
// ├──┐RELOADER
// │  ├── NORMAL NAVIGATION
// │  └── INSTANT NAVIGATION
// │
// └───────────────────────────────────────────────────────────────

// ################################################################ KATEX
// ################################ LOADER AND CONFIGURATION
// from https://github.com/facelessuser/pymdown-extensions/tree/main/docs/src/js
const arithmatex = className => {
 if (typeof katex !== "undefined") {
  const maths = document.querySelectorAll('.arithmatex')
  for (let i = 0; i < maths.length; i++) {
   const tex = maths[i].textContent || maths[i].innerText
   if (tex.startsWith('\\(') && tex.endsWith('\\)')) {
    katex.render(
     tex.slice(2, -2), maths[i], {
      'displayMode': false,
      'minRuleThickness': 0.07, // default 0.04
      'throwOnError': false, // default true
      'errorColor': '#00FFFF' // cyan
     }
    )
   } else if (tex.startsWith('\\[') && tex.endsWith('\\]')) {
    katex.render(
     tex.slice(2, -2), maths[i], {
      'displayMode': true,
      'minRuleThickness': 0.07, // default 0.04
      'throwOnError': false, // default true
      'errorColor': '#00FFFF' // cyan
     }
    )
   }
  }
 }
}

// ################################################################ TABLESORT
// ################################ LOADER
// from https://squidfunk.github.io/mkdocs-material/reference/data-tables/

const tables = className => {
 if (typeof Tablesort !== "undefined") {
  var tables = document.querySelectorAll("article table:not([class])")
  tables.forEach(
   function(table){
    new Tablesort(table)
   }
  )
 }
}

// ################################################################ MERMAID

/* natively supported as of 8.2

// ################################ CONFIGURATION
// from https://github.com/facelessuser/pymdown-extensions/tree/main/docs/src/js
// only required to run once after mermaid.min.js vendor script
if (typeof mermaid !== "undefined") {
 window.mermaidConfig = {
  startOnLoad: false,
  theme: "base",
  // https://mermaid-js.github.io/mermaid/#/theming?id=theme-variables-reference-table
  themeVariables: {
   // main variables - customs
   "primaryColor": "#F2F2F2",
   // secondary variables - customs (not easy to manipulate indirectly)
   "textColor": "#484F59",
   // main variables - defaults (bad appearance if changed)
   "darkMode": false,
   "background": "#F4F4F4",
   "fontSize": "16px",
   "font-family": "\"trebuchet ms\",verdana,arial,sans-serif",
  },
  flowchart: {
   htmlLabels: false
  },
  er: {
   useMaxWidth: false
  },
  sequence: {
   useMaxWidth: false,
   noteFontWeight: "14px",
   actorFontSize: "14px",
   messageFontSize: "16px"
  }
 }
}

// ################################ LOADER
// from https://github.com/facelessuser/pymdown-extensions/tree/main/docs/src/js
const uml = className => {
 // custom mermaid div
 class MermaidDiv extends HTMLElement {
  // mermaid shadow dom
   constructor() {
   super()
   // attach style
   const shadow = this.attachShadow({mode: "open"})
   const style = document.createElement("style")
   style.textContent = `
   :host {
    display: block;
    line-height: initial;
    font-size: 16px;
   }
   div.diagram {
    margin: 0;
    overflow: visible;
   }`;
   shadow.appendChild(style)
  }
 }
 if (typeof customElements.get("diagram-div") === "undefined") {
  customElements.define("diagram-div", MermaidDiv)
 }
 const getFromCode = parent => {
  // Handles <pre><code> text extraction.
  let text = ""
  for (let j = 0; j < parent.childNodes.length; j++) {
   const subEl = parent.childNodes[j]
   if (subEl.tagName.toLowerCase() === "code") {
    for (let k = 0; k < subEl.childNodes.length; k++) {
     const child = subEl.childNodes[k]
     const whitespace = /^\s*$/
     if (child.nodeName === "#text" && !(whitespace.test(child.nodeValue))) {
      text = child.nodeValue
      break
     }
    }
   }
  }
  return text
 }
 // Pdefault config in case one is not specified
 const defaultConfig = {
  startOnLoad: false,
  theme: "default",
  flowchart: {
   htmlLabels: false
  },
  er: {
   useMaxWidth: false
  },
  sequence: {
   useMaxWidth: false,
   noteFontWeight: "14px",
   actorFontSize: "14px",
   messageFontSize: "16px"
  }
 }
 if (typeof mermaid !== "undefined") {
  // Load up the config
  mermaid.mermaidAPI.globalReset()
  const config = (typeof mermaidConfig === "undefined") ? defaultConfig : mermaidConfig
  mermaid.initialize(config)
  // find all of our Mermaid sources and render them.
  const blocks = document.querySelectorAll(`pre.${className}, diagram-div`)
  const surrogate = document.querySelector("html")
  for (let i = 0; i < blocks.length; i++) {
   const block = blocks[i]
   const parentEl = (block.tagName.toLowerCase() === "diagram-div") ?
    block.shadowRoot.querySelector(`pre.${className}`) :
    block
   // create a temporary element with the typeset and size we desire.
   // insert it at the end of our parent to render the SVG.
   const temp = document.createElement("div")
   temp.style.visibility = "hidden"
   temp.style.display = "display"
   temp.style.padding = "0"
   temp.style.margin = "0"
   temp.style.lineHeight = "initial"
   temp.style.fontSize = "16px"
   surrogate.appendChild(temp)
   try {
    mermaid.mermaidAPI.render(
     `_diagram_${i}`,
     getFromCode(parentEl),
     content => {
      const el = document.createElement("div")
      el.className = className
      el.innerHTML = content
      // insert the render where we want it and remove the original text source
      // mermaid will clean up the temporary element
      const shadow = document.createElement("diagram-div")
      shadow.shadowRoot.appendChild(el)
      block.parentNode.insertBefore(shadow, block)
      parentEl.style.display = "none"
      shadow.shadowRoot.appendChild(parentEl)
      if (parentEl !== block) {
       block.parentNode.removeChild(block)
      }
     },
     temp
    )
   } catch (err) {} // eslint-disable-line no-empty
   if (surrogate.contains(temp)) {
    surrogate.removeChild(temp)
   }
  }
 }
}

*/

// ################################################################ COPY PASTE HACK
// from https://github.com/marco97pa/copy-paste-hack-js/
/*
const cphack = className => {
 const paragraphs = document.getElementsByTagName("*")
 var hereTroll = `
⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⡿⠟⠛⠛⠛⠋⠉⠉⠉⠉⠉⠉⠉⠉⠉⠉⠉⠉⠉⠙⠛⠛⠛⠿⠻⠿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿
⣿⣿⣿⣿⣿⣿⣿⣿⣿⡿⠋⠀⠀⠀⠀⠀⡀⠠⠤⠒⢂⣉⣉⣉⣑⣒⣒⠒⠒⠒⠒⠒⠒⠒⠀⠀⠐⠒⠚⠻⠿⠿⣿⣿⣿⣿⣿⣿⣿⣿
⣿⣿⣿⣿⣿⣿⣿⣿⠏⠀⠀⠀⠀⡠⠔⠉⣀⠔⠒⠉⣀⣀⠀⠀⠀⣀⡀⠈⠉⠑⠒⠒⠒⠒⠒⠈⠉⠉⠉⠁⠂⠀⠈⠙⢿⣿⣿⣿⣿⣿
⣿⣿⣿⣿⣿⣿⣿⠇⠀⠀⠀⠔⠁⠠⠖⠡⠔⠊⠀⠀⠀⠀⠀⠀⠀⠐⡄⠀⠀⠀⠀⠀⠀⡄⠀⠀⠀⠀⠉⠲⢄⠀⠀⠀⠈⣿⣿⣿⣿⣿
⣿⣿⣿⣿⣿⣿⠋⠀⠀⠀⠀⠀⠀⠀⠊⠀⢀⣀⣤⣤⣤⣤⣀⠀⠀⠀⢸⠀⠀⠀⠀⠀⠜⠀⠀⠀⠀⣀⡀⠀⠈⠃⠀⠀⠀⠸⣿⣿⣿⣿
⣿⣿⣿⣿⡿⠥⠐⠂⠀⠀⠀⠀⡄⠀⠰⢺⣿⣿⣿⣿⣿⣟⠀⠈⠐⢤⠀⠀⠀⠀⠀⠀⢀⣠⣶⣾⣯⠀⠀⠉⠂⠀⠠⠤⢄⣀⠙⢿⣿⣿
⣿⡿⠋⠡⠐⠈⣉⠭⠤⠤⢄⡀⠈⠀⠈⠁⠉⠁⡠⠀⠀⠀⠉⠐⠠⠔⠀⠀⠀⠀⠀⠲⣿⠿⠛⠛⠓⠒⠂⠀⠀⠀⠀⠀⠀⠠⡉⢢⠙⣿
⣿⠀⢀⠁⠀⠊⠀⠀⠀⠀⠀⠈⠁⠒⠂⠀⠒⠊⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⡇⠀⠀⠀⠀⠀⢀⣀⡠⠔⠒⠒⠂⠀⠈⠀⡇⣿
⣿⠀⢸⠀⠀⠀⢀⣀⡠⠋⠓⠤⣀⡀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠄⠀⠀⠀⠀⠀⠀⠈⠢⠤⡀⠀⠀⠀⠀⠀⠀⢠⠀⠀⠀⡠⠀⡇⣿
⣿⡀⠘⠀⠀⠀⠀⠀⠘⡄⠀⠀⠀⠈⠑⡦⢄⣀⠀⠀⠐⠒⠁⢸⠀⠀⠠⠒⠄⠀⠀⠀⠀⠀⢀⠇⠀⣀⡀⠀⠀⢀⢾⡆⠀⠈⡀⠎⣸⣿
⣿⣿⣄⡈⠢⠀⠀⠀⠀⠘⣶⣄⡀⠀⠀⡇⠀⠀⠈⠉⠒⠢⡤⣀⡀⠀⠀⠀⠀⠀⠐⠦⠤⠒⠁⠀⠀⠀⠀⣀⢴⠁⠀⢷⠀⠀⠀⢰⣿⣿
⣿⣿⣿⣿⣇⠂⠀⠀⠀⠀⠈⢂⠀⠈⠹⡧⣀⠀⠀⠀⠀⠀⡇⠀⠀⠉⠉⠉⢱⠒⠒⠒⠒⢖⠒⠒⠂⠙⠏⠀⠘⡀⠀⢸⠀⠀⠀⣿⣿⣿
⣿⣿⣿⣿⣿⣧⠀⠀⠀⠀⠀⠀⠑⠄⠰⠀⠀⠁⠐⠲⣤⣴⣄⡀⠀⠀⠀⠀⢸⠀⠀⠀⠀⢸⠀⠀⠀⠀⢠⠀⣠⣷⣶⣿⠀⠀⢰⣿⣿⣿
⣿⣿⣿⣿⣿⣿⣧⠀⠀⠀⠀⠀⠀⠀⠁⢀⠀⠀⠀⠀⠀⡙⠋⠙⠓⠲⢤⣤⣷⣤⣤⣤⣤⣾⣦⣤⣤⣶⣿⣿⣿⣿⡟⢹⠀⠀⢸⣿⣿⣿
⣿⣿⣿⣿⣿⣿⣿⣧⡀⠀⠀⠀⠀⠀⠀⠀⠑⠀⢄⠀⡰⠁⠀⠀⠀⠀⠀⠈⠉⠁⠈⠉⠻⠋⠉⠛⢛⠉⠉⢹⠁⢀⢇⠎⠀⠀⢸⣿⣿⣿
⣿⣿⣿⣿⣿⣿⣿⣿⣿⣦⣀⠈⠢⢄⡉⠂⠄⡀⠀⠈⠒⠢⠄⠀⢀⣀⣀⣰⠀⠀⠀⠀⠀⠀⠀⠀⡀⠀⢀⣎⠀⠼⠊⠀⠀⠀⠘⣿⣿⣿
⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣷⣄⡀⠉⠢⢄⡈⠑⠢⢄⡀⠀⠀⠀⠀⠀⠀⠉⠉⠉⠉⠉⠉⠉⠉⠉⠉⠁⠀⠀⢀⠀⠀⠀⠀⠀⢻⣿⣿
⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣷⣦⣀⡈⠑⠢⢄⡀⠈⠑⠒⠤⠄⣀⣀⠀⠉⠉⠉⠉⠀⠀⠀⣀⡀⠤⠂⠁⠀⢀⠆⠀⠀⢸⣿⣿
⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣷⣦⣄⡀⠁⠉⠒⠂⠤⠤⣀⣀⣉⡉⠉⠉⠉⠉⢀⣀⣀⡠⠤⠒⠈⠀⠀⠀⠀⣸⣿⣿
⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣷⣶⣤⣄⣀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⣰⣿⣿⣿
⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣶⣶⣶⣶⣤⣤⣤⣤⣀⣀⣤⣤⣤⣶⣾⣿⣿⣿⣿⣿
`.trim()

 for (let p of paragraphs) {
  p.addEventListener(
   'copy', function(e){
    e.clipboardData.setData('text/plain', hereTroll + '\n');
    e.preventDefault();
   }
  )
 }
}
*/

// ################################################################ RELOADER
// ################################ NORMAL NAVIGATION
// from https://github.com/facelessuser/pymdown-extensions/tree/main/docs/src/js
/*
document.addEventListener(
 "DOMContentLoaded", () => {
  //console.log("Document loaded");
  arithmatex();
  uml("mermaid");
 }
)
*/

// ################################ INSTANT NAVIGATION
// from https://github.com/facelessuser/pymdown-extensions/tree/main/docs/src/js
window.document$.subscribe(
 () => {
  //console.log("Document changed");
  arithmatex();
  //uml('mermaid');
  //tables();
  //cphack();
 }
);
