/**
 * Course.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/documentation/concepts/models-and-orm/models
 */

module.exports = {

    attributes: {
        name: {
            type: "string",
            required: true,
            unique: true
        },

        code: {
            type: "string",
            required: true,
            unique: true
        },

        periods: {
            collection: 'period',
            via: 'courses',
            dominant: true
        },

        department: {
            type: "string",
            required: true,
        },

        subdepartment: {
            type: "string",
        },

        description: {
            type: "string",
            required: true
        },

        website: {
            type: "url"
        },

        level: {
            type: "string",
            required: true
        },

        gradedivisions: {
            collection: 'gradedivision',
            via: 'courses',
            dominant: true
        },

        rating: {
            type: "float",
            required: true,
            defaultsTo: -1.0
        },

        passingrate: {
            type: "float",
            required: true,
            defaultsTo: -1.0
        },

        teachers: {
            collection: 'teacher',
            via: 'courses',
            dominant: true
        },

        books: {
            collection: 'book',
            via: 'courses',
            dominant: true
        },

        color: {
            type: "string",
            enum: ["blue", "pink", "orange", "green"],
            defaultsTo: "blue"
        },

        exams: {
            collection: 'exam',
            via: 'courses',
            dominant: true
        },
        
        summaries: {
            collection: 'summary',
            via: 'courses',
            dominant: true
        },
        
        reviews: {
            collection: 'review',
            via: 'courses',
            dominant: true
        },
    },

    seedData: [
        {
            //id: 1
            name: 'Programming',
            code: '2IP90',
            department: "M&CS",
            subdepartment: "Computer Science",
            description: 'Course on hands-on Java programming, basic principles of object-oriented programming, and the Swing framework for graphics and user interaction',
            level: '1',
            rating: '7.6',
            passingrate: '58.4',
            color: "orange",

    },
        {
            //id: 2
            name: 'Logic And Set Theory',
            code: '2IT60',
            department: "M&CS",
            subdepartment: "Computer Science",
            description: 'Logical reasoning is an indispensable tool when designing a solution to any complex technical problem. This course discusses the principles of correct logical reasoning. You learn to formulate statements in unambiguous logical language, and to manipulate statements in a structured and logically valid manner. At the end of the course you are able to give simple mathematical proofs, in particular using the technique of mathematical induction.',
            website: 'http://www.win.tue.nl/~luttik/Courses/LST/',
            level: '1',
            rating: '7.7',
            passingrate: '40',
            color: "pink"
    },
        {
            //id: 3
            name: 'Calculus B',
            code: '2WBB0',
            department: "M&CS",
            subdepartment: "Mathematics",
            description: 'Technical science uses mathematics as a language to describe phenomena and to solve problems. With trigonometry one can describe waves. In many problems an optimal setting of parameters should be found. This can be done with mathematical techniques such as differentiation. Integral calculus is needed for the calculation of energy and power. Many models use differential equations. In this course you will learn these and other basic techniques but also the formal aspects of mathematics.',
            level: '0',
            rating: '1.0',
            passingrate: '52',
            color: "green"
    },
        {
            //id: 4
            name: 'Applied Physics',
            code: '3NAB0',
            department: "Applied Physics",
            description: 'Every technical engineer should be able to explain in a well founded way, the general physical phenomena such as; why don’t I fall out of a rollercoaster. Why are the leaves on trees green, why is the sun red at dusk and is the sky blue? And why does the sea level not rise when an iceberg melts. The engineer should be able to apply knowledge of these phenomena in the design of products or the analysis of the world around us. The basic course ‘Applied Physical Sciences” gives the future engineer the basis to work with physical phenomena in both a conceptual and a more fundamental way. To meet the requirements of the different faculties in abstraction levels, the university has chosen to offer this course in three versions. One version is especially composed for the faculty of Mechanical Engineering with a module of concepts specifically important to that faculty. The concepts treated in the other two versions are the same for both, but will be worked out in different ways. In this conceptual version the concepts will be introduced via practical examples (broadening). The focus will be on the application of these concepts for the explanation of general physical phenomena. ',
            website: 'http://www.phys.tue.nl/nfcmr/natuur/collegenatuur.html',
            level: '0',
            rating: '6.1',
            passingrate: '35.2',
            color: "green"
        },
    ]
};
