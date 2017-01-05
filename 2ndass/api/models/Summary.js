/**
 * Summary.js
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

        url: {
            type: "string",
            unique: true,
            required: true
        },

        courses: {
            collection: 'course',
            via: 'summaries'
        }
  },
    seedData: [
        {
            //id: 1
            name: 'Summary of the most important definitions, axioms and rules',
            url: '/files/summaries/2it60/2it60-sum-1.pdf',
            courses: [{
                id: 2 //LST
            }]
        },
        {
            //id: 2
            name: 'Summary provided by the course',
            url: '/files/summaries/3nab0/3nab0-sum-1.pdf',
            courses: [{
                id: 4 //Phys A
            }]
        },
    ]
    
};

