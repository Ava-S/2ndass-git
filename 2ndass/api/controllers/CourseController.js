/**
 * CourseController
 *
 * @description :: Server-side logic for managing courses
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {

    loadCourseInfo: function (req, res) {

        var courseCode = req.param("coursecode");

        Course.find({
            code: courseCode
        }).populateAll().exec(function (err, courses) {

            // error returns error from server
            if (err) {
                return res.serverError(err);
            }

            // No courses found with this course code
            if (courses.length == 0) {
                return res.send(courses);
            } else {
                console.log(courses[0]);

                // We found a course with this course code.
                return res.view("coursepage", {
                    course: courses[0]
                });
            }


        });


    }

};
