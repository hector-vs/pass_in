import { prisma }  from '../src/lib/prisma'

async function seed() {
  await prisma.event.create({
    data: {
      id: '3d459019-2651-4031-ba91-8aea8a11b12b',
      title: 'Pridium Fest 3',
      slug: 'pridium-fest-3',
      details: 'Um evento para quem curte um som bom >:D',
      maximumAttendees: 300,
    }
  })
}

seed().then(() => {
  console.log('Database seeded!')
  prisma.$disconnect()
})