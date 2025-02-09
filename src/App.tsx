// Styles
import './App.css'

// AWS Amplify UI Components
import { Authenticator } from '@aws-amplify/ui-react';
import '@aws-amplify/ui-react/styles.css';
import { AIConversation } from '@aws-amplify/ui-react-ai';

// Import hooks from our client file
import { useAIConversation } from './api/amplifyClient';

/**
 * Main App component
 * Provides authentication wrapper and chat interface
 */
function App() {
  // Initialize AI conversation hook
  const [
    {
      data: { messages },
      isLoading,
    },
    handleSendMessage,
  ] = useAIConversation('chat');

  return (
    <Authenticator>
      <div className="app-container">
        <h1 className="app-title">AI Assistant</h1>
        <div className="chat-container">
          <AIConversation
            messages={messages}
            isLoading={isLoading}
            handleSendMessage={handleSendMessage}
          />
        </div>
      </div>
    </Authenticator>
  )
}

export default App
