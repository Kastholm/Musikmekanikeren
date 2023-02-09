// schemas/pet.js
export default {
     //name: 'pet' tells the studio that the JSON gets "_type": "pet" added to it when you create a new document in the studio (yes, we know, there’s a lot of “type” to keep track of, but bear with us)
  name: 'pet',
  //The type: 'document' property tells the studio that it should make it possible to make new pet documents.
  type: 'document',
  //The title: 'Pet' defines what this document type is called in the studio UI. While it's common that title is simply the capitalized form of name, it doesn't have to be. "Furry companion" would be an equally appropriate value for title.
  title: 'Pet',
  //For fields you find an array of objects that describes the fields you’ll have available for this document type. In this case, objects with name, type, title in it. Notice how it’s the same keys you have for the document type?
  fields: [
    {
     //Inside the fields array, you find one JavaScript object in it with three keys. These describe what the first and only field is and its name. It might take some getting used to, but the value of name is what ends up as the key in the data that the Studio outputs. You will see an example of that later.
      name: 'name',
      //You should also take notice of the type. The value string tells the Studio what kind of input to put here. In this case, it's a single-line text input field. Sanity Studio comes with a lot of built-in field types, including, but not limited to: number, datetime, image, array, and object.
      type: 'string',
      title: 'Name',
    },
  ],
}
