export const types = {
  LECTURER_DETECTING: 'LECTURER_DETECTING',
  LECTURER_DETECTED: 'LECTURER_DETECTED',
  SET_DETECTED_LECTURER: 'SET_DETECTED_LECTURER',
  STUDENTS_DETECTING: 'STUDENTS_DETECTING',
  STUDENTS_DETECTED: 'STUDENTS_DETECTED',
  SET_DETECTED_STUDENTS: 'SET_DETECTED_STUDENTS',
  SET_ATTENDANCE: 'SET_ATTENDANCE'
}

export const state = () => ({
  isLecturerDetecting: false,
  isLecturerDetected: false,
  detectedLecturer: null,
  isStudentsDetecting: false,
  isStudentsDetected: false,
  detectedStudents: [],
  attendance: null
})

export const mutations = {
  [types.LECTURER_DETECTING](state) {
    state.isLecturerDetecting = true
  },
  [types.LECTURER_DETECTED](state) {
    state.isLecturerDetecting = false
    state.isLecturerDetected = true
  },
  [types.SET_DETECTED_LECTURER](state, detectedLecturer) {
    state.detectedLecturer = detectedLecturer
  },
  [types.STUDENTS_DETECTING](state) {
    state.isStudentsDetecting = true
  },
  [types.STUDENTS_DETECTED](state) {
    state.isStudentsDetecting = false
    state.isStudentsDetected = true
  },
  [types.SET_DETECTED_STUDENTS](state, detectedStudents) {
    state.detectedStudents = detectedStudents
  },
  [types.SET_ATTENDANCE](state, attendance) {
    state.attendance = attendance
  }
}
