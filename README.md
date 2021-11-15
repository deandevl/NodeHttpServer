# nodehttpserver
[nodehttpserver](https://github.com/deandevl/NodeHttpServer) is a simple javascript module web server based solely on the Node.js `HTTP` module and inspired by [express.js](https://expressjs.com/).  It responds to the 4 major HTTP methods of GET, POST, PATCH, and DELETE.  This Node.js module defines an `HttpServer` class which takes a host string and port number which together define a host computer's listening network address.  The default is the IPv4 loopback address to the local host `127.0.0.1` and port `8080`.  HTTP requests that the server class responds to can be defined in multiple ways with a Uniform Resource Locator (i.e. url/path/endpoint) and its associated javascript defined function/handler. 

Public methods from `HttpServer` include:

- listen([string] message)	----	starts the listening for client requests with a string message logged to the console.
- static([string] directory)	----  defines the directory for publicly available file assets such as `.css`, `.js`, `.html`, image files.
- use([string] route='/', [function] middleware)	----  middleware that performs functions prior to responding that are optionally route specific can also be defined.
- get(), post(), patch(), delete()  ---- method functions with arguments for defining route [string] and handler [function].
- route([string] a_route)  ----  sets the current base route for the above 4 methods.
- add_content_type([string] ext, [string] content_type)  ---- adds an additional content type that the server responds with.  The server currently recognizes `.html, .jpg, .css,  .js, .png,  .ico,  .json,  .svg,  .svgz`.
- add_router([`Router`] router) ---- adds to the server the routes defined in the `Router` class.  See the `node_http_server.js` source for the definition of the `Router` class.

Along with the `HttpServer` class, there are HTTP helper methods for working with Node.js' request and response objects. 

Public global HTTP helper methods include `reply_response()`, `get_query_str()`, `get_query_obj()`, `find_obj()`, `send_404()`, `get_body()`, `set_cookies()`.

A demonstration of `nodehttpserver` is provided in this repository.
