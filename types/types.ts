export interface Course {
  id: string
  name: string
  credits: number
  grade: string
}

export interface Semester {
  id: string
  courses: Course[]
}