export const Types = () => {
  console.log('---------------Types---------------')
  // :number
  const decimalValue: number = 10
  const hexaDecimalValue: number = 0xf10b
  const binaryValue: number = 0b110100
  const octalValue: number = 0o410
  // :string
  const string1: string = "Hello World"
  const string2: string = 'Hello World'
  // :boolean
  const boolean: boolean = true
  // :object
  const object: object = [{name: 'Jack', age: 45}]
  // :array
  // square brackets
  const stringArray: string[] = ['Jack', 'James']
  const anyArray: any[] = ['Jack', 5]
  // generic array
  const genericArray: Array<string> = ['Apple', 'Orange', 'Banana']
  // :enum
  const enums = () => {
    console.log('\nEnum:')
    enum Role { ADMIN, READ_ONLY, AUTHOR }

    const person = {
      name: 'Jack',
      role: Role.ADMIN
    }
    console.log(person)

    if(person.role === Role.ADMIN) {
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
      role: [1, 'editor']
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
    if (typeof value1 === 'string')
      console.log(`${value1} is string`)
    if (typeof value1 !== 'string')
      console.log(`${value1} isn't string`)
    if (typeof value1 === 'string' && value1 === 'value1')
      console.log(`${value1} is string of value: value1`)
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
}