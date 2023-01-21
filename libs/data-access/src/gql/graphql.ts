/* eslint-disable */
import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
};

export type Favorite = {
  __typename?: 'Favorite';
  createdAt: Scalars['String'];
  id: Scalars['String'];
  tweet: Tweet;
  updatedAt: Scalars['String'];
  user: User;
};

export type FavoriteInput = {
  tweetId: Scalars['String'];
  userId: Scalars['String'];
};

export type HashtagTrend = {
  __typename?: 'HashtagTrend';
  hashtag: Scalars['String'];
  tweetCount: Scalars['Int'];
};

export type Mutation = {
  __typename?: 'Mutation';
  createFavorite: Favorite;
  createTweet: Tweet;
  deleteFavorite: Favorite;
};


export type MutationCreateFavoriteArgs = {
  favorite: FavoriteInput;
};


export type MutationCreateTweetArgs = {
  body: Scalars['String'];
  userId: Scalars['String'];
};


export type MutationDeleteFavoriteArgs = {
  favorite: FavoriteInput;
};

export type Query = {
  __typename?: 'Query';
  currentUser: User;
  suggestions: Array<Suggestion>;
  trends: Array<Trend>;
  tweets: Array<Tweet>;
};

export type Suggestion = {
  __typename?: 'Suggestion';
  avatarUrl: Scalars['String'];
  handle: Scalars['String'];
  name: Scalars['String'];
  reason: Scalars['String'];
};

export type TopicTrend = {
  __typename?: 'TopicTrend';
  quote?: Maybe<TopicTrendQuote>;
  topic: Scalars['String'];
  tweetCount: Scalars['Int'];
};

export type TopicTrendQuote = {
  __typename?: 'TopicTrendQuote';
  description: Scalars['String'];
  imageUrl: Scalars['String'];
  title: Scalars['String'];
};

export type Trend = HashtagTrend | TopicTrend;

export type Tweet = {
  __typename?: 'Tweet';
  author?: Maybe<User>;
  body: Scalars['String'];
  createdAt: Scalars['String'];
  id: Scalars['String'];
  stats?: Maybe<TweetStats>;
  updatedAt: Scalars['String'];
};

export type TweetStats = {
  __typename?: 'TweetStats';
  commentCount: Scalars['Int'];
  favoriteCount: Scalars['Int'];
  retweetCount: Scalars['Int'];
};

export type User = {
  __typename?: 'User';
  avatarUrl: Scalars['String'];
  coverUrl: Scalars['String'];
  createdAt: Scalars['String'];
  favorites?: Maybe<Array<Favorite>>;
  handle: Scalars['String'];
  id: Scalars['String'];
  name: Scalars['String'];
  stats?: Maybe<UserStats>;
  updatedAt: Scalars['String'];
};

export type UserStats = {
  __typename?: 'UserStats';
  followerCount: Scalars['Int'];
  followingCount: Scalars['Int'];
  tweetCount: Scalars['Int'];
};

export type MyQeQueryVariables = Exact<{ [key: string]: never; }>;


export type MyQeQuery = { __typename?: 'Query', currentUser: { __typename?: 'User', name: string } };


export const MyQeDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"MyQe"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"currentUser"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"name"}}]}}]}}]} as unknown as DocumentNode<MyQeQuery, MyQeQueryVariables>;