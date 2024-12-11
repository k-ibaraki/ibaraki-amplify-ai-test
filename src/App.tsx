import './App.css'

import { Authenticator } from '@aws-amplify/ui-react';
import '@aws-amplify/ui-react/styles.css';
import { Amplify } from 'aws-amplify';

import { AIConversation } from '@aws-amplify/ui-react-ai';

import { generateClient } from "aws-amplify/api";
import { Schema } from "../amplify/data/resource";
import { createAIHooks } from "@aws-amplify/ui-react-ai";

import outputs from "../amplify_outputs.json";
Amplify.configure(outputs);

export const client = generateClient<Schema>({ authMode: "userPool" });
export const { useAIConversation } = createAIHooks(client);



function App() {
  const [
    {
      data: { messages },
      isLoading,
    },
    handleSendMessage,
  ] = useAIConversation('chat');

  return (
    <Authenticator>
      <AIConversation
        messages={messages}
        isLoading={isLoading}
        handleSendMessage={handleSendMessage}
      />
    </Authenticator>
  )
}

export default App
