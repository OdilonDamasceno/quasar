import {
  h,
  renderSSR,
} from "https://deno.land/x/nano_jsx@v0.0.30/mod.ts";

const mainStyle = `* { height: 100%; width: 100%; margin: 0; padding: 0;}`

const App = () => {

  return (
    <html lang="en">
      <head>
        <meta charset="UTF-8" />
        <meta http-equiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Sexo</title>
        <style>{mainStyle}</style>
      </head>
      <body>
        <div class="grid-container" style={{
          display: "inline-grid",
          gridTemplateColumns: "auto auto auto",
        }}>
        </div>
      </body>
    </html>
  )
}

export default renderSSR(<App />)
