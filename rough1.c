#include <stdio.h>

int main(void)
{
    int p = 1000, n = 3;
    float r = 8.5f;
    float si;

    si = p * n * r / 100;

    printf("Simple interest = %.2f\n", si);

    return 0;
}