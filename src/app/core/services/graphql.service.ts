/* tslint:disable */
/* eslint-disable */
//  This file was automatically generated and should not be edited.
import { Injectable } from "@angular/core";
import API, { graphqlOperation, GraphQLResult } from "@aws-amplify/api-graphql";
import { Observable } from "zen-observable-ts";

export interface SubscriptionResponse<T> {
  value: GraphQLResult<T>;
}

export type CreatePlaceCategoryInput = {
  id?: string | null;
  name: string;
};

export type ModelPlaceCategoryConditionInput = {
  name?: ModelStringInput | null;
  and?: Array<ModelPlaceCategoryConditionInput | null> | null;
  or?: Array<ModelPlaceCategoryConditionInput | null> | null;
  not?: ModelPlaceCategoryConditionInput | null;
};

export type ModelStringInput = {
  ne?: string | null;
  eq?: string | null;
  le?: string | null;
  lt?: string | null;
  ge?: string | null;
  gt?: string | null;
  contains?: string | null;
  notContains?: string | null;
  between?: Array<string | null> | null;
  beginsWith?: string | null;
  attributeExists?: boolean | null;
  attributeType?: ModelAttributeTypes | null;
  size?: ModelSizeInput | null;
};

export enum ModelAttributeTypes {
  binary = "binary",
  binarySet = "binarySet",
  bool = "bool",
  list = "list",
  map = "map",
  number = "number",
  numberSet = "numberSet",
  string = "string",
  stringSet = "stringSet",
  _null = "_null"
}

export type ModelSizeInput = {
  ne?: number | null;
  eq?: number | null;
  le?: number | null;
  lt?: number | null;
  ge?: number | null;
  gt?: number | null;
  between?: Array<number | null> | null;
};

export type PlaceCategory = {
  __typename: "PlaceCategory";
  id?: string;
  name?: string;
  createdAt?: string;
  updatedAt?: string;
  places?: ModelPlaceConnection;
};

export type ModelPlaceConnection = {
  __typename: "ModelPlaceConnection";
  items?: Array<Place | null> | null;
  nextToken?: string | null;
};

export type Place = {
  __typename: "Place";
  id?: string;
  categoryID?: string;
  location?: Location;
  description?: string | null;
  guardians?: Array<string | null> | null;
  createdAt?: string;
  updatedAt?: string;
  category?: PlaceCategory;
  pictures?: ModelPictureConnection;
  owner?: string | null;
};

export type Location = {
  __typename: "Location";
  latitude?: number;
  longitude?: number;
};

export type ModelPictureConnection = {
  __typename: "ModelPictureConnection";
  items?: Array<Picture | null> | null;
  nextToken?: string | null;
};

export type Picture = {
  __typename: "Picture";
  id?: string;
  placeID?: string | null;
  owner?: string | null;
  file?: S3Object;
  createdAt?: string;
  updatedAt?: string;
  guardians?: string | null;
};

export type S3Object = {
  __typename: "S3Object";
  bucket?: string;
  region?: string;
  key?: string;
};

export type UpdatePlaceCategoryInput = {
  id: string;
  name?: string | null;
};

export type DeletePlaceCategoryInput = {
  id?: string | null;
};

export type CreatePictureInput = {
  id?: string | null;
  placeID?: string | null;
  owner?: string | null;
  file?: S3ObjectInput | null;
};

export type S3ObjectInput = {
  bucket: string;
  region: string;
  key: string;
};

export type ModelPictureConditionInput = {
  placeID?: ModelIDInput | null;
  and?: Array<ModelPictureConditionInput | null> | null;
  or?: Array<ModelPictureConditionInput | null> | null;
  not?: ModelPictureConditionInput | null;
};

export type ModelIDInput = {
  ne?: string | null;
  eq?: string | null;
  le?: string | null;
  lt?: string | null;
  ge?: string | null;
  gt?: string | null;
  contains?: string | null;
  notContains?: string | null;
  between?: Array<string | null> | null;
  beginsWith?: string | null;
  attributeExists?: boolean | null;
  attributeType?: ModelAttributeTypes | null;
  size?: ModelSizeInput | null;
};

export type UpdatePictureInput = {
  id: string;
  placeID?: string | null;
  owner?: string | null;
  file?: S3ObjectInput | null;
};

export type DeletePictureInput = {
  id?: string | null;
};

