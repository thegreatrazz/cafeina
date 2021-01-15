
#include <stdio.h>

int main(int argc, char* argv[])
{
    int a, b, c;
    a = 1;
    b = 1;
    c = 1;

    while (a < 100) {
        printf("%d\n", c);
        a = b;
        b = c;
        c = a + b;
    }
}
