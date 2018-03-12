function fibonacci(n) {
    var suma = 0;
    var n1 = 0;
    var n2 = 1;
    var wynik;
    var i = 0;
    if (n == 0) {
         return wynik = 0;
    } else if (n == 1) {
        return wynik = 1;
    } else {
        for (i = 0; i + 1 < n; i++) {
            /* Oblicza sumę dwóch poprzednich indexów */
            wynik = n1 + n2;
            n1 = n2;
            n2 = wynik;
        };
        return wynik;
    };
};

console.log(fibonacci(5));
