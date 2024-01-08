import {PrismaClient} from "@prisma/client";

const prisma = new PrismaClient()

async function test1() {
  await prisma.user.create({
    data: {
      name: 'wu',
      email:'111@wu.com'
    }
  })

  await prisma.user.create({
    data: {
      name: 'xin',
      email:'222@xin.com'
    }
  })

  const users = await prisma.user.findMany()
  console.log(users)

}
// test1()

const prisma2 = new PrismaClient({
  log: [
    {
      emit: 'stdout',
      level: 'query'
    }
  ]
})

async function test2() {
  const user = await prisma.user.create({
    data: {
      name: 'xinxin',
      email: 'xinxin@xin.com',
      posts: {
        create: [
          {
            title: 'aaa',
            content: 'aaaa'
          },
          {
            title: 'bbb',
            content: 'bbbb'
          }
        ]
      }

    }
  })
  console.log(user)
}
// test2()

async function test3() {
  await prisma.post.update({
    where: {
      id: 2
    },
    data: {
      content: 'xxx'
    }
  })
}

// test3()

async function test4() {
  await prisma.post.delete({
    where: {
      id: 2
    }
  })
}
test4()