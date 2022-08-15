/**
 * (ex) PropsOf<typeof SomeClass>
 */
type PropsOf<T> = ConstructorParameters<T>[0]
