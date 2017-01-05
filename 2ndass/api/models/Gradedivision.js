/**
 * Gradedivision.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/documentation/concepts/models-and-orm/models
 */

module.exports = {

    attributes: {
        examinationType: {
            type: "string",
            required: true
        },

        percentage: {
            type: "integer",
            required: true
        },

        courses: {
            collection: 'course',
            via: 'gradedivisions'
        }
    },

    seedData: [
        {
            //id: 1
            examinationType: 'Final Examination',
            percentage: '70',
            courses: [
                {
                    id: 2 //L&S Theory
            },
                {
                    id: 3 //Calculus B
            }]
        },
        {
            //id: 2
            examinationType: 'Interim Examination (Weekly tests)',
            percentage: '30',
            courses: [{
                id: 2 //L&S Theory
            }]
        },
        {
            //id: 3
            examinationType: 'Final Examination',
            percentage: '60',
            courses: [{
                id: 1 //programming
            }]
        },
        {
            //id: 4
            examinationType: '(Homework) Assignments',
            percentage: '40',
            courses: [{
                id: 1 //programming
            }]
        },
        {
            //id: 5
            examinationType: '(Homework) Assignments',
            percentage: '10',
            courses: [{
                id: 3 //calculus B
            }]
        },
        {
            //id: 6
            examinationType: 'Interim Examination (Starttest)',
            percentage: '10',
            courses: [{
                id: 3 //Calculus B
            }]
        },
        {
            //id: 7
            examinationType: 'Interim Examination (Intermediate test)',
            percentage: '10',
            courses: [{
                id: 3 //calculus B
            }]
        },
        {
            //id: 8
            examinationType: 'Interim Examination (Intermediate test)',
            percentage: '20',
            courses: [{
                id: 4 //Physics B
            }]
        },
        {
            //id: 9
            examinationType: 'Interim Examination (notebook)',
            percentage: '10',
            courses: [{
                id: 4 //Physics B
            }]
        },
  ]
};
