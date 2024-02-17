const { PrismaClient } = require("@prisma/client");

const database = new PrismaClient();

async function main() {
  try {
    await database.category.createMany({
        data: [
            { name: "رياضيات" },
            { name: "لغات" },
            { name: "فيزياء" },
            { name: "كيمياء" },
            { name: "ادارة" },
            { name: "تكنولوجيا" },
            { name: "اخرى" },
          ],
    });

    console.log("Success");
  } catch (error) {
    console.log("Error seeding the database categories", error);
  } finally {
    await database.$disconnect();
  }
}

main();