export const Advanced = () => {
	console.log('---------------Advanced------------')

	const array = [1, 2, 3, 4]

	// const assertion
	// => tells compiler that there are exactly X elements in an array
	const arrayImmutable = [8, 5] as const
	console.log(`Const assertion: ${Math.max(...arrayImmutable)}\n`)
	const mappingArray = arrayImmutable
	/*   type IndexOf<T extends [], S extends number[] = []> =
    T['length'] extends S ['length'] ?
      S : IndexOf<T, [S['length'], ...S]>
  //specify type of mappingArray not to be number
  arrayImmutable.map((_, i: IndexOf<typeof mappingArray>) => {
    const arrayImmutableElement = mappingArray[i]
  }) */
	arrayImmutable.map((_, i: keyof typeof arrayImmutable) => {
		console.log(`Mapping immutable array: ${mappingArray[i]}`)
	})

	// not-null assertion operator
	// => tells the compiler that array[0] is not null
	const arrayElementNotNull = array[0]!
	console.log(`\nNot-null assertion operator: ${arrayElementNotNull}`)

	// read-only
	const readOnlyArray: readonly number[] = array
	const readOnlyArrayGeneric: ReadonlyArray<number> = array
	// this won't work
	//readOnlyArray.push(5)
}
