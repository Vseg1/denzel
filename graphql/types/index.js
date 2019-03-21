import { mergeTypes } from "merge-graphql-schemas";

import Movie from "./Movies/";

const typeDefs = [Movie];

export default mergeTypes(typeDefs, { all: true });