export type CreatePlaceInput = {
  id?: string | null;
  categoryID: string;
  location: LocationInput;
  description?: string | null;
  guardians?: Array<string | null> | null;
};

export type LocationInput = {
  latitude: number;
  longitude: number;
};

export type ModelPlaceConditionInput = {
  categoryID?: ModelIDInput | null;
  description?: ModelStringInput | null;
  and?: Array<ModelPlaceConditionInput | null> | null;
  or?: Array<ModelPlaceConditionInput | null> | null;
  not?: ModelPlaceConditionInput | null;
};

export type UpdatePlaceInput = {
  id: string;
  categoryID?: string | null;
  location?: LocationInput | null;
  description?: string | null;
  guardians?: Array<string | null> | null;
};

export type DeletePlaceInput = {
  id?: string | null;
};

export type ModelPlaceCategoryFilterInput = {
  id?: ModelIDInput | null;
  name?: ModelStringInput | null;
  and?: Array<ModelPlaceCategoryFilterInput | null> | null;
  or?: Array<ModelPlaceCategoryFilterInput | null> | null;
  not?: ModelPlaceCategoryFilterInput | null;
};

export type ModelPlaceCategoryConnection = {
  __typename: "ModelPlaceCategoryConnection";
  items?: Array<PlaceCategory | null> | null;
  nextToken?: string | null;
};

export type ModelPictureFilterInput = {
  id?: ModelIDInput | null;
  placeID?: ModelIDInput | null;
  owner?: ModelStringInput | null;
  and?: Array<ModelPictureFilterInput | null> | null;
  or?: Array<ModelPictureFilterInput | null> | null;
  not?: ModelPictureFilterInput | null;
};

export type ModelPlaceFilterInput = {
  id?: ModelIDInput | null;
  categoryID?: ModelIDInput | null;
  description?: ModelStringInput | null;
  guardians?: ModelStringInput | null;
  and?: Array<ModelPlaceFilterInput | null> | null;
  or?: Array<ModelPlaceFilterInput | null> | null;
  not?: ModelPlaceFilterInput | null;
};

export type CreatePlaceCategoryMutation = {
  __typename: "PlaceCategory";
  id: string;
  name: string;
  createdAt: string;
  updatedAt: string;
  places?: {
    __typename: "ModelPlaceConnection";
    nextToken?: string | null;
  } | null;
};

export type UpdatePlaceCategoryMutation = {
  __typename: "PlaceCategory";
  id: string;
  name: string;
  createdAt: string;
  updatedAt: string;
  places?: {
    __typename: "ModelPlaceConnection";
    nextToken?: string | null;
  } | null;
};

export type DeletePlaceCategoryMutation = {
  __typename: "PlaceCategory";
  id: string;
  name: string;
  createdAt: string;
  updatedAt: string;
  places?: {
    __typename: "ModelPlaceConnection";
    nextToken?: string | null;
  } | null;
};

export type CreatePictureMutation = {
  __typename: "Picture";
  id: string;
  placeID?: string | null;
  owner?: string | null;
  file?: {
    __typename: "S3Object";
    bucket: string;
    region: string;
    key: string;
  } | null;
  createdAt: string;
  updatedAt: string;
  guardians?: string | null;
};

export type UpdatePictureMutation = {
  __typename: "Picture";
  id: string;
  placeID?: string | null;
  owner?: string | null;
  file?: {
    __typename: "S3Object";
    bucket: string;
    region: string;
    key: string;
  } | null;
  createdAt: string;
  updatedAt: string;
  guardians?: string | null;
};

export type DeletePictureMutation = {
  __typename: "Picture";
  id: string;
  placeID?: string | null;
  owner?: string | null;
  file?: {
    __typename: "S3Object";
    bucket: string;
    region: string;
    key: string;
  } | null;
  createdAt: string;
  updatedAt: string;
  guardians?: string | null;
};

export type CreatePlaceMutation = {
  __typename: "Place";
  id: string;
  categoryID: string;
  location: {
    __typename: "Location";
    latitude: number;
    longitude: number;
  };
  description?: string | null;
  guardians?: Array<string | null> | null;
  createdAt: string;
  updatedAt: string;
  category?: {
    __typename: "PlaceCategory";
    id: string;
    name: string;
    createdAt: string;
    updatedAt: string;
  } | null;
  pictures?: {
    __typename: "ModelPictureConnection";
    nextToken?: string | null;
  } | null;
  owner?: string | null;
};

