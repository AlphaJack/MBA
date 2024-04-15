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
