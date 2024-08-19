interface ApiResponse {
    a: string;
    b: string;
    c: string;
    d: string;
}

interface Person {
    fullName: string;
    age: number;
}

interface OldYoung {
    min: number;
    max: number;
}

const apiList: ApiResponse[] = [
    { a: "Santi", b: "Lemus", c: "Gonzalez", d: '33' },
    { a: "Christian", b: "Lemus", c: "Gonzalez", d: '34' },
    { a: "Sebastian", b: "Lemus", c: "Cadena", d: '23' },
    { a: "Valentina", b: "Lemus", c: "Cadena", d: '20' },
]

const extractAttributes = (ar: ApiResponse): Person => ({ fullName: `${ar.a} ${ar.b}`, age: parseInt(ar.d)})


const extractListAttributes = (list: ApiResponse[]): Person[] => {
    return list.map(extractAttributes)
}

const getOldestAndYoungest = (persons: Person[]): OldYoung => {
    const min = persons.reduce((acc, cur) => acc > cur.age ?  cur.age : acc, Number.MAX_SAFE_INTEGER )
    const max = persons.reduce((acc, cur) => acc < cur.age ?  cur.age : acc, 0 )
    return { min, max }
}

const List = () => {
    const persons = extractListAttributes(apiList)
    const { min, max } = getOldestAndYoungest(persons)
    return (
        <>
            <ul>
                { persons
                .map(({fullName, age}) => (<li key={fullName}>Name: {fullName} Age: {age}</li>))}
            </ul>
            <p>The oldest person is { max } years old</p>
            <p>The youngest person is { min } years old</p>
        </>

    )

}

export default List;