export type UpdatePlaceMutation = {
  __typename: "Place";
  id: string;
  categoryID: string;
  location: {
    __typename: "Location";
    latitude: number;
    longitude: number;
  };
  description?: string | null;
  guardians?: Array<string | null> | null;
  createdAt: string;
  updatedAt: string;
  category?: {
    __typename: "PlaceCategory";
    id: string;
    name: string;
    createdAt: string;
    updatedAt: string;
  } | null;
  pictures?: {
    __typename: "ModelPictureConnection";
    nextToken?: string | null;
  } | null;
  owner?: string | null;
};

export type DeletePlaceMutation = {
  __typename: "Place";
  id: string;
  categoryID: string;
  location: {
    __typename: "Location";
    latitude: number;
    longitude: number;
  };
  description?: string | null;
  guardians?: Array<string | null> | null;
  createdAt: string;
  updatedAt: string;
  category?: {
    __typename: "PlaceCategory";
    id: string;
    name: string;
    createdAt: string;
    updatedAt: string;
  } | null;
  pictures?: {
    __typename: "ModelPictureConnection";
    nextToken?: string | null;
  } | null;
  owner?: string | null;
};

export type ListPlaceCategorysQuery = {
  __typename: "ModelPlaceCategoryConnection";
  items?: Array<{
    __typename: "PlaceCategory";
    id: string;
    name: string;
    createdAt: string;
    updatedAt: string;
  } | null> | null;
  nextToken?: string | null;
};

export type GetPlaceCategoryQuery = {
  __typename: "PlaceCategory";
  id: string;
  name: string;
  createdAt: string;
  updatedAt: string;
  places?: {
    __typename: "ModelPlaceConnection";
    nextToken?: string | null;
  } | null;
};

export type GetPictureQuery = {
  __typename: "Picture";
  id: string;
  placeID?: string | null;
  owner?: string | null;
  file?: {
    __typename: "S3Object";
    bucket: string;
    region: string;
    key: string;
  } | null;
  createdAt: string;
  updatedAt: string;
  guardians?: string | null;
};

export type ListPicturesQuery = {
  __typename: "ModelPictureConnection";
  items?: Array<{
    __typename: "Picture";
    id: string;
    placeID?: string | null;
    owner?: string | null;
    createdAt: string;
    updatedAt: string;
    guardians?: string | null;
  } | null> | null;
  nextToken?: string | null;
};

export type GetPlaceQuery = {
  __typename: "Place";
  id: string;
  categoryID: string;
  location: {
    __typename: "Location";
    latitude: number;
    longitude: number;
  };
  description?: string | null;
  guardians?: Array<string | null> | null;
  createdAt: string;
  updatedAt: string;
  category?: {
    __typename: "PlaceCategory";
    id: string;
    name: string;
    createdAt: string;
    updatedAt: string;
  } | null;
  pictures?: {
    __typename: "ModelPictureConnection";
    nextToken?: string | null;
  } | null;
  owner?: string | null;
};

export type ListPlacesQuery = {
  __typename: "ModelPlaceConnection";
  items?: Array<{
    __typename: "Place";
    id: string;
    categoryID: string;
    description?: string | null;
    guardians?: Array<string | null> | null;
    createdAt: string;
    updatedAt: string;
    owner?: string | null;
  } | null> | null;
  nextToken?: string | null;
};

export type OnCreatePlaceCategorySubscription = {
  __typename: "PlaceCategory";
  id: string;
  name: string;
  createdAt: string;
  updatedAt: string;
  places?: {
    __typename: "ModelPlaceConnection";
    nextToken?: string | null;
  } | null;
};

export type OnUpdatePlaceCategorySubscription = {
  __typename: "PlaceCategory";
  id: string;
  name: string;
  createdAt: string;
  updatedAt: string;
  places?: {
    __typename: "ModelPlaceConnection";
    nextToken?: string | null;
  } | null;
};

export type OnDeletePlaceCategorySubscription = {
  __typename: "PlaceCategory";
  id: string;
  name: string;
  createdAt: string;
  updatedAt: string;
  places?: {
    __typename: "ModelPlaceConnection";
    nextToken?: string | null;
  } | null;
};

export type OnCreatePictureSubscription = {
  __typename: "Picture";
  id: string;
  placeID?: string | null;
  owner?: string | null;
  file?: {
    __typename: "S3Object";
    bucket: string;
    region: string;
    key: string;
  } | null;
  createdAt: string;
  updatedAt: string;
  guardians?: string | null;
};

