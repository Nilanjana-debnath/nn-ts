// import { DataAPIClient } from "@datastax/astra-db-ts";
// import { AstraDBVectorStore } from "@langchain/community/vectorstores/astradb";
// // import { OpenAIEmbeddings } from "@langchain/openai";
// import { GoogleGenerativeAIEmbeddings } from "@langchain/google-genai";

// const endpoint = process.env.ASTRA_DB_API_ENDPOINT || "";
// const token = process.env.ASTRA_DB_APPLICATION_TOKEN || "";
// const collection = process.env.ASTRA_DB_COLLECTION || "";

// if (!endpoint || !token || !collection) {
//   throw new Error("Please set environmental variables for Astra DB!");
// }

// export async function getVectorStore() {
//   return AstraDBVectorStore.fromExistingIndex(
//     new GoogleGenerativeAIEmbeddings({ model: "embedding-001" }),
//     {
//       token,
//       endpoint,
//       collection,
//       collectionOptions: {
//         vector: { dimension: 1536, metric: "cosine" },
//       },
//     },
//   );
// }

// export async function getEmbeddingsCollection() {
//   const client = new DataAPIClient(token);
//   const db = client.db(endpoint);

//   return db.collection(collection);
// }


import { DataAPIClient } from "@datastax/astra-db-ts";
import { AstraDBVectorStore } from "@langchain/community/vectorstores/astradb";
import { GoogleGenerativeAIEmbeddings } from "@langchain/google-genai";

const endpoint = process.env.ASTRA_DB_API_ENDPOINT || "";
const token = process.env.ASTRA_DB_APPLICATION_TOKEN || "";
const collection = process.env.ASTRA_DB_COLLECTION || "";

if (!endpoint || !token || !collection) {
  throw new Error("Please set environmental variables for Astra DB!");
}

export async function getVectorStore() {
  try {
    const embeddings = new GoogleGenerativeAIEmbeddings({ model: "embedding-001" });

    // Log the embedding dimension for debugging
    const sampleEmbedding = await embeddings.embedQuery("test");
    console.log("Embedding dimension:", sampleEmbedding.length);

    return await AstraDBVectorStore.fromExistingIndex(embeddings, {
      token,
      endpoint,
      collection,
      collectionOptions: {
        vector: { dimension: sampleEmbedding.length, metric: "cosine" }, // Use actual dimension
      },
    });
  } catch (error) {
    console.error("Error creating vector store:", error);
    throw error;
  }
}

export async function getEmbeddingsCollection() {
  try {
    const client = new DataAPIClient(token);
    const db = client.db(endpoint);

    return db.collection(collection);
  } catch (error) {
    console.error("Error getting embeddings collection:", error);
    throw error;
  }
}