import { getUserQuestions } from "@/lib/actions/user.action";
import { SearchParamsProps } from "@/types";
import React from "react";
import QuestionCard from "../card/QuestionCard";
import Pagination from "./pagination/Pagination";

interface Props extends SearchParamsProps {
  userId: string;
  clerkId?: string | null;
  searchProps?: string | null;
}

const QuestionTab = async ({
  searchProps,
  userId,
  clerkId,
  searchParams,
}: Props) => {
  const result = await getUserQuestions({
    userId,
    page: searchParams.page ? +searchParams.page : 1,
  });

  return (
    <>
      <div className="flex flex-col gap-5">
        {result.questions.map((question) => (
          <QuestionCard
            key={question._id}
            _id={question._id}
            clerkId={clerkId}
            title={question.title}
            tags={question.tags}
            author={question.author}
            upvotes={question.upvotes}
            views={question.views}
            answers={question.answers}
            createdAt={question.createdAt}
          />
        ))}
      </div>
      <div className="mt-7">
        <Pagination
          pageNumber={searchParams.page ? +searchParams.page : 1}
          isNext={result?.isNextQuestions}
        />
      </div>
    </>
  );
};

export default QuestionTab;
