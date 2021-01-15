#ifndef _CAFEINA_CORELIB_CLOJURE
#define _CAFEINA_CORELIB_CLOJURE

#include "./object.h"

typedef struct Cafe_CoreLib_Clojure {
    Cafe_CoreLib_Clojure* parent;
    Cafe_CoreLib_Object* variables;
} Cafe_CoreLib_Clojure;

Cafe_CoreLib_Clojure Cafe_CoreLib_Clojure_new(Cafe_CoreLib_Clojure* parent);
Cafe_CoreLib_Clojure Cafe_CoreLib_Clojure_delete(Cafe_CoreLib_Clojure* clojure);
Cafe_CoreLib_Clojure Cafe_CoreLib_Clojure_gc(Cafe_CoreLib_Clojure* clojure);

#endif
