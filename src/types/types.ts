interface MyTypedArrayOfObjects {
    people: {
      name: string,
      age: number,
      url: string,
      note?: string | number
    }[]
  }

interface AddInput {
    name: string;
    age: string;
    note: string;
    img: string;
}

interface AddToListProps {
    people: MyTypedArrayOfObjects['people'],
    setPeople: React.Dispatch<React.SetStateAction<MyTypedArrayOfObjects['people']>>
}

export type {MyTypedArrayOfObjects, AddInput, AddToListProps}
// I can yse this type in any place it reqired to send props and to recieve