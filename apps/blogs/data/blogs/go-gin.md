# How to setup a HTTP server using Go and Gin

If you are looking to build your own HTTP server using Go and Gin, then this guide is for you. This guide will cover the basics of setting up a HTTP server using Go and Gin with some basic middleware.

## Prerequisites

- Go installed on your system
- A basic understanding of Go and HTTP
- A basic understanding of middleware

## Setup

1. Create a new directory for your project
2. Initialize a new Go module `go mod init <module_name>`
3. Install the required dependencies `go mod tidy`
4. Create a new file called `main.go`
5. Add the following code to `main.go`

## Dependencies

```bash
github.com/gin-gonic/gin
```

## Code

```go
package main

import "github.com/gin-gonic/gin"

func main() {
	// create a new router
	server := gin.Default()

	// define a route
	server.GET("/", func(c *gin.Context) {
		c.JSON(200, gin.H{
			"message": "Hello, World!",
		})
	})

	// start the server
	server.Run(":8080")
}
```

## Run

```bash
go run main.go
```

Now you have built a basic HTTP server using Go and Gin. You can now add more routes and middleware to your server.

## Understanding the code

```go
server := gin.Default()
```

This line creates a new router with the default middleware. The default middleware includes a logger and a recovery middleware.

```go
server.GET("/", func(c *gin.Context) {
	c.JSON(200, gin.H{
		"message": "Hello, World!",
	})
})
```

This line defines a route for the root path. The route handler function takes a `*gin.Context` parameter, which represents the request and response context. The function uses the `c.JSON` method to send a JSON response with a status code of 200 and a message of "Hello, World!".

**Or if you want to return HTTP status code, you can use `net/http` package.**

```go
import "net/http"
```

```go
server.GET("/status", func(c *gin.Context) {
	c.String(http.StatusOK,"Hello, World!")
})
```

### Run the server

```go
server.Run(":8080")
```

This line starts the server on port 8080.

**if you want to change the port, you can use the `Run` method with the port number.**

## Middleware

if you want to add middleware to your server, you can use the `Use` method or the `Default` method.You can add middleware to the router with `Use` method.

```go
server := gin.New()
```

This line will create a blank router without any middleware.

### Add middleware

```go
server.Use(gin.Recovery())
```

This line will add the recovery middleware to the router. The recovery middleware will recover from any panics that occur during the request handling.

```go
server.Use(gin.Logger())
```

This line will add the logger middleware to the router. The logger middleware will log the request and response details.

**Or if you want to add custom middleware, you can create a function and pass it to the `Use` method.**

## Add middleware to routes

```go
server.GET("/profile",authMiddleware, func(c *gin.Context) {
	c.JSON(200, gin.H{
		"message": "Hello, World!",
	})
})
```

This line will add the custom middleware to the route. The custom middleware will be executed before the route handler function.But you have to define the custom middleware function before using it.

**Note: if you want to add middlewares like `CORS` or any other, import them and use with `Use` method.**

---

**_This sample code will run as shown and demonstrate the key concepts: Route creation, Middleware, HTTP status codes, JSON response and String response._**
