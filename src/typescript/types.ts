export const Types = () => {
	console.log('---------------Types---------------')
	// :number
	const integerValue: number = 10
	const integerES12NotationValue: number = 1_000_000
	const decimalValue: number = 0.1
	const hexaDecimalValue: number = 0xf10b
	const binaryValue: number = 0b110100
	const octalValue: number = 0o410
	// :string
	const string1: string = 'Hello World'
	// :boolean
	const boolean: boolean = true
	// :object
	const object: object = [{ name: 'Jack', age: 45 }]
	// :array
	// square brackets
	const stringArray: string[] = ['Jack', 'James']
	const anyArray: any[] = ['Jack', 5]
	// generic array
	const genericArray: Array<string> = ['Apple', 'Orange', 'Banana']
	// :enum
	const enums = () => {
		console.log('\nEnum:')
		enum Role {
			ADMIN,
			READ_ONLY,
			AUTHOR,
		}

		const person = {
			name: 'Jack',
			role: Role.ADMIN,
		}
		console.log(person)

		if (person.role === Role.ADMIN) {
			console.log('role is admin')
		}
	}
	enums()

	// tuples => array with exact elements and specified types
	const tuple = () => {
		console.log('\nTuple:')

		const person: {
			name: string
			role: [number, string]
		} = {
			name: 'Jack',
			role: [1, 'editor'],
		}
		console.log(person)

		// ensures this won't happen
		//person.role[1] = ['admin']

		// and only allow this
		person.role = [2, 'admin']
		console.log(person)

		// doesn't work for push()
		person.role.push('admin')
		console.log(person)
	}
	tuple()
	// unions => multiple type choices
	const union = (value1: string | number, value2: string | number) => {
		console.log(`\nUnion:\n${value1}\n${value2}`)
	}
	union('union string', 2)
	// literals => exact types
	const literal = (value1: string | number) => {
		console.log('\nLiteral:')
		if (typeof value1 === 'string') console.log(`${value1} is string`)
		if (typeof value1 !== 'string') console.log(`${value1} isn't string`)
		if (typeof value1 === 'string' && value1 === 'value1') console.log(`${value1} is string of value: value1`)
	}
	literal('value1')
	// :any
	const any: any = null
	// :null
	const nullConst: null = null
	// :undefined
	const undefinedConst: undefined = undefined
	// :void => used in no-return functions, returns undefined
	const logVoid = (value: string): void => {
		console.log(`\nVoid:\n${value}`)
	}
	logVoid('Void value')
	// :never => used in no-return functions, cannot have null or undefined, returns nothing
	const throwError = (errorMsg: string): never => {
		console.log('\nNever:')
		throw new Error(errorMsg)
		//while(true) {}
	}
	//throwError('never throw error 404')
	// type aliases / custom type
	type Combinable = number | string
	type address = number | 'without address'

	// ADVANCED TYPES
	// Symbol type => creates unique ID https://www.youtube.com/watch?v=Psdf5Bo1SFM
	console.log('\nSymbol:')
	let s1 = Symbol('This is Symbol')
	console.log(s1.toString())
	let s2 = Symbol('This is Symbol')
	// Return false because symbols are unique no matter the value
	console.log(s1 === s2)

	// Checks if symbol with key RegSymbol already exists,
	// if it does it will pass the symbol's value to s3
	// if it doesn't it will create new symbol
	let s3 = Symbol.for('RegSymbol')
	let s4 = Symbol.for('RegSymbol')
	console.log(s3 === s4)

	console.log(Symbol.keyFor(s4))

	let fname = Symbol('First name')
	let person = {
		[fname]: 'John',
	}
	console.log(Object.getOwnPropertySymbols(person))

	// Mapped types https://www.youtube.com/watch?v=RjQpep8fBdo
	console.log('\nMapped types:')

	type Props = 'propA' | 'propB'
	// Use Props values as their name
	type MappedType1 = {
		[P in Props]: P
	}
	const props1: MappedType1 = {
		propA: 'propA',
		propB: 'propB',
	}
	console.log(props1)
	// Use generics to alter Props type
	type MappedType2<Props extends string | number | symbol> = {
		[P in Props]: P
	}
	type MappedType3 = MappedType2<'propA' | 'propB'>
	// Union of all properties in T
	// Use P to get property values in T => T[P]
	type MappedType4<T> = {
		[P in keyof T]: T[P]
		//readonly [P in keyof T]: T[P]
		//[P in keyof T]?: T[P]
		//[P in keyof T]: T[P] | null
	}
	type MappedType5 = MappedType4<{ a: 'a'; b: 'b' }>

	// Utility types https://www.youtube.com/watch?v=Fgcu_iB2X04
	// TS docs https://www.typescriptlang.org/docs/handbook/utility-types.html
	console.log('\nUtility types:')
	console.log('Partial:')

	const person2: Partial<Person1> = {
		fname: 'Jack',
	}

	console.log(person2)

	console.log('Required:')
	interface person2 {
		fname?: string
		age?: number
	}
	const person3: Required<person2> = {
		fname: 'James',
		age: 30,
	}

	console.log(person3)

	console.log('Readonly:')

	const person4: Readonly<person2> = {
		fname: 'James',
		age: 30,
	}

	// Cannot asign value because person4 is readonly
	//person4.fname = 'Jack'

	console.log(person4)

	console.log('Record:')

	type Record1<K extends keyof any, T> = {
		[P in K]: T
	}

	// Record key: string and value: number
	const record1: Record1<string, number> = {}
	record1.apples = 10
	record1.oranges = 10
	console.log(record1)

	interface Record2 {
		// using index signature
		[key: string]: number
		// cannot use union
		//[key: string | number]: number
	}

	const record2: Record2 = {}
	record2.apples = 12
	console.log(record2)
	interface Person1 {
		fname: string
		age: number
	}

	// Reuse type with same keys but different value types
	type Record3 = {
		[P in keyof Person1]: boolean
	}

	const Person1: Person1 = {
		fname: 'Jack',
		age: 46,
	}

	console.log(Person1)

	const record3: Record3 = {
		fname: true,
		age: false,
	}

	console.log(record3)

	// merge types
	type Record4<K extends keyof any, T> = {
		[P in K]: T
	} & { property1: string }

	console.log('Pick:')

	type Pick<T, Props extends keyof T> = {
		[P in Props]: T[P]
	}
	// Pick property type from an original type
	type MappedType6 = Pick<{ a: 'a'; b: 'b' }, 'a'>

	const person5: MappedType6 = {
		a: 'a',
	}

	console.log(person5)

	console.log('Omit:')

	const person6: Omit<Person1, 'age'> = {
		fname: 'Marylin',
		// won't work
		//age: 30
	}

	console.log(person6)

	console.log('Exclude:')

	let person7: Exclude<'fname' | 'sname' | 'age', 'age'> = 'fname'
	person7 = 'sname'
	// Won't work
	//person7 = "age"

	console.log(person7)

	console.log('Extract:')

	let person8: Extract<'fname' | 'sname' | 'age', 'fname' | 'age'> = 'fname'
	person8 = 'age'
	// Won't work
	//person8 = "sname"

	console.log(person8)

	console.log('NonNullable:')

	let person9: NonNullable<string | undefined | null> = 'fname'
	person9 = 'sname'
	// Won't work
	//person9 = null

	console.log(person9)

	console.log('Parameters:')

	const person10: Parameters<(fname: string) => void> = ['Jack']
	const person11: Parameters<<T>(arg: T) => T> = [
		{
			fname: 'James',
			age: 5,
		},
	]

	console.log(person10)
	console.log(person11)

	console.log('ConstructorParameters:')
	console.log('ReturnType:')

	// Constructs type based on return type of a function
	const person12: ReturnType<() => string> = "Jack"

	console.log(person12)

	console.log('InstanceType:')
	class PersonClass {
		fname = 'Jack'
		sname = 'Great'
	}

	type TypeFromPersonClass = InstanceType<typeof PersonClass>

	const person13: TypeFromPersonClass = {
		fname: 'James',
		sname: 'Big'
	}

	console.log(PersonClass)
	console.log(person13)

	console.log('ThisParameterType:')
	console.log('OmitThisParameter:')
	console.log('ThisType:')
	console.log('Intrinsic string manipulation:')
	console.log('Uppercase:')
	console.log('Lowercase:')
	console.log('Capitalize:')
	console.log('Uncapitalize:')
}
