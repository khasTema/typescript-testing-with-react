interface MyTypedArrayOfObjects {
    people: {
      name: string,
      age: number,
      url: string,
      note?: string | number
    }[]
  }

export type {MyTypedArrayOfObjects}
// I can yse this type in any place it reqired to send props and to recieve