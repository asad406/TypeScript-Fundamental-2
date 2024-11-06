{
    const addCourseToStudent = <T>(student: T) => {
        const course: string = 'next level web Developer'
        return {
            ...student,
            course
        }
    }

    const student1 = addCourseToStudent({ name: 'mirza', email: 'm@m.com', developerType: 'Full Stack' })
    console.log(student1)
    // const student2 = addCourseToStudent({name: 'mirza', email: 'm@m.com', developerType: 'Full Stack'})
}