"use server";

import { auth } from "@clerk/nextjs/server";
import prisma from "./prisma";
import { z } from "zod";
import { revalidatePath, revalidateTag } from "next/cache";

type State = {
  error?: string | undefined;
  success: boolean;
}


export async function addPostAction(prevState: State, formData: FormData) :Promise<State> {
  try {
    const { userId } = auth();
    if (!userId) {
      return { error: "ユーザーが認証されていません。", success: false };
    }
    const postText = formData.get("post") as string;

    const postTextSchema = z
      .string()
      .min(1, "ポスト内容を入力してください")
      .max(140, "140字以内で入力してください");
    const validatePostText = postTextSchema.parse(postText);
    await prisma.post.create({
      data: {
        content: validatePostText,
        authorId: userId,
      },
    });

    revalidatePath("/");
    revalidateTag("");

    return {
      error: undefined,
      success: true
    };
  } catch (error) {
    if (error instanceof z.ZodError) {
      return {
        error: error.errors.map((e) => e.message).join(","),
        success: false,
      };
    } else if (error instanceof Error) {
      return {
        error: error.message,
        success: false,
      };
    } else {
      return {
        error: "予期せぬエラーが発生しました",
        success: false,
      };
    }
  }
}



export const likeAction = async (postId: string) => {
  const { userId } = auth();

  if (!userId) {
    throw new Error("User is not authenticated");
  }

  try {
    const existingLike = await prisma.like.findFirst({
      where: {
        postId,
        userId,
      },
    });

    if (existingLike) {
      await prisma.like.delete({
        where: {
          id: existingLike.id,
        },
      });
      revalidatePath("/");
    } else {
      await prisma.like.create({
        data: {
          postId,
          userId,
        },
      });
      revalidatePath("/");
    }
  } catch (err) {
    console.log(err);
  }
};


export const followAction = async (userId: string) => {
  const { userId: currentUserId } = auth();

  if (!currentUserId) {
    throw new Error("User is not authenticated");
  }

  try {
    const existingFollow = await prisma.follow.findFirst({
      where: {
        followerId: currentUserId,
        followingId: userId
      },
    });

    if (existingFollow) {
      // フォロー済みの場合はアンフォロー
      await prisma.follow.delete({
        where: {
          followerId_followingId: {
            followerId: currentUserId,
            followingId: userId,
          }
        },
      });
      revalidatePath(`/profile/${userId}`);
    } else {
      // follow機能
      await prisma.follow.create({
        data: {
          followerId: currentUserId,
          followingId: userId,
        },
      });
      revalidatePath(`/profile/${userId}`);
    }
  } catch (err) {
    console.log(err);
  }
};
