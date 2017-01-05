/**
 * Books.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/documentation/concepts/models-and-orm/models
 */

module.exports = {

    attributes: {
        name: {
            type: "string",
            required: true
        },

        isbn: {
            type: "string",
            unique: true
        },
        
        isisbn: {
            type: "boolean",
            defaultsTo: false,
        },

        author: {
            type: "string",
            required: true
        },

        courses: {
            collection: 'course',
            via: 'books'
        },
        
        bolurl: {
            type: "url"
        },
        
        ssurl: {
            type: "url"
        },
        
        pdf: {
            type: "string"
        }
        

    },

    seedData: [
        {
            //id: 1
            name: 'Introduction to Programming Using Java',
            author: 'David J. Eck',
            courses: [{
                id: 1 //programming
            }],
            pdf: '/files/books/2ip90/2ip90-pdf.pdf'
        },
        {
            //id: 2
            name: 'Object Oriented Programming - with Java and Visual Interactive Support (online reader)',
            author: 'Kees Huizing, Ruurd Kuiper',
            courses: [{
                id: 1 //programming
            }],
            pdf: '/files/books/2ip90/2ip90-pdf1.pdf'
        },
        {
            //id: 3
            name: 'Calculus, A Complete Course',
            isbn: '9780321781079',
            isisbn: true,
            author: 'Robert A. Adams',
            courses: [{
                id: 3 //calculus B
            }],
            bolurl: 'https://www.bol.com/nl/p/calculus-a-complete-course/9200000011637596/',
            ssurl: 'https://www.studystore.nl/p/9780321781079/calculus-a-complete-course'
        },
        {
            //id: 4
            name: 'Algebraic Skills lecture notes (dictation)',
            isbn: '2611',
            author: 'unknown',
            courses: [{
                id: 3 //calculus B
            }]
        },
        {
            //id: 5
            name: 'Logical Reasoning: A First Course',
            isbn: '9780954300678',
            isisbn: true,
            author: 'Rob Nederpelt, Fairouz Kamareddine',
            courses: [{
                id: 2 //L&S Theory
            }],
            bolurl: 'https://www.bol.com/nl/p/logical-reasoning/1001004002116383/',
            ssurl: 'https://www.studystore.nl/p/9780954300678/logical-reasoning-a-first-course',
        },

        {
            //id: 6
            name: 'University Physics with Modern Physics, Global Edition',
            isbn: '9781292100319',
            isisbn: true,
            author: 'Hugh D., Young & Roger A.',
            courses: [{
                id: 4 //Physics A
            }],
            bolurl: 'https://www.bol.com/nl/p/university-physics-with-modern-physics/9200000041222969/',
            ssurl: 'https://www.studystore.nl/p/9781292100319/university-physics-with-modern-physics-with-masteringphysics-global-edition'
        },
  ]
};
