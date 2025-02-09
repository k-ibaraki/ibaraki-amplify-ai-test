// AWS Amplify Core
import { Amplify } from 'aws-amplify';
import outputs from "../../amplify_outputs.json";

// AWS Amplify Client Setup
import { generateClient } from "aws-amplify/api";
import { Schema } from "../../amplify/data/resource";
import { createAIHooks } from "@aws-amplify/ui-react-ai";

// Configure Amplify with outputs
Amplify.configure(outputs);

// Initialize API client and AI hooks
export const client = generateClient<Schema>({ authMode: "userPool" });
export const { useAIConversation } = createAIHooks(client);