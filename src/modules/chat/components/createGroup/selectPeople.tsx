import { useAuthContext } from '@/modules/auth/context/authContext';
import { useGetFriendsDataQuery } from '@/modules/friends/api/friendsApi';
import { Avatar } from '@/shared/components/avatar/avatar';
import { Checkbox } from '@/shared/components/checkbox/checkbox';
import { Input } from '@/shared/components/Input/Input';
import { RegButton } from '@/shared/components/RegButton/RegBut';
import { ICONS } from '@/shared/static/icons';
import React, { useState, useMemo, useEffect } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  SectionList,
  SafeAreaView,
  StatusBar,
  Modal,
} from 'react-native';
import { CreateGroupDetails } from './createGroup';
import { IChatContactDetailed } from '../../api/api.types';

type Contact = {
  id: number;
  name: string;
  avatar?: string;
};

type Section = {
  title: string;
  data: Contact[];
};

interface NewGroupScreenProps {
  visible: boolean;
  onCancel: () => void;
  isEdit?: boolean
  chat?: IChatContactDetailed
}

export function ChatModal({ onCancel, visible, isEdit, chat }: NewGroupScreenProps) {
  const [searchQuery, setSearchQuery] = useState('');
  const [isNext, setNext] = useState(isEdit);

  const [selectedIds, setSelectedIds] = useState<Set<number>>( new Set() );
  const { token } = useAuthContext();
  const [contacts, setContacts] = useState<Section[]>([]);
  const friends = useGetFriendsDataQuery({
    token,
    pagination: {
        recommends: 0,
        requests: 0,
    }
  }, {skip: !token, refetchOnReconnect: true});
  
  useEffect(() => {
    if (chat){
      setSelectedIds(new Set(chat.users.map(user => user.id)))
    }
  }, [chat])
  useEffect(() => {
    // let sectionsOfObject: Section[] = []
    if (friends.data?.
      friends[0]) {
      const grouped = friends.data.friends.reduce((acc: Record<string, Contact[]>, friend) => {
        
        const firstLetter = friend.pseudonym[0].toUpperCase();
        if (!acc[firstLetter]) {
          acc[firstLetter] = [];
        }
        acc[firstLetter].push({ id: friend.userId, name: friend.pseudonym, avatar: friend.avatar });
        return acc;
      }, {});

      const sections = Object.keys(grouped).sort().map(letter => ({
        title: letter,
        data: grouped[letter],
      }));
      // sectionsOfObject = sections
      setContacts(sections);
    }
  }, [friends.data]);
  // Быстрый переключатель выбора
  const toggleSelect = (id: number) => {
    setSelectedIds((prev) => {
      const next = new Set(prev);
      if (next.has(id)) {
        next.delete(id);
      } else {
        next.add(id);
      }
      return next;
    });
  };

  // Простой поиск по локальному списку
  const filteredContacts = useMemo(() => {
    if (!searchQuery) return contacts;
    
    return contacts.map((section) => ({
      ...section,
      data: section.data.filter((item) =>
        item.name.toLowerCase().includes(searchQuery.toLowerCase())
      ),
    })).filter((section) => section.data.length > 0);
  }, [searchQuery, friends.data]);
  function onNext(selectedIds: number[]) {
    // Здесь будет логика создания группы с выбранными участниками
    console.log('Создать группу с участниками:', selectedIds);
    setNext(true);
  }
  if (!visible) return null;
  if (isNext) {
        // Собираем все контакты из всех секций в один плоский массив
        const allContacts = contacts.flatMap(section => section.data);
        
        // Фильтруем только те, чьи ID есть в выбранных (selectedIds)
        const selectedParticipants = allContacts.filter(contact => selectedIds.has(contact.id));

        return (
            <CreateGroupDetails 
            visible={isNext} // Не забываем про проп visible, если он там есть
            initialParticipants={selectedParticipants.map(c => ({ id: c.id, name: c.name, avatar: c.avatar }))}
            onBack={() => setNext(!isNext)}
            onClose={onCancel}
            isEdit={isEdit}
            chat={chat}
            />
        );
    }

    return (
        <Modal 
            style={styles.layoutContainer} 
            visible={visible}
            
            animationType="slide"
            transparent
            onRequestClose={onCancel}
        >
        <View style={styles.layoutContainer}>
        <View style={styles.backgroundOverlay} />
        <View style={styles.mainContainer}>
      <StatusBar barStyle="dark-content" />
      
      {/* Кнопка закрытия */}
      <TouchableOpacity style={styles.topCloseAction} onPress={onCancel}>
        <ICONS.ExitIcon />
      </TouchableOpacity>

      <Text style={styles.mainTitle}>{ isEdit ? "Додати учасника" : "Нова група"}</Text>

      {/* Поиск */}
      <View style={styles.searchBarWrapper}>
        <Input
          placeholder="Пошук"
          value={searchQuery}
          onChangeText={setSearchQuery}
        //   icon={<ICONS. />} 
          label=""
          error=""
        />
      </View>

      <Text style={styles.counterText}>Вибрано: {selectedIds.size}</Text>

      {/* Список контактов */}
      <SectionList
        sections={filteredContacts}
        keyExtractor={(item) => String(item.id)}
        stickySectionHeadersEnabled={false}
        renderSectionHeader={({ section: { title } }) => (
          <Text style={styles.groupSectionHeader}>{title}</Text>
        )}
        renderItem={({ item }) => {
          const isSelected = selectedIds.has(item.id);
          return (
            <TouchableOpacity 
              style={styles.contactRowItem} 
              activeOpacity={0.7} 
              onPress={() => toggleSelect(item.id)}
            >
                {/* image={item.avatar}  */}
              <Avatar style={styles.avatar} />
              
              <Text style={styles.contactLabel}>{item.name}</Text>
              
              <View style={styles.checkboxContainer}>
                <Checkbox 
                  isChecked={isSelected} 
                  setIsChecked={() => toggleSelect(item.id)} 
                  text='' 
                  disabled={false}
                />
              </View>
            </TouchableOpacity>
          );
        }}
        contentContainerStyle={styles.scrollContainer}
      />

      {/* Нижние кнопки */}
      <View style={styles.footerActionsContainer}>
        <RegButton 
          title="Скасувати" 
          invisible={true} 
          onPress={onCancel} 
          Buttonstyle={styles.cancelButton}
        />
        <RegButton 
          title={isEdit ? "Зберегти" : "Далі"} 
          invisible={false}
          Buttonstyle={styles.button}
          onPress={() => onNext(Array.from(selectedIds))} 
        />
      </View>
      </View>
      </View>
    </Modal>
  );
}

