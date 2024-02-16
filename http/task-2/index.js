#!/usr/bin/env node

const http = require('http');
const port = 8080;

const template = `<!DOCTYPE html>
  <html>
    <body>
      <div id="demo">
        <h2>The XMLHttpRequest Object</h2> 
        <button type="button" onclick="load()" >Change Context</button>
      </div>

      <script type="text/javascript">
        function load(){
          let xhttp = new XMLHttpRequest();
          xhttp.onreadystatechange = function(){
            if(this.readyState === 4 && this.status === 200){
              document.getElementById("demo").innerHTML = this.responseText;
            }
          };
          xhttp.open("GET", "hello-world", true);
          xhttp.send();
        }
      </script>
    </body>
  </html>`

function requestHandler(req, res) {
  console.log('New request');
  if (req.url === '/') {
    res.end(template)
  } else if (req.url === '/hello-world') {
    res.end('Hello World');
  } else {
    res.end('Done');
  }
}

const server = http.createServer(requestHandler);

server.listen(port, (err) => {
  if (err) {
    console.log('Something bad happened..', err);
  }
  console.log(`Server started successfully on localhost:${port}`);
});
