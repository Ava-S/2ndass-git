/**
 * Teacher.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/documentation/concepts/models-and-orm/models
 */

module.exports = {

    attributes: {
        name: {
            type: "string",
            required: "true"
        },

        faculty: {
            type: "string",
            required: true
        },

        email: {
            type: "email",
            required: true
        },

        courses: {
            collection: 'course',
            via: 'teachers'
        }

    },

    seedData: [
        {
            //id: 1
            name: 'Kees Huizing',
            faculty: 'M&CS',
            email: 'c.huizing@tue.nl',
            courses: [{
                id: 1 //programming
            }]
        },
        {
            //id: 2
            name: 'dr.ir. E.E.M. (Emiel) van Berkum',
            faculty: 'Mathematics and Computer Science',
            email: 'e.e.m.v.berkum@tue.nl',
            courses: [{
                id: 3 //calculus B
            }]
        },
        {
            //id: 3
            name: 'dr. S.P. (Bas) Luttik',
            faculty: 'Mathematics and Computer Science',
            email: 's.p.luttik@tue.nl',
            courses: [{
                id: 2 //L&S Theory
            }]
        },
        {
            //id: 4
            name: 'dr. C.J. (Roel) Bloo',
            faculty: 'Mathematics and Computer Science',
            email: 'c.j.bloo@tue.nl',
            courses: [{
                id: 2 //L&S Theory
            }]
        },
        {
            //id: 5
            name: 'dr. R.A.H. (Richard) Engeln',
            faculty: 'Applied Physics',
            email: 'r.a.h.engeln@tue.nl',
            courses: [{
                id: 4 //physics
            }]
        },
  ]
};
