export class Calculations {
	export function square(x) {
    return x * x;
}
export function diag(x, y) {
    return sqrt(square(x) + square(y));
}

export function subtract(x, y) {
    return x - y;
}
export function multiply(x, y) {
    return x * y;
}
}