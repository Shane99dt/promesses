// Exercise 1

// const printHello = () => {
//   return new Promise((resolve, reject) => {

//     setTimeout(() => {
//       resolve('Hello world')
//     }, 2000)
//   })
// }

// const getResult = async () => {
//   console.log("Wait 2 sec")
//   const result = await printHello()
//   console.log(result)
// }

// getResult()


// Exercise 2

// const hotOrCold = () => {
//   return new Promise((resolve, reject) => {

//     setTimeout(() => {
//       const temperature = 15

//       if(temperature <= 10){
//         resolve('Il fait froid')
//       } else {
//         reject("Il fait chaud")
//       }
//     }, 4000)
//   })
// }

// const getResult2 = async () => {
//   try {
// 	  const result = await hotOrCold()
// 	  console.log(result)
// 	} catch(error) {
// 	  console.log(error)
// 	}
// }

// getResult2()


// Excercise 3

const faireLaLessive = () => {
  return new Promise((resolve, reject) => {

    setTimeout(() => {

      resolve('J\'ai fini la lessive')
    }, 3000)
  })
}

const faireLaVaisselle = () => {
  return new Promise((resolve, reject) => {

    setTimeout(() => {

      resolve('J\'ai fini la vaisselle')
    }, 1500)
  })
}

const getResult3 = async () => {
  console.log('Je commence la lessive')
  const result1 = await faireLaLessive()
  console.log(result1)

  console.log('Je commence à faire la vaisselle')
  const result2 = await faireLaVaisselle()
  console.log(result2)
  console.log('J\'ai fini de faire le ménage')
}

getResult3()