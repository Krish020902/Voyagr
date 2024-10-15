import { StyleSheet } from "react-native";

export const WHITE = "#FFF";
export const PRIMARY_COLOR = "#547474"; // Based on your preference

const styles = StyleSheet.create({
  bg: {
    flex: 1,
  },
  chatContainer: {
    marginTop: 35,
    flex: 1,
    justifyContent: "space-between",
  },
  chatHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingVertical: 15,
    paddingHorizontal: 20,
    backgroundColor: PRIMARY_COLOR,
  },
  chatUserName: {
    color: WHITE,
    fontSize: 18,
    fontWeight: "bold",
  },
  messageList: {
    paddingHorizontal: 10,
    paddingVertical: 20,
    flexGrow: 1,
  },
  messageContainer: {
    padding: 10,
    borderRadius: 10,
    marginVertical: 5,
    maxWidth: "75%",
  },
  myMessage: {
    backgroundColor: PRIMARY_COLOR,
    alignSelf: "flex-end",
    borderTopRightRadius: 0,
  },
  theirMessage: {
    backgroundColor: "#8a8888",
    alignSelf: "flex-start",
    borderTopLeftRadius: 0,
  },
  messageText: {
    color: WHITE,
    fontSize: 16,
  },
  inputContainer: {
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: 10,
    paddingHorizontal: 15,
    backgroundColor: "#F5F5F5",
  },
  textInput: {
    flex: 1,
    backgroundColor: "#EAEAEA",
    borderRadius: 20,
    paddingHorizontal: 15,
    paddingVertical: 10,
    marginRight: 10,
    color: "#333",
  },
  sendButton: {
    backgroundColor: PRIMARY_COLOR,
    borderRadius: 20,
    padding: 10,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default styles;
