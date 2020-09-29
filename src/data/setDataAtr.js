function setDataAtr() {
  window.addEventListener("load", function () {
    const nodeElements = document.getElementsByTagName("a");
    for (let elem of nodeElements) {
      const host = elem.host;
      const linktype =
        elem.className === "social-icon" ? "social-icon" : "button";
      const currPage = elem.baseURI.split(host)[1];
      const linkTo = elem.href.split(host)[1];
      elem.setAttribute("data-linktype", linktype);
      elem.setAttribute("data-source-page", currPage);
      elem.setAttribute("data-target-page", linkTo);
    }
  });
}

export default setDataAtr;
