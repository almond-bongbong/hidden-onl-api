import { GraphQLResolveInfo } from 'graphql';
export type Maybe<T> = T | null;
export type Exact<T extends { [key: string]: any }> = { [K in keyof T]: T[K] };
export type RequireFields<T, K extends keyof T> = { [X in Exclude<keyof T, K>]?: T[X] } & { [P in K]-?: NonNullable<T[P]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
};

export type Account = {
  __typename?: 'Account';
  id: Scalars['ID'];
  role: Role;
  email?: Maybe<Scalars['String']>;
  name: Scalars['String'];
  platform: LoginPlatform;
  platformId: Scalars['String'];
  createdAt: Scalars['String'];
  updatedAt?: Maybe<Scalars['String']>;
  deletedAt?: Maybe<Scalars['String']>;
};

export type File = {
  __typename?: 'File';
  url: Scalars['String'];
  originalName: Scalars['String'];
  size?: Maybe<Scalars['Int']>;
};

export type FileInput = {
  url: Scalars['String'];
  originalName: Scalars['String'];
  size?: Maybe<Scalars['Int']>;
};

export type Influencer = {
  __typename?: 'Influencer';
  id: Scalars['ID'];
  platform: Platform;
  name?: Maybe<Scalars['String']>;
  homepage?: Maybe<Scalars['String']>;
  thumbnail?: Maybe<File>;
  createdAt: Scalars['String'];
  updatedAt?: Maybe<Scalars['String']>;
  deletedAt?: Maybe<Scalars['String']>;
};

export enum LoginPlatform {
  Kakao = 'KAKAO'
}

export type LoginReponse = {
  __typename?: 'LoginReponse';
  ok: Scalars['Boolean'];
  message: Scalars['String'];
  code?: Maybe<Scalars['String']>;
  token?: Maybe<Scalars['String']>;
};

export type Mutation = {
  __typename?: 'Mutation';
  login?: Maybe<LoginReponse>;
  registerInfluencer: MutationResponse;
  updateInfluencer: MutationResponse;
};


export type MutationLoginArgs = {
  accessToken: Scalars['String'];
  platform: LoginPlatform;
};


export type MutationRegisterInfluencerArgs = {
  platform: Platform;
  name: Scalars['String'];
  homepage: Scalars['String'];
  thumbnail?: Maybe<FileInput>;
};


export type MutationUpdateInfluencerArgs = {
  id: Scalars['String'];
  name?: Maybe<Scalars['String']>;
  homepage?: Maybe<Scalars['String']>;
  thumbnail?: Maybe<FileInput>;
};

export type MutationResponse = {
  __typename?: 'MutationResponse';
  ok: Scalars['Boolean'];
  message: Scalars['String'];
  code?: Maybe<Scalars['String']>;
};

export enum Platform {
  Youtube = 'YOUTUBE',
  Instagram = 'INSTAGRAM'
}

export type Query = {
  __typename?: 'Query';
  getInfluencers: Array<Influencer>;
};

export enum Role {
  User = 'USER',
  Manager = 'MANAGER'
}



export type ResolverTypeWrapper<T> = Promise<T> | T;


export type LegacyStitchingResolver<TResult, TParent, TContext, TArgs> = {
  fragment: string;
  resolve: ResolverFn<TResult, TParent, TContext, TArgs>;
};

export type NewStitchingResolver<TResult, TParent, TContext, TArgs> = {
  selectionSet: string;
  resolve: ResolverFn<TResult, TParent, TContext, TArgs>;
};
export type StitchingResolver<TResult, TParent, TContext, TArgs> = LegacyStitchingResolver<TResult, TParent, TContext, TArgs> | NewStitchingResolver<TResult, TParent, TContext, TArgs>;
export type Resolver<TResult, TParent = {}, TContext = {}, TArgs = {}> =
  | ResolverFn<TResult, TParent, TContext, TArgs>
  | StitchingResolver<TResult, TParent, TContext, TArgs>;

export type ResolverFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => Promise<TResult> | TResult;

export type SubscriptionSubscribeFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => AsyncIterator<TResult> | Promise<AsyncIterator<TResult>>;

export type SubscriptionResolveFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => TResult | Promise<TResult>;

export interface SubscriptionSubscriberObject<TResult, TKey extends string, TParent, TContext, TArgs> {
  subscribe: SubscriptionSubscribeFn<{ [key in TKey]: TResult }, TParent, TContext, TArgs>;
  resolve?: SubscriptionResolveFn<TResult, { [key in TKey]: TResult }, TContext, TArgs>;
}

export interface SubscriptionResolverObject<TResult, TParent, TContext, TArgs> {
  subscribe: SubscriptionSubscribeFn<any, TParent, TContext, TArgs>;
  resolve: SubscriptionResolveFn<TResult, any, TContext, TArgs>;
}

export type SubscriptionObject<TResult, TKey extends string, TParent, TContext, TArgs> =
  | SubscriptionSubscriberObject<TResult, TKey, TParent, TContext, TArgs>
  | SubscriptionResolverObject<TResult, TParent, TContext, TArgs>;

export type SubscriptionResolver<TResult, TKey extends string, TParent = {}, TContext = {}, TArgs = {}> =
  | ((...args: any[]) => SubscriptionObject<TResult, TKey, TParent, TContext, TArgs>)
  | SubscriptionObject<TResult, TKey, TParent, TContext, TArgs>;

