import React from "react";
import { Modal, View, Text, TextInput, Pressable, ScrollView } from "react-native";
import { createPostModalStyles } from "./createPostModal.styles";

interface CreatePostModalProps {
  visible: boolean;
  onClose: () => void;
}

export const CreatePostModal: React.FC<CreatePostModalProps> = ({ visible, onClose }) => {
  return (
    <Modal
      visible={visible}
      animationType="slide"
      transparent
      onRequestClose={onClose}
    >
      <View style={createPostModalStyles.modalOverlay}>
        <View style={createPostModalStyles.modalContainer}>
          <Pressable onPress={onClose} style={createPostModalStyles.closeButton}>
            <Text style={createPostModalStyles.closeButtonText}>✕</Text>
          </Pressable>
          <Text style={createPostModalStyles.title}>
            Створення публікації
          </Text>
          <ScrollView>
            <Text style={createPostModalStyles.label}>Назва публікації</Text>
            <TextInput
              style={createPostModalStyles.input}
              placeholder="Природа, книга і спокій"
            />
            <Text style={createPostModalStyles.label}>Тема публікації</Text>
            <TextInput
              style={createPostModalStyles.input}
              placeholder="Напишіть тему публікації"
            />
            <View style={createPostModalStyles.tagsContainer}>
              {['#відпочинок','#натхнення','#життя','#природа','#читання','#спокій','#гармонія','#музика','#фільми','#подорожі'].map(tag => (
                <View key={tag} style={createPostModalStyles.tag}>
                  <Text style={createPostModalStyles.tagText}>{tag}</Text>
                </View>
              ))}
              <View style={createPostModalStyles.tag}>
                <Text style={createPostModalStyles.tagText}>+</Text>
              </View>
            </View>
            <TextInput
              style={createPostModalStyles.textarea}
              placeholder="Текст публікації"
              multiline
            />
            <Text style={createPostModalStyles.label}>Посилання</Text>
            <TextInput
              style={[createPostModalStyles.input, { marginBottom: 24 }]}
              placeholder="https://www.instagram.com/"
            />
            <Pressable
              style={createPostModalStyles.submitButton}
              onPress={onClose}
            >
              <Text style={createPostModalStyles.submitButtonText}>Публікація</Text>
            </Pressable>
          </ScrollView>
        </View>
      </View>
    </Modal>
  );
};
