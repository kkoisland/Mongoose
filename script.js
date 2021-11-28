const mongoose = require("mongoose")
const User = require("./User")

mongoose.connect("mongodb://localhost/testdb")

run()
async function run() {
  try {
    const user = await User.findByName("Kyle")
    console.log(user)
    // const user = await User.findOne({ name: "Kyle" })
    // user.sayHi()
  } catch (e) {
    console.log(e.message)
  }
}

  // try {
  //   const user = await User.where("age")
  //   .gt("12")
  //   .where("name")
  //   .equals("Kyle")
  //   .limit(2)
  //   .select("age")
  //   user[0].bestFriend = "619ff93dacdcccbb79e400c7"
  //   await user[0].save()

  //   const user = await User.where("name").equals("Kyle")
  //   const user = await User.findOne({ name: "Kyle"})
  //   const user = await User.exits({ name: "Kyle"})
  //   const user = await User.create({
  //     name: "Kyle",
  //     age: 26,
  //     email: 'TEST@test.com',
  //     hobbies: ["Weight Lifting", "Bowling"],
  //     address: {
  //       street: "Main St",
  //     },
  //   })
  //   user.createdAt = 5
  //   await user.save()
  //   console.log(user)
  // } catch (e) {
  //   console.log(e.message)
  //   // console.log(e.errors.age)
  // }
  // const user = new User({ name: "Kyle", age: 26 })
  // await user.save()
// }