export type OnUpdatePictureSubscription = {
  __typename: "Picture";
  id: string;
  placeID?: string | null;
  owner?: string | null;
  file?: {
    __typename: "S3Object";
    bucket: string;
    region: string;
    key: string;
  } | null;
  createdAt: string;
  updatedAt: string;
  guardians?: string | null;
};

export type OnDeletePictureSubscription = {
  __typename: "Picture";
  id: string;
  placeID?: string | null;
  owner?: string | null;
  file?: {
    __typename: "S3Object";
    bucket: string;
    region: string;
    key: string;
  } | null;
  createdAt: string;
  updatedAt: string;
  guardians?: string | null;
};

export type OnCreatePlaceSubscription = {
  __typename: "Place";
  id: string;
  categoryID: string;
  location: {
    __typename: "Location";
    latitude: number;
    longitude: number;
  };
  description?: string | null;
  guardians?: Array<string | null> | null;
  createdAt: string;
  updatedAt: string;
  category?: {
    __typename: "PlaceCategory";
    id: string;
    name: string;
    createdAt: string;
    updatedAt: string;
  } | null;
  pictures?: {
    __typename: "ModelPictureConnection";
    nextToken?: string | null;
  } | null;
  owner?: string | null;
};

export type OnUpdatePlaceSubscription = {
  __typename: "Place";
  id: string;
  categoryID: string;
  location: {
    __typename: "Location";
    latitude: number;
    longitude: number;
  };
  description?: string | null;
  guardians?: Array<string | null> | null;
  createdAt: string;
  updatedAt: string;
  category?: {
    __typename: "PlaceCategory";
    id: string;
    name: string;
    createdAt: string;
    updatedAt: string;
  } | null;
  pictures?: {
    __typename: "ModelPictureConnection";
    nextToken?: string | null;
  } | null;
  owner?: string | null;
};

export type OnDeletePlaceSubscription = {
  __typename: "Place";
  id: string;
  categoryID: string;
  location: {
    __typename: "Location";
    latitude: number;
    longitude: number;
  };
  description?: string | null;
  guardians?: Array<string | null> | null;
  createdAt: string;
  updatedAt: string;
  category?: {
    __typename: "PlaceCategory";
    id: string;
    name: string;
    createdAt: string;
    updatedAt: string;
  } | null;
  pictures?: {
    __typename: "ModelPictureConnection";
    nextToken?: string | null;
  } | null;
  owner?: string | null;
};

