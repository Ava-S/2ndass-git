/**
 * Review.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/documentation/concepts/models-and-orm/models
 */

module.exports = {

    attributes: {
        title: {
            type: "string",
            required: true
        },

        author: {
            type: "string",
            required: true
        },
        
        rating: {
            type: "float",
            required: true
        },

        content: {
            type: "string",
        },

        date: {
            type: "string",
            required: true
        },
        
        courses: {
            collection: 'course',
            via: 'reviews'
        }
    },

    seedData:[
        {
            //id: 1
            title: 'What a stupid course!',
            author: '_and_edam',
            rating: '0.5',
            content: "I didn/'t like this course at all. The teacher was boring, and too fast. The homework must be done in a too short amount of time. Bah bah" ,
            date: '5/10/2015',
            courses: [{
                id: 1 //Programming
            }]
        },

        {
            //id: 2
            title: 'Nice course!',
            author: 'Staartvin',
            rating: '4.5',
            content: "Interesting course. Teacher was nice and helpful" ,
            date: '30/12/2015',
            courses: [{
                id: 1 //programming
            }] 
        },
        {
            //id: 3
            title: 'Quite easy',
            author: 'Staartvin',
            rating: '4.5',
            content: "Interesting course. Teacher was nice and helpful" ,
            date: '30/1/2016',
            courses: [{
                id: 2 //LST
            }] 
        },
        {
            //id: 4
            title: 'Enjoyable!',
            author: '_and_edam',
            rating: '3.38',
            date: '5/10/2015',
            courses: [{
                id: 3 //Calculus B
            }]
        },
    ]
};

