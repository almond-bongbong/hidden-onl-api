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
  thumbnail?: Maybe<File>;
  createdAt: Scalars['String'];
  updatedAt?: Maybe<Scalars['String']>;
  deletedAt?: Maybe<Scalars['String']>;
};

export type CurrentAccount = {
  __typename?: 'CurrentAccount';
  id: Scalars['ID'];
  name: Scalars['String'];
  role: Role;
  iat: Scalars['Int'];
  exp: Scalars['Int'];
  iss: Scalars['String'];
};

export enum ErrorName {
  Unauthenticated = 'UNAUTHENTICATED'
}

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
  name: Scalars['String'];
  homepage?: Maybe<Scalars['String']>;
  thumbnail?: Maybe<File>;
  createdAt: Scalars['String'];
  updatedAt?: Maybe<Scalars['String']>;
};

export type LatLngInput = {
  latitude: Scalars['Float'];
  longitude: Scalars['Float'];
};

export type LocationInput = {
  latitude: Scalars['Float'];
  longitude: Scalars['Float'];
  zipcode?: Maybe<Scalars['Int']>;
  address?: Maybe<Scalars['String']>;
  addressDetail?: Maybe<Scalars['String']>;
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
  registerPlace: MutationResponse;
  updateInfluencer: MutationResponse;
  updateMe?: Maybe<MutationResponse>;
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


export type MutationRegisterPlaceArgs = {
  name: Scalars['String'];
  location: LocationInput;
  influencerId: Scalars['String'];
  link: Scalars['String'];
};


export type MutationUpdateInfluencerArgs = {
  id: Scalars['String'];
  name?: Maybe<Scalars['String']>;
  homepage?: Maybe<Scalars['String']>;
  thumbnail?: Maybe<FileInput>;
};


export type MutationUpdateMeArgs = {
  thumbnail?: Maybe<FileInput>;
  name?: Maybe<Scalars['String']>;
};

export type MutationResponse = {
  __typename?: 'MutationResponse';
  ok: Scalars['Boolean'];
  message: Scalars['String'];
  code?: Maybe<Scalars['String']>;
};

export type Place = {
  __typename?: 'Place';
  id: Scalars['ID'];
  name: Scalars['String'];
  latitude: Scalars['Float'];
  longitude: Scalars['Float'];
  zipcode?: Maybe<Scalars['Int']>;
  address?: Maybe<Scalars['String']>;
  addressDetail?: Maybe<Scalars['String']>;
  influencer: Influencer;
  createdAt: Scalars['String'];
  updatedAt?: Maybe<Scalars['String']>;
};

export enum Platform {
  Youtube = 'YOUTUBE',
  Instagram = 'INSTAGRAM',
  Tv = 'TV'
}

export type Query = {
  __typename?: 'Query';
  auth?: Maybe<CurrentAccount>;
  getInfluencers: Array<Influencer>;
  getPlaces: Array<Maybe<Place>>;
  me?: Maybe<Account>;
};


export type QueryGetPlacesArgs = {
  leftBottom: LatLngInput;
  rightTop: LatLngInput;
};

export enum Role {
  User = 'USER',
  Manager = 'MANAGER',
  Admin = 'ADMIN'
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
  CurrentAccount: ResolverTypeWrapper<CurrentAccount>;
  ID: ResolverTypeWrapper<Scalars['ID']>;
  String: ResolverTypeWrapper<Scalars['String']>;
  Role: Role;
  Int: ResolverTypeWrapper<Scalars['Int']>;
  Influencer: ResolverTypeWrapper<Influencer>;
  Platform: Platform;
  File: ResolverTypeWrapper<File>;
  LatLngInput: LatLngInput;
  Float: ResolverTypeWrapper<Scalars['Float']>;
  Place: ResolverTypeWrapper<Place>;
  Account: ResolverTypeWrapper<Account>;
  LoginPlatform: LoginPlatform;
  Mutation: ResolverTypeWrapper<{}>;
  LoginReponse: ResolverTypeWrapper<LoginReponse>;
  Boolean: ResolverTypeWrapper<Scalars['Boolean']>;
  FileInput: FileInput;
  MutationResponse: ResolverTypeWrapper<MutationResponse>;
  LocationInput: LocationInput;
  ErrorName: ErrorName;
};

/** Mapping between all available schema types and the resolvers parents */
export type ResolversParentTypes = {
  Query: {};
  CurrentAccount: CurrentAccount;
  ID: Scalars['ID'];
  String: Scalars['String'];
  Int: Scalars['Int'];
  Influencer: Influencer;
  File: File;
  LatLngInput: LatLngInput;
  Float: Scalars['Float'];
  Place: Place;
  Account: Account;
  Mutation: {};
  LoginReponse: LoginReponse;
  Boolean: Scalars['Boolean'];
  FileInput: FileInput;
  MutationResponse: MutationResponse;
  LocationInput: LocationInput;
};

export type AccountResolvers<ContextType = any, ParentType extends ResolversParentTypes['Account'] = ResolversParentTypes['Account']> = {
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  role?: Resolver<ResolversTypes['Role'], ParentType, ContextType>;
  email?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  name?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  platform?: Resolver<ResolversTypes['LoginPlatform'], ParentType, ContextType>;
  thumbnail?: Resolver<Maybe<ResolversTypes['File']>, ParentType, ContextType>;
  createdAt?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  updatedAt?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  deletedAt?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType>;
};

export type CurrentAccountResolvers<ContextType = any, ParentType extends ResolversParentTypes['CurrentAccount'] = ResolversParentTypes['CurrentAccount']> = {
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  name?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  role?: Resolver<ResolversTypes['Role'], ParentType, ContextType>;
  iat?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  exp?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  iss?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
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
  name?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  homepage?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  thumbnail?: Resolver<Maybe<ResolversTypes['File']>, ParentType, ContextType>;
  createdAt?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  updatedAt?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
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
  registerPlace?: Resolver<ResolversTypes['MutationResponse'], ParentType, ContextType, RequireFields<MutationRegisterPlaceArgs, 'name' | 'location' | 'influencerId' | 'link'>>;
  updateInfluencer?: Resolver<ResolversTypes['MutationResponse'], ParentType, ContextType, RequireFields<MutationUpdateInfluencerArgs, 'id'>>;
  updateMe?: Resolver<Maybe<ResolversTypes['MutationResponse']>, ParentType, ContextType, RequireFields<MutationUpdateMeArgs, never>>;
};

export type MutationResponseResolvers<ContextType = any, ParentType extends ResolversParentTypes['MutationResponse'] = ResolversParentTypes['MutationResponse']> = {
  ok?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  message?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  code?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType>;
};

export type PlaceResolvers<ContextType = any, ParentType extends ResolversParentTypes['Place'] = ResolversParentTypes['Place']> = {
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  name?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  latitude?: Resolver<ResolversTypes['Float'], ParentType, ContextType>;
  longitude?: Resolver<ResolversTypes['Float'], ParentType, ContextType>;
  zipcode?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  address?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  addressDetail?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  influencer?: Resolver<ResolversTypes['Influencer'], ParentType, ContextType>;
  createdAt?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  updatedAt?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType>;
};

export type QueryResolvers<ContextType = any, ParentType extends ResolversParentTypes['Query'] = ResolversParentTypes['Query']> = {
  auth?: Resolver<Maybe<ResolversTypes['CurrentAccount']>, ParentType, ContextType>;
  getInfluencers?: Resolver<Array<ResolversTypes['Influencer']>, ParentType, ContextType>;
  getPlaces?: Resolver<Array<Maybe<ResolversTypes['Place']>>, ParentType, ContextType, RequireFields<QueryGetPlacesArgs, 'leftBottom' | 'rightTop'>>;
  me?: Resolver<Maybe<ResolversTypes['Account']>, ParentType, ContextType>;
};

export type Resolvers<ContextType = any> = {
  Account?: AccountResolvers<ContextType>;
  CurrentAccount?: CurrentAccountResolvers<ContextType>;
  File?: FileResolvers<ContextType>;
  Influencer?: InfluencerResolvers<ContextType>;
  LoginReponse?: LoginReponseResolvers<ContextType>;
  Mutation?: MutationResolvers<ContextType>;
  MutationResponse?: MutationResponseResolvers<ContextType>;
  Place?: PlaceResolvers<ContextType>;
  Query?: QueryResolvers<ContextType>;
};


/**
 * @deprecated
 * Use "Resolvers" root object instead. If you wish to get "IResolvers", add "typesPrefix: I" to your config.
 */
export type IResolvers<ContextType = any> = Resolvers<ContextType>;
