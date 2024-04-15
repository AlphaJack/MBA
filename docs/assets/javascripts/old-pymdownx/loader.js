//import mermaidClass from "./mermaid-class"
//import katexClass from "./katex-class"
//import tabbed from "./tabbed" // also need to uncomment tabbed() down below

// Main function
(() => {
  let mermaidClassPromise = Promise.resolve()
  let mathPromise = Promise.resolve()

  const observer = new MutationObserver(mutations => {
    mutations.forEach(mutation => {
      if (mutation.type === "attributes") {
        let scheme = mutation.target.getAttribute("data-md-color-scheme")
        if (!scheme) {
          scheme = "default"
        }
        localStorage.setItem("data-md-color-scheme", scheme)
        if (typeof mermaid !== "undefined") {
          mermaidClass("diagram")
        }
      }
    })
  })

  const main = () => {
    observer.observe(document.querySelector("body"), {attributeFilter: ["data-md-color-scheme"]})

    //tabbed()

    if (typeof mermaid !== "undefined") {
      mermaidClassPromise = mermaidClassPromise.then(() => {
        mermaidClass("diagram")
      }).catch(err => {
        console.log(`mermaidClass loading failed...${err}`) // eslint-disable-line no-console
      })
    }

    if (typeof katex !== "undefined") {
      mathPromise = mathPromise.then(() => {
        katexClass("katexClass", "katex")
      }).catch(err => {
        console.log(`Math loading failed...${err}`) // eslint-disable-line no-console
      })
    }

    var tables = document.querySelectorAll("article table:not([class])")
    tables.forEach(function(table) {
      new Tablesort(table)
    })
  }

  // load the previous function on DOM changes
  if (window.document$) {
    // Material specific hook
    window.document$.subscribe(main)
  } else {
    // Normal non-Material specific hook
    document.addEventListener("DOMContentLoaded", main)
  }

})()
