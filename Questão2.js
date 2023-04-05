function isFibonacci(teste) {
    let start = 0;
    let end = 1;

    while (end <(teste)) {
      const next = start + end;
      start = end;
      end = next;
    }
    
    if (end === teste) {
        return (console.log('É Fibonacci'))
    } else if (teste === 0) {
        return (console.log('Não é Fibonacci'))
    } else {
        return (console.log('Não é Fibonacci'))
    }
};

isFibonacci(4);