@Injectable({
  providedIn: "root"
})
export class APIService {
  async CreatePlaceCategory(
    input: CreatePlaceCategoryInput,
    condition?: ModelPlaceCategoryConditionInput
  ): Promise<CreatePlaceCategoryMutation> {
    const statement = `mutation CreatePlaceCategory($input: CreatePlaceCategoryInput!, $condition: ModelPlaceCategoryConditionInput) {
        createPlaceCategory(input: $input, condition: $condition) {
          __typename
          id
          name
          createdAt
          updatedAt
          places {
            __typename
            nextToken
          }
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    if (condition) {
      gqlAPIServiceArguments.condition = condition;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <CreatePlaceCategoryMutation>response.data.createPlaceCategory;
  }
  async UpdatePlaceCategory(
    input: UpdatePlaceCategoryInput,
    condition?: ModelPlaceCategoryConditionInput
  ): Promise<UpdatePlaceCategoryMutation> {
    const statement = `mutation UpdatePlaceCategory($input: UpdatePlaceCategoryInput!, $condition: ModelPlaceCategoryConditionInput) {
        updatePlaceCategory(input: $input, condition: $condition) {
          __typename
          id
          name
          createdAt
          updatedAt
          places {
            __typename
            nextToken
          }
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    if (condition) {
      gqlAPIServiceArguments.condition = condition;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <UpdatePlaceCategoryMutation>response.data.updatePlaceCategory;
  }
  async DeletePlaceCategory(
    input: DeletePlaceCategoryInput,
    condition?: ModelPlaceCategoryConditionInput
  ): Promise<DeletePlaceCategoryMutation> {
    const statement = `mutation DeletePlaceCategory($input: DeletePlaceCategoryInput!, $condition: ModelPlaceCategoryConditionInput) {
        deletePlaceCategory(input: $input, condition: $condition) {
          __typename
          id
          name
          createdAt
          updatedAt
          places {
            __typename
            nextToken
          }
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    if (condition) {
      gqlAPIServiceArguments.condition = condition;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <DeletePlaceCategoryMutation>response.data.deletePlaceCategory;
  }
  async CreatePicture(
    input: CreatePictureInput,
    condition?: ModelPictureConditionInput
  ): Promise<CreatePictureMutation> {
    const statement = `mutation CreatePicture($input: CreatePictureInput!, $condition: ModelPictureConditionInput) {
        createPicture(input: $input, condition: $condition) {
          __typename
          id
          placeID
          owner
          file {
            __typename
            bucket
            region
            key
          }
          createdAt
          updatedAt
          guardians
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    if (condition) {
      gqlAPIServiceArguments.condition = condition;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <CreatePictureMutation>response.data.createPicture;
  }
  async UpdatePicture(
    input: UpdatePictureInput,
    condition?: ModelPictureConditionInput
  ): Promise<UpdatePictureMutation> {
    const statement = `mutation UpdatePicture($input: UpdatePictureInput!, $condition: ModelPictureConditionInput) {
        updatePicture(input: $input, condition: $condition) {
          __typename
          id
          placeID
          owner
          file {
            __typename
            bucket
            region
            key
          }
          createdAt
          updatedAt
          guardians
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    if (condition) {
      gqlAPIServiceArguments.condition = condition;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <UpdatePictureMutation>response.data.updatePicture;
  }
  async DeletePicture(
    input: DeletePictureInput,
    condition?: ModelPictureConditionInput
  ): Promise<DeletePictureMutation> {
    const statement = `mutation DeletePicture($input: DeletePictureInput!, $condition: ModelPictureConditionInput) {
        deletePicture(input: $input, condition: $condition) {
          __typename
          id
          placeID
          owner
          file {
            __typename
            bucket
            region
            key
          }
          createdAt
          updatedAt
          guardians
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    if (condition) {
      gqlAPIServiceArguments.condition = condition;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <DeletePictureMutation>response.data.deletePicture;
  }
  async CreatePlace(
    input: CreatePlaceInput,
    condition?: ModelPlaceConditionInput
  ): Promise<CreatePlaceMutation> {
    const statement = `mutation CreatePlace($input: CreatePlaceInput!, $condition: ModelPlaceConditionInput) {
        createPlace(input: $input, condition: $condition) {
          __typename
          id
          categoryID
          location {
            __typename
            latitude
            longitude
          }
          description
          guardians
          createdAt
          updatedAt
          category {
            __typename
            id
            name
            createdAt
            updatedAt
          }
          pictures {
            __typename
            nextToken
          }
          owner
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    if (condition) {
      gqlAPIServiceArguments.condition = condition;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <CreatePlaceMutation>response.data.createPlace;
  }
  async UpdatePlace(
    input: UpdatePlaceInput,
    condition?: ModelPlaceConditionInput
  ): Promise<UpdatePlaceMutation> {
    const statement = `mutation UpdatePlace($input: UpdatePlaceInput!, $condition: ModelPlaceConditionInput) {
        updatePlace(input: $input, condition: $condition) {
          __typename
          id
          categoryID
          location {
            __typename
            latitude
            longitude
          }
          description
          guardians
          createdAt
          updatedAt
          category {
            __typename
            id
            name
            createdAt
            updatedAt
          }
          pictures {
            __typename
            nextToken
          }
          owner
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    if (condition) {
      gqlAPIServiceArguments.condition = condition;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <UpdatePlaceMutation>response.data.updatePlace;
  }
  async DeletePlace(
    input: DeletePlaceInput,
    condition?: ModelPlaceConditionInput
  ): Promise<DeletePlaceMutation> {
    const statement = `mutation DeletePlace($input: DeletePlaceInput!, $condition: ModelPlaceConditionInput) {
        deletePlace(input: $input, condition: $condition) {
          __typename
          id
          categoryID
          location {
            __typename
            latitude
            longitude
          }
          description
          guardians
          createdAt
          updatedAt
          category {
            __typename
            id
            name
            createdAt
            updatedAt
          }
          pictures {
            __typename
            nextToken
          }
          owner
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    if (condition) {
      gqlAPIServiceArguments.condition = condition;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <DeletePlaceMutation>response.data.deletePlace;
  }
  async ListPlaceCategorys(
    filter?: ModelPlaceCategoryFilterInput,
    limit?: number,
    nextToken?: string
  ): Promise<ListPlaceCategorysQuery> {
    const statement = `query ListPlaceCategorys($filter: ModelPlaceCategoryFilterInput, $limit: Int, $nextToken: String) {
        listPlaceCategorys(filter: $filter, limit: $limit, nextToken: $nextToken) {
          __typename
          items {
            __typename
            id
            name
            createdAt
            updatedAt
          }
          nextToken
        }
      }`;
    const gqlAPIServiceArguments: any = {};
    if (filter) {
      gqlAPIServiceArguments.filter = filter;
    }
    if (limit) {
      gqlAPIServiceArguments.limit = limit;
    }
    if (nextToken) {
      gqlAPIServiceArguments.nextToken = nextToken;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <ListPlaceCategorysQuery>response.data.listPlaceCategorys;
  }
  async GetPlaceCategory(id: string): Promise<GetPlaceCategoryQuery> {
    const statement = `query GetPlaceCategory($id: ID!) {
        getPlaceCategory(id: $id) {
          __typename
          id
          name
          createdAt
          updatedAt
          places {
            __typename
            nextToken
          }
        }
      }`;
    const gqlAPIServiceArguments: any = {
      id
    };
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <GetPlaceCategoryQuery>response.data.getPlaceCategory;
  }
  async GetPicture(id: string): Promise<GetPictureQuery> {
    const statement = `query GetPicture($id: ID!) {
        getPicture(id: $id) {
          __typename
          id
          placeID
          owner
          file {
            __typename
            bucket
            region
            key
          }
          createdAt
          updatedAt
          guardians
        }
      }`;
    const gqlAPIServiceArguments: any = {
      id
    };
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <GetPictureQuery>response.data.getPicture;
  }
  async ListPictures(
    filter?: ModelPictureFilterInput,
    limit?: number,
    nextToken?: string
  ): Promise<ListPicturesQuery> {
    const statement = `query ListPictures($filter: ModelPictureFilterInput, $limit: Int, $nextToken: String) {
        listPictures(filter: $filter, limit: $limit, nextToken: $nextToken) {
          __typename
          items {
            __typename
            id
            placeID
            owner
            createdAt
            updatedAt
            guardians
          }
          nextToken
        }
      }`;
    const gqlAPIServiceArguments: any = {};
    if (filter) {
      gqlAPIServiceArguments.filter = filter;
    }
    if (limit) {
      gqlAPIServiceArguments.limit = limit;
    }
    if (nextToken) {
      gqlAPIServiceArguments.nextToken = nextToken;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <ListPicturesQuery>response.data.listPictures;
  }
  async GetPlace(id: string): Promise<GetPlaceQuery> {
    const statement = `query GetPlace($id: ID!) {
        getPlace(id: $id) {
          __typename
          id
          categoryID
          location {
            __typename
            latitude
            longitude
          }
          description
          guardians
          createdAt
          updatedAt
          category {
            __typename
            id
            name
            createdAt
            updatedAt
          }
          pictures {
            __typename
            nextToken
          }
          owner
        }
      }`;
    const gqlAPIServiceArguments: any = {
      id
    };
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <GetPlaceQuery>response.data.getPlace;
  }
  async ListPlaces(
    filter?: ModelPlaceFilterInput,
    limit?: number,
    nextToken?: string
  ): Promise<ListPlacesQuery> {
    const statement = `query ListPlaces($filter: ModelPlaceFilterInput, $limit: Int, $nextToken: String) {
        listPlaces(filter: $filter, limit: $limit, nextToken: $nextToken) {
          __typename
          items {
            __typename
            id
            categoryID
            description
            guardians
            createdAt
            updatedAt
            owner
          }
          nextToken
        }
      }`;
    const gqlAPIServiceArguments: any = {};
    if (filter) {
      gqlAPIServiceArguments.filter = filter;
    }
    if (limit) {
      gqlAPIServiceArguments.limit = limit;
    }
    if (nextToken) {
      gqlAPIServiceArguments.nextToken = nextToken;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <ListPlacesQuery>response.data.listPlaces;
  }
  OnCreatePlaceCategoryListener: Observable<
    SubscriptionResponse<OnCreatePlaceCategorySubscription>
  > = API.graphql(
    graphqlOperation(
      `subscription OnCreatePlaceCategory {
        onCreatePlaceCategory {
          __typename
          id
          name
          createdAt
          updatedAt
          places {
            __typename
            nextToken
          }
        }
      }`
    )
  ) as Observable<SubscriptionResponse<OnCreatePlaceCategorySubscription>>;

  OnUpdatePlaceCategoryListener: Observable<
    SubscriptionResponse<OnUpdatePlaceCategorySubscription>
  > = API.graphql(
    graphqlOperation(
      `subscription OnUpdatePlaceCategory {
        onUpdatePlaceCategory {
          __typename
          id
          name
          createdAt
          updatedAt
          places {
            __typename
            nextToken
          }
        }
      }`
    )
  ) as Observable<SubscriptionResponse<OnUpdatePlaceCategorySubscription>>;

  OnDeletePlaceCategoryListener: Observable<
    SubscriptionResponse<OnDeletePlaceCategorySubscription>
  > = API.graphql(
    graphqlOperation(
      `subscription OnDeletePlaceCategory {
        onDeletePlaceCategory {
          __typename
          id
          name
          createdAt
          updatedAt
          places {
            __typename
            nextToken
          }
        }
      }`
    )
  ) as Observable<SubscriptionResponse<OnDeletePlaceCategorySubscription>>;

  OnCreatePictureListener: Observable<
    SubscriptionResponse<OnCreatePictureSubscription>
  > = API.graphql(
    graphqlOperation(
      `subscription OnCreatePicture {
        onCreatePicture {
          __typename
          id
          placeID
          owner
          file {
            __typename
            bucket
            region
            key
          }
          createdAt
          updatedAt
          guardians
        }
      }`
    )
  ) as Observable<SubscriptionResponse<OnCreatePictureSubscription>>;

  OnUpdatePictureListener: Observable<
    SubscriptionResponse<OnUpdatePictureSubscription>
  > = API.graphql(
    graphqlOperation(
      `subscription OnUpdatePicture {
        onUpdatePicture {
          __typename
          id
          placeID
          owner
          file {
            __typename
            bucket
            region
            key
          }
          createdAt
          updatedAt
          guardians
        }
      }`
    )
  ) as Observable<SubscriptionResponse<OnUpdatePictureSubscription>>;

  OnDeletePictureListener: Observable<
    SubscriptionResponse<OnDeletePictureSubscription>
  > = API.graphql(
    graphqlOperation(
      `subscription OnDeletePicture {
        onDeletePicture {
          __typename
          id
          placeID
          owner
          file {
            __typename
            bucket
            region
            key
          }
          createdAt
          updatedAt
          guardians
        }
      }`
    )
  ) as Observable<SubscriptionResponse<OnDeletePictureSubscription>>;

  OnCreatePlaceListener: Observable<
    SubscriptionResponse<OnCreatePlaceSubscription>
  > = API.graphql(
    graphqlOperation(
      `subscription OnCreatePlace {
        onCreatePlace {
          __typename
          id
          categoryID
          location {
            __typename
            latitude
            longitude
          }
          description
          guardians
          createdAt
          updatedAt
          category {
            __typename
            id
            name
            createdAt
            updatedAt
          }
          pictures {
            __typename
            nextToken
          }
          owner
        }
      }`
    )
  ) as Observable<SubscriptionResponse<OnCreatePlaceSubscription>>;

  OnUpdatePlaceListener: Observable<
    SubscriptionResponse<OnUpdatePlaceSubscription>
  > = API.graphql(
    graphqlOperation(
      `subscription OnUpdatePlace {
        onUpdatePlace {
          __typename
          id
          categoryID
          location {
            __typename
            latitude
            longitude
          }
          description
          guardians
          createdAt
          updatedAt
          category {
            __typename
            id
            name
            createdAt
            updatedAt
          }
          pictures {
            __typename
            nextToken
          }
          owner
        }
      }`
    )
  ) as Observable<SubscriptionResponse<OnUpdatePlaceSubscription>>;

  OnDeletePlaceListener: Observable<
    SubscriptionResponse<OnDeletePlaceSubscription>
  > = API.graphql(
    graphqlOperation(
      `subscription OnDeletePlace {
        onDeletePlace {
          __typename
          id
          categoryID
          location {
            __typename
            latitude
            longitude
          }
          description
          guardians
          createdAt
          updatedAt
          category {
            __typename
            id
            name
            createdAt
            updatedAt
          }
          pictures {
            __typename
            nextToken
          }
          owner
        }
      }`
    )
  ) as Observable<SubscriptionResponse<OnDeletePlaceSubscription>>;
}
