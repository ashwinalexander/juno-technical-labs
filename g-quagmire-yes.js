// Write a function that calculates the score of a word in the game of Scrabble, following this point system:
// Points
// Letters
// 1
// E, A, I, O, N, R, T, L, S, U
// 2
// D, G
// 3
// B, C, M, P
// 4
// F, H, V, W, Y
// 5
// K
// 8
// J, X
// 10
// Q, Z
// When countScore('quagmire'); is called, the output should be 20.

function countScore(word) {
    
    var dictionary = {
        a: 1,
        b: 3,
        c: 3,
        d: 2,
        e: 1,
        f: 4,
        g: 2,
        h: 4,
        i: 1,
        j: 8,
        k: 5,
        l: 1,
        m: 3,
        n: 1,
        o: 1,
        p: 3,
        q: 10,
        r: 1,
        s: 1,
        t: 1,
        u: 1,
        v: 4,
        w: 4,
        x: 8,
        y: 4,
        z: 10
        
    };
    
    console.log([...word].map(val => dictionary[val]).reduce((acc,val) => val+acc));


}


countScore("quagmire");

