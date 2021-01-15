# Project Cafeina

Cafeina is a hobby programming language with the aim of creating a simple and flexible language that targets and takes advantage of C compiler toolchains.

## Idea

A simple hello world program looks like so:

```
use cafelib.io;

proc main
{
    println("Hello, world!");
}
```

The same hello world program, but more verbose:

```
package root;

use io = cafelib.io;
clojure(this).addAll(io);

export main(): nothing
{
    println("Hello, world!");
}
```

And will generate this C code:

```
// package root;
void _root_init(_cafe_Clojure* clojure)
{
    clojure = _cafe_Clojure_push(clojure);
 
    // use io = cafelib.io;
    _cafe_Clojure* io = _cafe_Clojure_require("cafelib.io");
    

    _root_main(clojure);
}

void _root_main(_cafe_Clojure* clojure)
{

}
```
