import React from "react";
import { renderToString } from "react-dom";

const mainStyle = `* { height: 100%; width: 100%; margin: 0; padding: 0;}`

const App = () => {
  return (
    <html lang="en">
      <head>
        <meta />
        <meta http-equiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Sexo</title>
        <style>{mainStyle}</style>
      </head>
      <body>
        <div className="grid-container" style={{
          display: "inline-grid",
          gridTemplateColumns: "auto auto auto",
        }}>
        </div>
      </body>
    </html>
  )
}

export default renderToString(<App />)
