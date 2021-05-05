export const compose = (...fns: Function[]) => (arg: any) => fns.reduce((composed, f) => f(composed), arg)
