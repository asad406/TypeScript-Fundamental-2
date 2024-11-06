
{
    // Constraints in TypeScript
    const addCourseToStudent = <T extends { id: number; name: string; email: string }>(student: T) => {
        const course = "Next level web developer";
        return {
            ...student,
            course
        }
    }
    const student = addCourseToStudent({id: 123,name:'mirza', email: 'm@m.com', developerType:'full Stack'})
    console.log(student);
}