import { mergeTypes } from "merge-graphql-schemas";

import Movie from "./Movie/";

const typeDefs = [Movie];

export default mergeTypes(typeDefs, { all: true });