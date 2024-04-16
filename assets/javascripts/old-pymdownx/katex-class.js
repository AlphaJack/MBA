export default (className, mode) => {
  const maths = document.querySelectorAll(`.${className}`)

  for (let i = 0; i < maths.length; i++) {
    const tex = maths[i].textContent || maths[i].innerText

    if (tex.startsWith('\\(') && tex.endsWith('\\)')) {
      katex.render(tex.slice(2, -2), maths[i], {'displayMode': false})
    } else if (tex.startsWith('\\[') && tex.endsWith('\\]')) {
      katex.render(tex.slice(2, -2), maths[i], {'displayMode': true})
    }
  }
}
