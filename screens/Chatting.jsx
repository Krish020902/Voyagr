import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  FlatList,
  KeyboardAvoidingView,
  Platform,
  ImageBackground,
} from "react-native";
import Icon from "../components/Icon";
import { WHITE, PRIMARY_COLOR } from "../assets/styles";
import styles from "../assets/styles/chatting";

function Chatting({ route }) {
  const { user } = route.params; // Getting the user data
  const [messages, setMessages] = useState([
    { id: "1", text: "Hello!", sender: "user" },
    { id: "2", text: "Hi, how are you?", sender: "me" },
    // More dummy messages
  ]);
  const [inputMessage, setInputMessage] = useState("");

  const sendMessage = () => {
    if (inputMessage.trim() !== "") {
      setMessages((prevMessages) => [
        ...prevMessages,
        { id: Date.now().toString(), text: inputMessage, sender: "me" },
      ]);
      setInputMessage(""); // Clear the input field
    }
  };

  const renderMessage = ({ item }) => {
    const isUserMessage = item.sender === "me";
    return (
      <View
        style={[
          styles.messageContainer,
          isUserMessage ? styles.myMessage : styles.theirMessage,
        ]}
      >
        <Text style={styles.messageText}>{item.text}</Text>
      </View>
    );
  };

  return (
    <ImageBackground
      //   source={require("../assets/images/chat-bg.png")}
      style={styles.bg}
    >
      <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : undefined}
        style={styles.chatContainer}
      >
        {/* Chat Header */}
        <View style={styles.chatHeader}>
          <TouchableOpacity>
            <Icon name="chevron-back" size={24} color={WHITE} />
          </TouchableOpacity>
          <Text style={styles.chatUserName}>{user.name}</Text>
          <TouchableOpacity>
            <Icon name="ellipsis-vertical" size={24} color={WHITE} />
          </TouchableOpacity>
        </View>

        {/* Chat messages list */}
        <FlatList
          data={messages}
          renderItem={renderMessage}
          keyExtractor={(item) => item.id}
          style={styles.messageList}
        />

        {/* Input area */}
        <View style={styles.inputContainer}>
          <TextInput
            style={styles.textInput}
            placeholder="Type a message..."
            placeholderTextColor="#999"
            value={inputMessage}
            onChangeText={(text) => setInputMessage(text)}
          />
          <TouchableOpacity onPress={sendMessage} style={styles.sendButton}>
            <Icon name="send" size={24} color={WHITE} />
          </TouchableOpacity>
        </View>
      </KeyboardAvoidingView>
    </ImageBackground>
  );
}

export default Chatting;
