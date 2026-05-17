import React from 'react';
import { View, Text, Image, StyleSheet, Pressable } from 'react-native';
import { styles } from '../styles/friendsAlbums.style';
import { ICONS } from '@/shared/static/icons';

export function AlbumCard() {
  const handleSeeAll = () => {
    console.log("Navigate to all albums");
  };

  return (
    <View style={styles.cardContainer}>
      
      {/* HEADER SECTION: "Альбоми" and "Дивитись всі" */}
      <View style={styles.headerRow}>
        <View style={styles.titleContainer}>
          {/* Icon placeholder - replace with @expo/vector-icons if installed */}
          <ICONS.PublicIcon />
          <Text style={styles.headerTitle}>Альбоми</Text>
        </View>
        
        <Pressable onPress={handleSeeAll}>
          <Text style={[styles.seeAllText, styles.deactiveText]}>Дивитись всі</Text>
        </Pressable>
      </View>

      {/* DIVIDER LINE */}
      <View style={styles.divider} />
        <Text style={styles.deactiveText}>Альбомів поки немає</Text>
      {/* TEXT LABELS */}
      {/* <View style={styles.textSection}>
        <Text style={styles.albumCategory}>Настрій</Text>
        <View style={styles.albumMetaRow}>
          <Text style={styles.albumTitle}>Природа</Text>
          <Text style={styles.albumYear}>2025 рік</Text>
        </View>
      </View> */}

      {/* COVER IMAGE */}
      {/* <Image 
        source={{ uri: 'https://images.unsplash.com/photo-1502082553048-f009c37129b9?q=80&w=1000' }} 
        style={styles.coverImage}
        resizeMode="cover"
      /> */}

    </View>
  );
}