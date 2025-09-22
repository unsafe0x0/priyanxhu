# Getting Started with Go

Go aka Golang is a statically typed, compiled programming language designed at Google, it was designed by a team of Google engineers: Robert Griesemer, Rob Pike, and Ken Thompson. It's known for its simplicity, efficiency, and excellent concurrency support, making it perfect for building scalable backend systems, APIs, and cloud applications.

Go was designed to address the limitations of existing languages. Also, to offer a streamlined approach to building robust and efficient software.

## Why Learn Go?

- **Simple and Clean**: Minimalist syntax that's easy to learn and read
- **Fast Compilation**: Lightning fast build times
- **Built in Concurrency**: Goroutines make concurrent programming simple
- **Strong Standard Library**: Comprehensive built in packages
- **Cross platform**: Compile to multiple operating systems
- **Great for DevOps**: Many popular tools (Docker, Kubernetes) are written in Go

## Installation

### 1. Download and Install Go

Visit [golang.org](http://golang.org) and download the installer for your operating system.

### 2. Verify Installation

```bash
go version
```

You should see something like: `go version go1.25.1 linux/amd64` or similar depending on your OS and Go version.

### 3. Set Up Your Workspace

Go uses modules for dependency management. Create a project directory:

```bash
mkdir my-go-project
cd my-go-project
go mod init my-go-project
```

## Your First Go Program

Create a file called `main.go`:

```go
package main

import "fmt"

func main() {
    fmt.Println("Hello, World!")
}
```

Run it:

```bash
go run main.go
```

## Go Fundamentals

### Variables and Types

```go
package main

import "fmt"

func main() {
    // variable declarations
    var name string = "John"
    var age int = 25
    var isActive bool = true

    // short declaration (type inferred)
    city := "New York"
    salary := 50000.50

    // constants
    const pi = 3.14159

    fmt.Printf("Name: %s, Age: %d, City: %s\n", name, age, city)
}
```

### Basic Data Types

- **Integers**: `int`, `int8`, `int16`, `int32`, `int64`
- **Unsigned integers**: `uint`, `uint8`, `uint16`, `uint32`, `uint64`
- **Floating point**: `float32`, `float64`
- **Boolean**: `bool`
- **String**: `string`
- **Byte**: `byte` (alias for uint8)
- **Rune**: `rune` (alias for int32, represents Unicode code points)

### Functions

```go
package main

import "fmt"

// function with parameters and return value
func add(a int, b int) int {
    return a + b
}

// function with multiple return values
func divide(a, b float64) (float64, error) {
    if b == 0 {
        return 0, fmt.Errorf("division by zero")
    }
    return a / b, nil
}

// function with named return values
func getNameAndAge() (name string, age int) {
    name = "Alice"
    age = 30
    return // naked return
}

func main() {
    result := add(5, 3)
    fmt.Println("5 + 3 =", result)

    quotient, err := divide(10, 2)
    if err != nil {
        fmt.Println("Error:", err)
    } else {
        fmt.Println("10 / 2 =", quotient)
    }
}
```

### Control Structures

### If Statements

```go
if age >= 18 {
    fmt.Println("Adult")
} else if age >= 13 {
    fmt.Println("Teenager")
} else {
    fmt.Println("Child")
}

// if with initialization
if num := 10; num%2 == 0 {
    fmt.Println("Even number")
}
```

### For Loops

```go
// traditional for loop
for i := 0; i < 5; i++ {
    fmt.Println(i)
}

// while style loop
count := 0
for count < 3 {
    fmt.Println(count)
    count++
}

// infinite loop
for {
    // break or return to exit
    break
}

// range loop (for arrays, slices, maps)
numbers := []int{1, 2, 3, 4, 5}
for index, value := range numbers {
    fmt.Printf("Index: %d, Value: %d\n", index, value)
}
```

### Switch Statements

```go
day := "Monday"
switch day {
case "Monday":
    fmt.Println("Start of work week")
case "Friday":
    fmt.Println("TGIF!")
case "Saturday", "Sunday":
    fmt.Println("Weekend!")
default:
    fmt.Println("Regular day")
}

// switch without expression
switch {
case age < 13:
    fmt.Println("Child")
case age < 18:
    fmt.Println("Teenager")
default:
    fmt.Println("Adult")
}
```

### Arrays and Slices

```go
// arrays (fixed size)
var numbers [5]int = [5]int{1, 2, 3, 4, 5}
fruits := [3]string{"apple", "banana", "orange"}

// slices (dynamic arrays)
var scores []int
scores = append(scores, 95, 87, 92)

names := []string{"Alice", "Bob", "Charlie"}
names = append(names, "David")

// slice operations
fmt.Println(names[1:3])  // ["Bob", "Charlie"]
fmt.Println(len(names))  // 4
fmt.Println(cap(names))  // capacity
```

### Maps

```go
// create and initialize map
ages := make(map[string]int)
ages["Alice"] = 25
ages["Bob"] = 30

// map literal
scores := map[string]int{
    "Alice": 95,
    "Bob":   87,
    "Charlie": 92,
}

// check if key exists
if age, exists := ages["Alice"]; exists {
    fmt.Printf("Alice is %d years old\n", age)
}

// delete key
delete(ages, "Bob")

// iterate over map
for name, age := range ages {
    fmt.Printf("%s: %d\n", name, age)
}
```

### Structs

```go
// define a struct
type Person struct {
    Name     string
    Age      int
    Email    string
    IsActive bool
}

// create and use structs
func main() {
    // different ways to create structs
    var p1 Person
    [p1.Name](http://p1.Name) = "Alice"
    p1.Age = 25

    p2 := Person{
        Name:     "Bob",
        Age:      30,
        Email:    "[bob@email.com](mailto:bob@email.com)",
        IsActive: true,
    }

    p3 := Person{"Charlie", 35, "[charlie@email.com](mailto:charlie@email.com)", false}

    fmt.Println(p1, p2, p3)
}

// methods on structs
func (p Person) Greet() string {
    return fmt.Sprintf("Hello, I'm %s", [p.Name](http://p.Name))
}

func (p *Person) HaveBirthday() {
    p.Age++
}
```

### Pointers

```go
func main() {
    x := 42
    var p *int = &x  // p is a pointer to x

    fmt.Println("Value of x:", x)
    fmt.Println("Address of x:", &x)
    fmt.Println("Value of p:", p)
    fmt.Println("Value pointed to by p:", *p)

    *p = 100  // change value through pointer
    fmt.Println("New value of x:", x)
}
```

## Error Handling

Go uses explicit error handling with multiple return values:

```go
package main

import (
    "errors"
    "fmt"
)

func divide(a, b float64) (float64, error) {
    if b == 0 {
        return 0, [errors.New](http://errors.New)("division by zero")
    }
    return a / b, nil
}

func main() {
    result, err := divide(10, 0)
    if err != nil {
        fmt.Println("Error:", err)
        return
    }
    fmt.Println("Result:", result)
}
```

## Packages and Imports

### Creating Your Own Package

Create a file `math/calculator.go`:

```go
package math

// exported function (starts with capital letter)
func Add(a, b int) int {
    return a + b
}

// unexported function (starts with lowercase letter)
func subtract(a, b int) int {
    return a - b
}
```

Use it in `main.go`:

```go
package main

import (
    "fmt"
    "./math"  // local import
)

func main() {
    result := math.Add(5, 3)
    fmt.Println(result)
}
```

## Building a Simple Web Server

```go
package main

import (
    "fmt"
    "log"
    "net/http"
)

func helloHandler(w http.ResponseWriter, r *http.Request) {
    fmt.Fprintf(w, "Hello, World!")
}

func apiHandler(w http.ResponseWriter, r *http.Request) {
    w.Header().Set("Content-Type", "application/json")
    fmt.Fprintf(w, `{"message": "Hello from Go API!", "status": "success"}`)
}

func main() {
    http.HandleFunc("/", helloHandler)
    http.HandleFunc("/api", apiHandler)

    fmt.Println("Server starting on :8080...")
    log.Fatal(http.ListenAndServe(":8080", nil))
}
```

## Essential Go Tools

### Go Commands

- `go run main.go` - Run a Go program
- `go build` - Compile the program
- `go install` - Compile and install the program
- `go mod init <name>` - Initialize a new module
- `go mod tidy` - Clean up dependencies
- `go get <package>` - Download and install packages
- `go fmt` - Format your code
- `go test` - Run tests

### Useful Third party Packages

```bash
# web frameworks
go get [github.com/gin-gonic/gin](http://github.com/gin-gonic/gin)
go get [github.com/gorilla/mux](http://github.com/gorilla/mux)

# database
go get [gorm.io/gorm](http://gorm.io/gorm)
go get [github.com/lib/pq](http://github.com/lib/pq)  # postgreSQL driver

# environment variables
go get [github.com/joho/godotenv](http://github.com/joho/godotenv)

# json web tokens
go get [github.com/golang-jwt/jwt/v4](http://github.com/golang-jwt/jwt/v4)
```

## Recommended Resources

### Documentation & Tutorials

- **Official Go Tour**: [tour.golang.org](http://tour.golang.org)
- **Go by Example**: [gobyexample.com](http://gobyexample.com)
- **Effective Go**: [golang.org/doc/effective_go](http://golang.org/doc/effective_go)

---

**_This blog is just a starting point. Go has many more advanced features like interfaces, goroutines, channels, testing, and more. Explore the official documentation and build projects to deepen your understanding._**
