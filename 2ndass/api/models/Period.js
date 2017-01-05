/**
 * Timeslots.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/documentation/concepts/models-and-orm/models
 */

module.exports = {

    attributes: {
        quartile: {
            type: "integer",
            enum: ['1', '2', '3', '4'],
            required: true
        },

        timeslot: {
            type: "string",
            enum: ['A', 'B', 'C', 'D', 'E'],
            required: true
        },

        courses: {
            collection: 'course',
            via: 'periods'
        }

    },
    seedData: [
        {
            //id: 1
            quartile: '1',
            timeslot: 'A',
            courses: [{
                id: 3 //calculus B
            }]
        },
        {
            //id: 2
            quartile: '1',
            timeslot: 'B',
            courses: [{
                id: 3 //calculus B
            }]
        },
        {
            //id: 3
            quartile: '1',
            timeslot: 'C',
            courses: [
                /*{
                                id:
                            }*/
            ]
        },
        {
            //id: 4
            quartile: '1',
            timeslot: 'D',
            courses: [{
                id: 2 //L&S Theory
            }]
        },
        {
            //id: 5
            quartile: '1',
            timeslot: 'E',
            courses: [{
                id: 1 //Programming
            }]
        },
        {
            //id: 6
            quartile: '2',
            timeslot: 'A',
            courses: [{
                id: 4
            }]
        },
        {
            //id: 7
            quartile: '2',
            timeslot: 'B',
            courses: [{
                id: 4
            }]
        },
        {
            //id: 8
            quartile: '2',
            timeslot: 'C',
            courses: [
                /*{
                                id:
                            }*/
            ]
        },
        {
            //id: 9
            quartile: '2',
            timeslot: 'D',
            courses: [
                /*{
                                id:
                            }*/
            ]
        },
        {
            //id: 10
            quartile: '2',
            timeslot: 'E',
            courses: [{
                id: 2 //L&S Theory
            }]
        },
        {
            //id: 11
            quartile: '3',
            timeslot: 'A',
            courses: [
                /*{
                                id:
                            }*/
            ]
        },
        {
            //id: 12
            quartile: '3',
            timeslot: 'B',
            courses: [
                /*{
                                id:
                            }*/
            ]
        },
        {
            //id: 13
            quartile: '3',
            timeslot: 'C',
            courses: [
                /*{
                                id:
                            }*/
            ]
        },
        {
            //id: 14
            quartile: '3',
            timeslot: 'D',
            courses: [
                /*{
                                id:
                            }*/
            ]
        },
        {
            //id: 15
            quartile: '3',
            timeslot: 'E',
            courses: [
                /*{
                                id:
                            }*/
            ]
        },
        {
            //id: 16
            quartile: '4',
            timeslot: 'A',
            courses: [
                /*{
                                id:
                            }*/
            ]
        },
        {
            //id: 17
            quartile: '4',
            timeslot: 'B',
            courses: [
                /*{
                                id:
                            }*/
            ]
        },
        {
            //id: 18
            quartile: '4',
            timeslot: 'C',
            courses: [
                /*{
                                id:
                            }*/
            ]
        },
        {
            //id: 19
            quartile: '3',
            timeslot: 'D',
            courses: [
                /*{
                                id:
                            }*/
            ]
        },
        {
            //id: 20
            quartile: '4',
            timeslot: 'E',
            courses: [
                /*{
                                id:
                            }*/
            ]
        },
  ]
};
