/**
 * Exam.js
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

        solution: {
            type: "boolean",
            defaultsTo: false
        },

        courses: {
            collection: 'course',
            via: 'exams'
        }
    },
    seedData: [
        {
            //id: 1
            name: '2IP90-Nov-2015',
            url: '/files/oldexams/2ip90/2ip90-nov2015.pdf',
            courses: [{
                id: 1 //Programming
            }]
        },
        {
            //id: 2
            name: '2WBB0-Oct-2012 (NL)',
            url: '/files/oldexams/2wbb0/2wbb0-oct-2012.pdf',
            courses: [{
                id: 3 //Calculus B
            }]
        },
        {
            //id: 3
            name: '2IT60-Nov-2012',
            url: '/files/oldexams/2it60/2it60-nov-2012.pdf',
            solution: true,
            courses: [{
                id: 2 //LST
            }]
        },
        {
            //id: 4
            name: 'Solutions',
            url: '/files/oldexams/2it60/2it60-nov-2012-sol.pdf',
            solution: true,
            courses: [{
                id: 2 //LST
            }]
        },
        {
            //id: 5
            name: '2IT60-Jan-2013',
            url: '/files/oldexams/2it60/2it60-jan-2013.pdf',
            solution: true,
            courses: [{
                id: 2 //LST
            }]
        },
        {
            //id: 6
            name: 'Solutions',
            url: '/files/oldexams/2it60/2it60-jan-2013-sol.pdf',
            solution: true,
            courses: [{
                id: 2 //LST
            }]
        },
        {
            //id: 7
            name: '2IT60-Apr-2013',
            url: '/files/oldexams/2it60/2it60-apr-2013.pdf',
            courses: [{
                id: 2 //LST
            }]
        },
        {
            //id: 8
            name: '2IT60-Oct-2013',
            url: '/files/oldexams/2it60/2it60-oct-2013.pdf',
            solution: true,
            courses: [{
                id: 2 //LST
            }]
        },
        {
            //id: 9
            name: 'Solutions',
            url: '/files/oldexams/2it60/2it60-oct-2013-sol.pdf',
            solution: true,
            courses: [{
                id: 2 //LST
            }]
        },
        {
            //id: 10
            name: '2IT60-Jan-2014',
            url: '/files/oldexams/2it60/2it60-jan-2014.pdf',
            courses: [{
                id: 2 //LST
            }]
        },
        {
            //id: 11
            name: '2IT60-Apr-2014',
            url: '/files/oldexams/2it60/2it60-apr-2014.pdf',
            courses: [{
                id: 2 //LST
            }]
        },
        {
            //id: 12
            name: '2IT60-Oct-2014',
            url: '/files/oldexams/2it60/2it60-oct-2014.pdf',
            solution: true,
            courses: [{
                id: 2 //LST
            }]
        },
        {
            //id: 13
            name: 'Solutions',
            url: '/files/oldexams/2it60/2it60-oct-2014-sol.pdf',
            solution: true,
            courses: [{
                id: 2 //LST
            }]
        },
        {
            //id: 14
            name: '2IT60-Jan-2015',
            url: '/files/oldexams/2it60/2it60-jan-2015.pdf',
            courses: [{
                id: 2 //LST
            }]
        },
        {
            //id: 15
            name: '2IT60-Apr-2015',
            url: '/files/oldexams/2it60/2it60-apr-2015.pdf',
            courses: [{
                id: 2 //LST
            }]
        },
        {
            //id: 16
            name: '2IT60-Oct-2015',
            url: '/files/oldexams/2it60/2it60-oct-2015.pdf',
            solution: true,
            courses: [{
                id: 2 //LST
            }]
        },
        {
            //id: 17
            name: 'Solutions',
            url: '/files/oldexams/2it60/2it60-oct-2015-sol.pdf',
            solution: true,
            courses: [{
                id: 2 //LST
            }]
        },

        {
            //id: 18
            name: '2IT60-Jan-2016',
            url: '/files/oldexams/2it60/2it60-jan-2016.pdf',
            courses: [{
                id: 2 //LST
            }]
        },
        {
            //id: 19
            name: '2IT60-Apr-2016',
            url: '/files/oldexams/2it60/2it60-apr-2016.pdf',
            courses: [{
                id: 2 //LST
            }]
        },

    ]
};
