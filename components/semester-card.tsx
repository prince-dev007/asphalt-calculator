"use client"

import { Button } from "@/components/ui/button"
import { PlusCircle, Trash2 } from "lucide-react"
import { CourseForm } from "@/components/course-form"
import { Course, Semester } from "@/types/types"

interface SemesterCardProps {
  semester: Semester
  onAddCourse: (semesterId: string) => void
  onUpdateCourse: (
    semesterId: string,
    courseId: string,
    field: keyof Course,
    value: string | number
  ) => void
  onRemoveCourse: (semesterId: string, courseId: string) => void
  onRemoveSemester: (semesterId: string) => void
  showRemoveSemester: boolean
  gradePoints: { [key: string]: number }
}

export function SemesterCard({
  semester,
  onAddCourse,
  onUpdateCourse,
  onRemoveCourse,
  onRemoveSemester,
  showRemoveSemester,
  gradePoints,
}: SemesterCardProps) {
  return (
    <div className="bg-white/10 backdrop-blur-sm p-6 rounded-xl border border-white/20">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-xl font-semibold">
          Semester {semester.id}
        </h2>
        {showRemoveSemester && (
          <Button
            className=""
            variant="destructive"
            size="sm"
            onClick={() => onRemoveSemester(semester.id)}
          >
            <Trash2 className="h-4 w-4" />
          </Button>
        )}
      </div>

      <div className="space-y-4">
        {semester.courses.map((course) => (
          <CourseForm
            key={course.id}
            course={course}
            semesterId={semester.id}
            onUpdate={onUpdateCourse}
            onRemove={onRemoveCourse}
            showRemoveButton={semester.courses.length > 1}
            gradePoints={gradePoints}
          />
        ))}
      </div>

      <Button
        className="mt-4 text-purple-800 hover:text-purple-800"
        variant="outline"
        onClick={() => onAddCourse(semester.id)}
      >
        <PlusCircle className="h-4 w-4 mr-2" />
        Add Course
      </Button>
    </div>
  )
}