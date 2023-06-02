function getTotalX(a, b) {
    const max_a = Math.max(...a);
    const min_b = Math.min(...b);
    let count = 0;

    for (let num = max_a; num <= min_b; num++) {
        if (a.every(factor => num % factor === 0) && b.every(element => element % num === 0)) {
            count++;
        }
    }

    return count;
} 