const correctAnswerQ1 = 'Dabin'
const correctAnswerQ2 = ['Napoleon',  'Lisa', 'King']
const correctAnswerQ3 = 'true'
let points = 0

const existInTheCorrectAnswer = ( answer , correctAnswers) => correctAnswers.includes(answer)

const grade = () => {
  let q1Radios = document.getElementsByName('answers-q1')
  for (let i = 0; i < q1Radios.length; i++){
    if (q1Radios[i].checked) {
      if (q1Radios[i].value === correctAnswerQ1) points ++
    }
  }

  let q2Radios = document.getElementsByName('answers-q2')
  let userAnswers = new Array()
  for (let i = 0; i < q2Radios.length; i ++) {
    if (q2Radios[i].checked) {
      userAnswers.push(q2Radios[i].value)
    }
  }
  const sudoVerdict = userAnswers.every(elt => correctAnswerQ2.includes(elt))

  let verdict = false

  if (userAnswers.length == 3 && sudoVerdict == true) verdict = true
  if (userAnswers.length == 0 ) verdict =  false
  if (verdict == true) points ++
 
  let q3Radios = document.getElementsByName('answers-q3')
  for (let i = 0; i < q3Radios.length; i++) {
    if (q3Radios[i].checked){
      if(q3Radios[i].value === correctAnswerQ3) points ++
    }

  }
  localStorage.setItem('points', points)
}

document.getElementById('userFormPage3').addEventListener('submit', () => {
  grade()
})