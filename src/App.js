import React, { useRef, useState } from "react";
import "./app.css";

function App() {
  const [htmlCode, setHtmlCode] = useState("");
  const [cssCode, setCssCode] = useState("");
  const [jsCode, setjsCode] = useState("");
  const htmlCodeRef = useRef(null);
  const cssCodeRef = useRef(null);
  const jsCodeRef = useRef(null);

  // copy code
  const handleCopyHtml = () => {
    if (htmlCodeRef.current) {
      htmlCodeRef.current.select();
      document.execCommand("copy");
    }
  };
  const handleCopyCss = () => {
    if (cssCodeRef.current) {
      cssCodeRef.current.select();
      document.execCommand("copy");
    }
  };
  const handleCopyJs = () => {
    if (jsCodeRef.current) {
      jsCodeRef.current.select();
      document.execCommand("copy");
    }
  };

  const handleOutput = () => {
    //get iframe using or useRef hook but i am using id
    const iframe = document.getElementById("output");
    //  add html and css code
    iframe.contentDocument.body.innerHTML =
      htmlCode + "<style>" + cssCode + "</style>";

    // now add js code
    iframe.contentWindow.eval(jsCode);
  };

  return (
    <div className="playground">
      <div className="left">
        {/* for html */}
        <label>HTML</label>
        <textarea
          ref={htmlCodeRef}
          value={htmlCode}
          name="html"
          onChange={(e) => setHtmlCode(e.target.value)}
        ></textarea>

        {/* for css */}
        <label>CSS</label>
        <textarea
          ref={cssCodeRef}
          value={cssCode}
          name="css"
          onChange={(e) => setCssCode(e.target.value)}
        ></textarea>

        {/* for html */}
        <label>JavaScript</label>
        <textarea
          ref={jsCodeRef}
          value={jsCode}
          name="javascript"
          onChange={(e) => setjsCode(e.target.value)}
        ></textarea>
      </div>

      {/* for output */}
      <div className="right">
        <button onClick={handleCopyHtml}>Copy HTML</button>
        <button onClick={handleCopyCss}>Copy CSS</button>
        <button onClick={handleCopyJs}>Copy JS</button>

        <button onClick={handleOutput}>
          Run
          <i class="fas fa-chevron-right"></i>
        </button>
        {/* we are use iframe to render html output web app */}
        <iframe id="output"></iframe>
      </div>
    </div>
  );
}

export default App;
