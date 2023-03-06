-- CreateTable
CREATE TABLE "Users" (
    "id" SERIAL NOT NULL,
    "timeLeft" INTEGER NOT NULL,
    "score" INTEGER NOT NULL,

    CONSTRAINT "Users_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Questions" (
    "correct" BOOLEAN NOT NULL,
    "id" SERIAL NOT NULL,
    "questionId" INTEGER NOT NULL,
    "userId" INTEGER NOT NULL,

    CONSTRAINT "Questions_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "Questions" ADD CONSTRAINT "Questions_userId_fkey" FOREIGN KEY ("userId") REFERENCES "Users"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
