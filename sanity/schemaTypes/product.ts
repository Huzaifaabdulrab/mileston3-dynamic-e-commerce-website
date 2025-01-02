import { Rule } from "sanity"
export const product = {
    name: 'product',
    type: 'document',
    title: 'Product',
    fields: [
        {
            name: 'Productimage',
            type: 'image',
            title: 'Product Image',
        }, {
            name: 'Productbrand',
            type: 'string',
            title: 'Product Brand'
        }, {
            name: 'Productname',
            type: 'string',
            title: 'Product Name'
        },
        {
            name: 'Productdescription',
            type: 'string',
            title: 'Product Description',
            validation: (Rule:Rule) => Rule.min(20).max(200).warning('Description should be between 10 and 200 characters.'),
        },{
            name: 'Productprice',
            type: 'number',
            title: 'Product Price'
        },
        {
            name : 'Operationsys',
            type: 'string',
            title: 'Operation System',
        },
        {
            name: 'Productcategory',
            type: 'string',
            title: 'Product Category',
        }
    ]
}