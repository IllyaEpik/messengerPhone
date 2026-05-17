import React, { useMemo, useState } from "react";
import { View, Text, TextInput, FlatList, Image, TouchableOpacity } from "react-native";
import { styles } from "../styles/chat.styles";

const tabs = [
  { id: "contacts", label: "Контакти" },
  { id: "messages", label: "Повідомлення" },
  { id: "groups", label: "Групові чати" },
];

const contacts = [
  { id: "1", name: "Jane Cooper", image: "https://randomuser.me/api/portraits/women/1.jpg" },
  { id: "2", name: "Cameron Williamson", image: "https://randomuser.me/api/portraits/men/2.jpg" },
  { id: "3", name: "Leslie Alexander", image: "https://randomuser.me/api/portraits/women/3.jpg" },
  { id: "4", name: "Robert Fox", image: "https://randomuser.me/api/portraits/men/4.jpg" },
  { id: "5", name: "Jacob Jones", image: "https://randomuser.me/api/portraits/men/5.jpg" },
  { id: "6", name: "Brooklyn Simmons", image: "https://randomuser.me/api/portraits/women/6.jpg" },
];

const groupChats = [
  { id: "g1", title: "New group", message: "Привіт! Як справи ?", time: "09:41" },
  { id: "g2", title: "Ann Ti", message: "Привіт!", time: "25.04.2025" },
  { id: "g3", title: "Ness Ty", message: "Привіт!", time: "25.04.2025" },
];

export function ContactsScreen(){
    const [activeTab, setActiveTab] = useState("contacts");

  const activeTabLabel = useMemo(
    () => tabs.find((tab) => tab.id === activeTab)?.label ?? "Контакти",
    [activeTab]
    
  );
  console.log(activeTab)

  return (
    <View style={styles.container}>
      <View style={styles.tabs}>
        {tabs.map((tab) => (
          <TouchableOpacity
            key={tab.id}
            style={[styles.tab, activeTab === tab.id && styles.activeTab]}
            onPress={() => setActiveTab(tab.id)}
          >
            <Text style={activeTab === tab.id ? styles.activeTabText : styles.tabText}>
              {tab.label}
            </Text>
          </TouchableOpacity>
        ))}
      </View>

      <Text style={styles.title}>{activeTabLabel}</Text>

      <TextInput placeholder="Пошук" placeholderTextColor="#999" style={styles.searchInput} />

      {activeTab === "contacts" && (
        <FlatList
          data={contacts}
          keyExtractor={(item) => item.id}
          showsVerticalScrollIndicator={false}
          contentContainerStyle={styles.list}
          renderItem={({ item }) => (
            <TouchableOpacity style={styles.contactItem}>
              <Image source={{ uri: item.image }} style={styles.avatar} />
              <Text style={styles.contactName}>{item.name}</Text>
            </TouchableOpacity>
          )}
        />
      )}

      {activeTab === "messages" && (
        <View style={styles.placeholderBox}>
          <Text style={styles.placeholderText}>Поки тут показуються тільки контакти.</Text>
        </View>
      )}

      {activeTab === "groups" && (
        <FlatList
          data={groupChats}
          keyExtractor={(item) => item.id}
          showsVerticalScrollIndicator={false}
          contentContainerStyle={styles.list}
          renderItem={({ item }) => (
            <TouchableOpacity style={styles.groupItem}>
              <View style={styles.groupAvatar}>
                <Text style={styles.groupAvatarText}>{item.title.slice(0, 2).toUpperCase()}</Text>
              </View>
              <View style={styles.groupInfo}>
                <View style={styles.groupHeader}>
                  <Text style={styles.contactName}>{item.title}</Text>
                  <Text style={styles.groupTime}>{item.time}</Text>
                </View>
                <Text style={styles.groupMessage}>{item.message}</Text>
              </View>
            </TouchableOpacity>
          )}
        />
      )}
    </View>
  );
};

