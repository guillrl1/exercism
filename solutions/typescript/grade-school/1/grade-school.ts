/**
 * Universidad de La Laguna
 * Escuela Superior de Ingeniería y Tecnología
 * Grado en Ingeniería Informática
 * Programación de Aplicaciones Interactivas
 *
 * @author Guillermo López Concepción
 * @since Feb 24 2026
 * @desc School Roster Manager
 * This module manages student enrollment by grade, ensuring uniqueness
 * and providing sorted lists of students.
 * @module GradeSchool
 */

export class GradeSchool {
  private schoolRoster: Map<number, string[]> = new Map();
  private allStudentNames: Set<string> = new Set();

  /**
   * Returns a deep copy of the current roster.
   * Grades are sorted numerically, and students within each grade are sorted alphabetically.
   * @returns {Record<number, string[]>} The formatted school roster.
   */
  public roster(): Record<number, string[]> {
    const sortedRoster: Record<number, string[]> = {};
    const sortedGrades = Array.from(this.schoolRoster.keys()).sort((a, b) => a - b);

    for (const gradeLevel of sortedGrades) {
      sortedRoster[gradeLevel] = this.grade(gradeLevel);
    }

    return sortedRoster;
  }

  /**
   * Adds a student to the roster for a specific grade.
   * If the student is already in the school, they are not added again.
   * @param {string} studentName - The name of the student.
   * @param {number} gradeLevel - The grade to add them to.
   */
  public add(studentName: string, gradeLevel: number): void {
    // Remove student from any previous grade if they exist (ensures uniqueness)
    if (this.allStudentNames.has(studentName)) {
      for (const [existingGrade, students] of this.schoolRoster.entries()) {
        if (students.includes(studentName)) {
          this.schoolRoster.set(existingGrade, students.filter(name => name !== studentName));
          break;
        }
      }
    }

    this.allStudentNames.add(studentName);
    const currentGradeStudents = this.schoolRoster.get(gradeLevel) || [];
    currentGradeStudents.push(studentName);
    this.schoolRoster.set(gradeLevel, currentGradeStudents);
  }

  /**
   * Gets a sorted list of all students enrolled in a specific grade.
   * @param {number} gradeLevel - The grade to query.
   * @returns {string[]} An alphabetically sorted list of student names.
   */
  public grade(gradeLevel: number): string[] {
    const students = this.schoolRoster.get(gradeLevel) || [];
    return [...students].sort();
  }
}