const styles = StyleSheet.create({
  layoutContainer: {
    flex: 1,
    // alignItems: 'center',
    justifyContent: 'center',
    position: 'relative',
  },
  backgroundOverlay: {
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    flex: 1,
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
  },
  mainContainer: {
    backgroundColor: '#FFF',
    marginHorizontal: 20,
    borderRadius: 12,
    flex: 1,
    zIndex: 2,
    maxHeight: '90%',
    position: 'relative',
  },
  topCloseAction: {
    alignSelf: 'flex-end',
    paddingHorizontal: 24,
    paddingTop: 16,
  },
  mainTitle: {
    fontSize: 32,
    fontWeight: '700',
    textAlign: 'center',
    color: '#050E1E',
    marginVertical: 16,
  },
  searchBarWrapper: {
    paddingHorizontal: 24,
    marginBottom: 4,
  },
  counterText: {
    fontSize: 15,
    color: '#7A7A7A',
    fontWeight: '500',
    marginHorizontal: 24,
    // marginTop: 16,
    marginBottom: 10,
    marginTop:50
  },
  scrollContainer: {
    paddingHorizontal: 24,
    paddingBottom: 24,
  },
  groupSectionHeader: {
    fontSize: 16,
    fontWeight: '700',
    color: '#000',
    marginTop: 16,
    marginBottom: 8,
  },
  contactRowItem: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 12,
    borderBottomWidth: 1,
    borderBottomColor: '#F0F0F2',
  },
  contactLabel: {
    flex: 1,
    fontSize: 16,
    fontWeight: '600',
    color: '#050E1E',
    marginLeft: 16,
  },
  checkboxContainer: {
    paddingLeft: 8,
  },
  footerActionsContainer: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    paddingHorizontal: 24,
    paddingVertical: 20,
    // backgroundColor: '#FFF',
    gap: 12,
  },
  avatar: {
    width: 40,
    height: 40,
    borderRadius: 90
  },
  button: {
    paddingHorizontal: 26,
    paddingVertical: 10,
    // borderRadius: 8,
  },
  cancelButton: {
    borderColor: '#543C52',
    borderWidth: 1,
    paddingHorizontal: 16,
    paddingVertical: 10,
  },
});