export type TypeResolveFn<TTypes, TParent = {}, TContext = {}> = (
  parent: TParent,
  context: TContext,
  info: GraphQLResolveInfo
) => Maybe<TTypes> | Promise<Maybe<TTypes>>;

export type IsTypeOfResolverFn<T = {}> = (obj: T, info: GraphQLResolveInfo) => boolean | Promise<boolean>;

export type NextResolverFn<T> = () => Promise<T>;

export type DirectiveResolverFn<TResult = {}, TParent = {}, TContext = {}, TArgs = {}> = (
  next: NextResolverFn<TResult>,
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => TResult | Promise<TResult>;

/** Mapping between all available schema types and the resolvers types */
export type ResolversTypes = {
  Query: ResolverTypeWrapper<{}>;
  Influencer: ResolverTypeWrapper<Influencer>;
  ID: ResolverTypeWrapper<Scalars['ID']>;
  Platform: Platform;
  String: ResolverTypeWrapper<Scalars['String']>;
  File: ResolverTypeWrapper<File>;
  Int: ResolverTypeWrapper<Scalars['Int']>;
  Mutation: ResolverTypeWrapper<{}>;
  LoginPlatform: LoginPlatform;
  LoginReponse: ResolverTypeWrapper<LoginReponse>;
  Boolean: ResolverTypeWrapper<Scalars['Boolean']>;
  FileInput: FileInput;
  MutationResponse: ResolverTypeWrapper<MutationResponse>;
  Role: Role;
  Account: ResolverTypeWrapper<Account>;
};

/** Mapping between all available schema types and the resolvers parents */
export type ResolversParentTypes = {
  Query: {};
  Influencer: Influencer;
  ID: Scalars['ID'];
  String: Scalars['String'];
  File: File;
  Int: Scalars['Int'];
  Mutation: {};
  LoginReponse: LoginReponse;
  Boolean: Scalars['Boolean'];
  FileInput: FileInput;
  MutationResponse: MutationResponse;
  Account: Account;
};

export type AccountResolvers<ContextType = any, ParentType extends ResolversParentTypes['Account'] = ResolversParentTypes['Account']> = {
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  role?: Resolver<ResolversTypes['Role'], ParentType, ContextType>;
  email?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  name?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  platform?: Resolver<ResolversTypes['LoginPlatform'], ParentType, ContextType>;
  platformId?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  createdAt?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  updatedAt?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  deletedAt?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType>;
};

export type FileResolvers<ContextType = any, ParentType extends ResolversParentTypes['File'] = ResolversParentTypes['File']> = {
  url?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  originalName?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  size?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType>;
};

export type InfluencerResolvers<ContextType = any, ParentType extends ResolversParentTypes['Influencer'] = ResolversParentTypes['Influencer']> = {
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  platform?: Resolver<ResolversTypes['Platform'], ParentType, ContextType>;
  name?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  homepage?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  thumbnail?: Resolver<Maybe<ResolversTypes['File']>, ParentType, ContextType>;
  createdAt?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  updatedAt?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  deletedAt?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType>;
};

export type LoginReponseResolvers<ContextType = any, ParentType extends ResolversParentTypes['LoginReponse'] = ResolversParentTypes['LoginReponse']> = {
  ok?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  message?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  code?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  token?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType>;
};

export type MutationResolvers<ContextType = any, ParentType extends ResolversParentTypes['Mutation'] = ResolversParentTypes['Mutation']> = {
  login?: Resolver<Maybe<ResolversTypes['LoginReponse']>, ParentType, ContextType, RequireFields<MutationLoginArgs, 'accessToken' | 'platform'>>;
  registerInfluencer?: Resolver<ResolversTypes['MutationResponse'], ParentType, ContextType, RequireFields<MutationRegisterInfluencerArgs, 'platform' | 'name' | 'homepage'>>;
  updateInfluencer?: Resolver<ResolversTypes['MutationResponse'], ParentType, ContextType, RequireFields<MutationUpdateInfluencerArgs, 'id'>>;
};

export type MutationResponseResolvers<ContextType = any, ParentType extends ResolversParentTypes['MutationResponse'] = ResolversParentTypes['MutationResponse']> = {
  ok?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  message?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  code?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType>;
};

export type QueryResolvers<ContextType = any, ParentType extends ResolversParentTypes['Query'] = ResolversParentTypes['Query']> = {
  getInfluencers?: Resolver<Array<ResolversTypes['Influencer']>, ParentType, ContextType>;
};

export type Resolvers<ContextType = any> = {
  Account?: AccountResolvers<ContextType>;
  File?: FileResolvers<ContextType>;
  Influencer?: InfluencerResolvers<ContextType>;
  LoginReponse?: LoginReponseResolvers<ContextType>;
  Mutation?: MutationResolvers<ContextType>;
  MutationResponse?: MutationResponseResolvers<ContextType>;
  Query?: QueryResolvers<ContextType>;
};


/**
 * @deprecated
 * Use "Resolvers" root object instead. If you wish to get "IResolvers", add "typesPrefix: I" to your config.
 */
export type IResolvers<ContextType = any> = Resolvers<ContextType>;
