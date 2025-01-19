"use client"

import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Trash2 } from "lucide-react"
import { Course } from "@/types/types"

interface CourseFormProps {
  course: Course
  semesterId: string
  onUpdate: (semesterId: string, courseId: string, field: keyof Course, value: string | number) => void
  onRemove: (semesterId: string, courseId: string) => void
  showRemoveButton: boolean
  gradePoints: { [key: string]: number }
}

export function CourseForm({
  course,
  semesterId,
  onUpdate,
  onRemove,
  showRemoveButton,
  gradePoints,
}: CourseFormProps) {
  return (
    <div className="grid grid-cols-12 gap-4 items-center">
      <div className="col-span-5">
        <Label htmlFor={`course-${course.id}`}>Course Name</Label>
        <Input
        className="bg-purple-800/50 border border-purple-500/30 rounded-lg py-2 px-3 text-white placeholder-purple-300 focus:ring-2 focus:ring-purple-400/50 focus:border-purple-400"
          id={`course-${course.id}`}
          value={course.name}
          onChange={(e) =>
            onUpdate(semesterId, course.id, "name", e.target.value)
          }
          placeholder="Course name"
        />
      </div>
      <div className="col-span-2">
        <Label htmlFor={`credits-${course.id}`}>Credits</Label>
        <Input
          id={`credits-${course.id}`}
          type="number"
          min="1"
          max="6"
          value={course.credits}
          className="bg-purple-800/50 border border-purple-500/30 rounded-lg py-2 px-3 text-white placeholder-purple-300 focus:ring-2 focus:ring-purple-400/50 focus:border-purple-400"
          onChange={(e) =>
            onUpdate(
              semesterId,
              course.id,
              "credits",
              parseInt(e.target.value) || 0
            )
          }
        />
      </div>
      <div className="col-span-3">
        <Label htmlFor={`grade-${course.id}`}>Grade</Label>
        <select
          id={`grade-${course.id}`}
          className="w-full bg-purple-800/50 border border-purple-500/30 rounded-lg py-2 px-3 text-white placeholder-purple-300 focus:ring-2 focus:ring-purple-400/50 focus:border-purple-400m"
          value={course.grade}
          onChange={(e) =>
            onUpdate(semesterId, course.id, "grade", e.target.value)
          }
        >
          {Object.keys(gradePoints).map((grade) => (
            <option key={grade} value={grade}>
              {grade}
            </option>
          ))}
        </select>
      </div>
      <div className="col-span-2 flex justify-end">
        {showRemoveButton && (
          <Button
            variant="destructive"
            size="sm"
            onClick={() => onRemove(semesterId, course.id)}
          >
            <Trash2 className="h-4 w-4" />
          </Button>
        )}
      </div>
    </div>
  )
}